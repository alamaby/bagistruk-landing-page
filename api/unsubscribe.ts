// Vercel BFF: one-click unsubscribe from marketing emails.
//
// The link in the email points to the landing page:
//   https://bagistruk.alamaby.com/{id}/emails/unsubscribe?token=...&lang=...
// This function performs the actual unsubscribe using the service-role key
// (server-side only - never exposed to the client), then redirects to the
// landing-page outcome page.
//
// Mirrors the logic of the Supabase `marketing-unsubscribe` Edge Function so
// both paths stay in sync: lookup by token, honour expired tokens (opt-out is
// still honoured), idempotent for already-unsubscribed rows, profile mirror
// clear, and audit record.

import { createClient } from "@supabase/supabase-js";
import type { IncomingMessage, ServerResponse } from "node:http";

const SITE_URL = process.env.SITE_URL ?? "https://bagistruk.alamaby.com";

export default async function handler(
  req: IncomingMessage,
  res: ServerResponse,
): Promise<void> {
  if (req.method !== "GET") {
    res.statusCode = 405;
    res.setHeader("content-type", "application/json");
    res.end(JSON.stringify({ error: "method_not_allowed" }));
    return;
  }

  const url = new URL(req.url ?? "/", `http://${req.headers.host ?? "localhost"}`);
  const token = (url.searchParams.get("token") ?? "").trim();
  const lang = url.searchParams.get("lang") === "id" ? "id" : "en";

  if (!token) {
    redirect(res, lang, "unknown");
    return;
  }

  const supabaseUrl = process.env.VITE_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !serviceRoleKey) {
    redirect(res, lang, "error");
    return;
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  try {
    const { data: subscriber, error } = await supabase
      .from("marketing_subscribers")
      .select(
        "id, email_canonical_hash, status, unsubscribe_token_expires_at, linked_user_id",
      )
      .eq("unsubscribe_token", token)
      .maybeSingle();

    if (error) {
      redirect(res, lang, "error");
      return;
    }
    if (!subscriber) {
      redirect(res, lang, "unknown");
      return;
    }

    // Expired token: still honour the unsubscribe (the user is asking to opt
    // out). Log it but proceed so a stale link can never trap someone.
    const expiresAt = subscriber.unsubscribe_token_expires_at
      ? new Date(subscriber.unsubscribe_token_expires_at)
      : null;
    const expired = expiresAt ? expiresAt.getTime() < Date.now() : false;

    if (subscriber.status === "unsubscribed") {
      redirect(res, lang, "already");
      return;
    }

    const now = new Date().toISOString();
    const { error: updateError } = await supabase
      .from("marketing_subscribers")
      .update({
        status: "unsubscribed",
        unsubscribed_at: now,
        unsubscribe_token: null,
        unsubscribe_token_expires_at: null,
      })
      .eq("id", subscriber.id);
    if (updateError) {
      redirect(res, lang, "error");
      return;
    }

    // Mirror to profile if linked (the DB trigger also fires, but double-write
    // for defence in depth, same as the Edge Function).
    if (subscriber.linked_user_id) {
      await supabase
        .from("profiles")
        .update({
          marketing_email_opt_in: false,
          marketing_email_opt_in_at: null,
          marketing_email_opt_in_source: null,
        })
        .eq("id", subscriber.linked_user_id)
        .then(({ error: profileErr }) => {
          if (profileErr) console.warn("profile mirror clear failed", profileErr);
        });
    }

    await supabase
      .from("marketing_audit_log")
      .insert({
        action: "unsubscribe",
        subscriber_id: subscriber.id,
        email_canonical_hash: subscriber.email_canonical_hash,
      })
      .then(({ error: auditErr }) => {
        if (auditErr) console.warn("marketing_audit_log insert failed", auditErr);
      });

    redirect(res, lang, expired ? "success_expired_token" : "success");
  } catch (e) {
    console.error("api/unsubscribe failed", e);
    redirect(res, lang, "error");
  }
}

function redirect(res: ServerResponse, lang: "en" | "id", outcome: string): void {
  const path = lang === "id" ? "/id" : "";
  res.statusCode = 302;
  res.setHeader("location", `${SITE_URL}${path}/emails/unsubscribed?outcome=${outcome}`);
  res.end();
}
