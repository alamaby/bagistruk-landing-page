import { useEffect, useState, type FormEvent } from "react";
import { content, type Lang } from "../content";
import { FUNCTIONS, invoke, supabase } from "../lib/supabase";
import { CheckIcon } from "./Icons";
type LookupResult = {
  found: boolean;
  token_expired?: boolean;
  email_canonical?: string;
  status?: "pending" | "subscribed" | "unsubscribed";
  preferred_language?: "en" | "id";
  subscribed_at?: string | null;
  unsubscribed_at?: string | null;
};
type Status = "idle" | "submitting" | "success" | "error";
type FormCopy = (typeof content)[Lang]["emailPreferences"];
function emailForError(t: FormCopy, code?: string): string {
  switch (code) {
    case "rate_limited":
      return t.errorRateLimit;
    case "invalid_email":
      return t.errorEmail;
    default:
      return t.errorGeneric;
  }
}
export function EmailPreferencesPage({
  lang,
  token,
}: {
  lang: Lang;
  token: string | null;
}) {
  const formT = content[lang].emailPreferences;
  const manageT = content[lang].emailPreferencesManage;
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [lookup, setLookup] = useState<LookupResult | null>(null);
  const [lookupLoading, setLookupLoading] = useState(false);
  const [actionPending, setActionPending] = useState<"resub" | "unsub" | null>(null);
  useEffect(() => {
    if (!token) {
      setLookup(null);
      return;
    }
    let cancelled = false;
    setLookupLoading(true);
    (async () => {
      const client = supabase();
      if (!client) {
        setLookup({ found: false });
        setLookupLoading(false);
        return;
      }
      try {
        const { data, error } = await client.functions.invoke<LookupResult>(
          FUNCTIONS.marketingGetSubscriber,
          { method: "GET" },
        );
        if (cancelled) return;
        if (error || !data || !data.found) {
          setLookup({ found: false });
        } else {
          setLookup(data);
        }
      } finally {
        if (!cancelled) setLookupLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [token]);
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === "submitting" || status === "success") return;
    if (honeypot) {
      setStatus("success");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError(formT.errorEmail);
      setStatus("error");
      return;
    }
    setStatus("submitting");
    setError("");
    const res = await invoke(FUNCTIONS.marketingPreferencesRequest, {
      email: email.trim(),
      preferredLanguage: lang,
    });
    if (res.ok) {
      setStatus("success");
    } else {
      setError(emailForError(formT, res.code));
      setStatus("error");
    }
  }
  async function handleAction(target: "resub" | "unsub") {
    if (!lookup || !token) return;
    setActionPending(target);
    const action = target === "unsub" ? "marketing-unsubscribe" : "marketing-subscribe";
    const base = import.meta.env.VITE_SUPABASE_URL as string | undefined;
    if (!base) {
      setActionPending(null);
      return;
    }
    const url = `${base}/functions/v1/${action}?token=${encodeURIComponent(token)}&lang=${lang}`;
    try {
      const res = await fetch(url, { method: "GET", redirect: "follow" });
      void res; // response body is the redirect target; we just check ok
      setLookup({
        ...lookup,
        status: target === "unsub" ? "unsubscribed" : "subscribed",
        subscribed_at: target === "resub" ? new Date().toISOString() : lookup.subscribed_at,
        unsubscribed_at: target === "unsub" ? new Date().toISOString() : null,
      });
    } catch {
      // ignore — user can retry
    } finally {
      setActionPending(null);
    }
  }
  if (token && lookupLoading) {
    return (
      <main className="mx-auto max-w-3xl px-5 py-16 sm:py-24">
        <p className="text-sm text-slate-500">
          {lang === "id" ? "Memuat…" : "Loading…"}
        </p>
      </main>
    );
  }
  if (token && lookup && !lookup.found) {
    return (
      <main className="mx-auto max-w-3xl px-5 py-16 sm:py-24">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          {manageT.heading}
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-600">
          {manageT.statusNotFound}
        </p>
      </main>
    );
  }
  if (token && lookup && lookup.found) {
    const statusText =
      lookup.status === "subscribed"
        ? manageT.statusSubscribed
        : lookup.status === "unsubscribed"
          ? manageT.statusUnsubscribed
          : manageT.statusPending;
    return (
      <main className="mx-auto max-w-3xl px-5 py-16 sm:py-24">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          {manageT.heading}
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-600">{statusText}</p>
        <p className="mt-2 text-sm text-slate-500">
          {lookup.email_canonical}
        </p>
        <div className="mt-6 flex flex-col gap-2 sm:flex-row">
          {lookup.status !== "subscribed" && (
            <button
              type="button"
              onClick={() => handleAction("resub")}
              disabled={actionPending !== null}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500/40 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {actionPending === "resub"
                ? manageT.submitting
                : manageT.resubscribe}
            </button>
          )}
          {lookup.status === "subscribed" && (
            <button
              type="button"
              onClick={() => handleAction("unsub")}
              disabled={actionPending !== null}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {actionPending === "unsub"
                ? manageT.submitting
                : manageT.unsubscribe}
            </button>
          )}
          {actionPending === null && (lookup.status === "subscribed" || lookup.status === "unsubscribed") && (
            <span className="inline-flex items-center gap-2 text-sm text-teal-700">
              <CheckIcon className="h-4 w-4" />
              {manageT.success}
            </span>
          )}
        </div>
      </main>
    );
  }
  return (
    <main className="mx-auto max-w-3xl px-5 py-16 sm:py-24">
      <p className="text-xs font-bold uppercase tracking-wide text-teal-700">
        {formT.title}
      </p>
      <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
        {formT.heading}
      </h1>
      <p className="mt-4 text-base leading-7 text-slate-600">{formT.body}</p>
      {status === "success" ? (
        <div className="mt-8 rounded-xl border border-teal-200 bg-teal-50 p-4">
          <div className="flex items-start gap-2">
            <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
            <p className="text-sm font-medium text-teal-900">{formT.success}</p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 space-y-3" noValidate>
          <div className="absolute left-[-9999px]" aria-hidden="true">
            <label htmlFor="company_prefs">Company</label>
            <input
              id="company_prefs"
              name="company"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
          </div>
          <label
            htmlFor="prefs_email"
            className="block text-sm font-medium text-slate-700"
          >
            {formT.emailLabel}
          </label>
          <input
            id="prefs_email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            placeholder={formT.emailPlaceholder}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status === "error") {
                setStatus("idle");
                setError("");
              }
            }}
            aria-invalid={status === "error"}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/30"
          />
          {status === "error" && (
            <p role="alert" className="text-xs font-medium text-rose-600">
              {error}
            </p>
          )}
          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500/40 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "submitting" ? formT.submitting : formT.submit}
          </button>
        </form>
      )}
    </main>
  );
}
