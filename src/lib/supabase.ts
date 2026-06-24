// Thin Supabase client wrapper used by the landing page. Only the public
import { createClient, type SupabaseClient } from "@supabase/supabase-js";
const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;
let cached: SupabaseClient | null = null;
export function supabase(): SupabaseClient | null {
  if (cached) return cached;
  if (!url || !anonKey || url.includes("YOUR-PROJECT")) return null;
  cached = createClient(url, anonKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  return cached;
}
export const FUNCTIONS = {
  marketingSubscribe: "marketing-subscribe",
  marketingUnsubscribe: "marketing-unsubscribe",
  marketingPreferencesRequest: "marketing-preferences-request",
  marketingGetSubscriber: "marketing-get-subscriber",
  accountDeleteRequest: "account-delete-request",
} as const;
export type InvokeResult<T> =
  | { ok: true; data: T }
  | { ok: false; status: number; code?: string; message: string };
// Calls an Edge Function. Returns a normalised envelope so call sites do
export async function invoke<T = unknown>(
  name: string,
  body?: Record<string, unknown>,
): Promise<InvokeResult<T>> {
  const client = supabase();
  if (!client) {
    return {
      ok: false,
      status: 0,
      code: "client_not_configured",
      message: "Supabase env vars missing. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in Vercel.",
    };
  }
  try {
    const { data, error } = await client.functions.invoke<T>(name, {
      body: body ?? {},
    });
    if (error) {
      // supabase-js returns non-2xx responses as FunctionsHttpError with a
      // context payload that carries the parsed JSON body.
      const ctx = (error as unknown as { context?: { status?: number; body?: { error?: string } } })
        .context;
      return {
        ok: false,
        status: ctx?.status ?? 0,
        code: ctx?.body?.error,
        message: ctx?.body?.error ?? error.message,
      };
    }
    return { ok: true, data: data as T };
  } catch (e) {
    return {
      ok: false,
      status: 0,
      message: e instanceof Error ? e.message : String(e),
    };
  }
}
// Lookup table that maps an Edge Function error code to a localised user
// message key. Call sites import the message via content.ts.
export const ERROR_CODE_HINTS: Record<string, "rate_limited" | "disposable_email" | "invalid_email" | "generic"> = {
  rate_limited: "rate_limited",
  disposable_email: "disposable_email",
  invalid_email: "invalid_email",
};
