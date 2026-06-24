import { useState, type FormEvent } from "react";
import { content, type Lang } from "../content";
import { FUNCTIONS, invoke } from "../lib/supabase";
import { CheckIcon } from "./Icons";
type Status = "idle" | "submitting" | "success" | "error";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
type FooterCopy = (typeof content)[Lang]["footer"];
function messageForError(t: FooterCopy, code?: string): string {
  switch (code) {
    case "rate_limited":
      return t.updatesErrorRateLimit;
    case "disposable_email":
      return t.updatesErrorDisposable;
    case "invalid_email":
      return t.updatesErrorEmail;
    default:
      return t.updatesErrorGeneric;
  }
}
export function FooterSubscribe({ lang }: { lang: Lang }) {
  const t = content[lang].footer;
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === "submitting" || status === "success") return;
    if (honeypot) {
      setStatus("success");
      return;
    }
    if (!EMAIL_RE.test(email.trim())) {
      setError(t.updatesErrorEmail);
      setStatus("error");
      return;
    }
    setStatus("submitting");
    setError("");
    const res = await invoke(FUNCTIONS.marketingSubscribe, {
      email: email.trim(),
      preferredLanguage: lang,
      source: "landing_footer",
    });
    if (res.ok) {
      setStatus("success");
    } else {
      setError(messageForError(t, res.code));
      setStatus("error");
    }
  }
  if (status === "success") {
    return (
      <div className="rounded-xl border border-teal-200 bg-teal-50 p-3 text-sm text-teal-900">
        <div className="flex items-center gap-2">
          <CheckIcon className="h-4 w-4 shrink-0 text-teal-600" />
          <span>{t.updatesSuccess}</span>
        </div>
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-2" noValidate>
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="company_footer">Company</label>
        <input
          id="company_footer"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>
      <label
        htmlFor="footer_email"
        className="block text-xs font-medium text-slate-300"
      >
        {t.updatesLabel}
      </label>
      <input
        id="footer_email"
        name="email"
        type="email"
        inputMode="email"
        autoComplete="email"
        required
        placeholder={t.updatesPlaceholder}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (status === "error") {
            setStatus("idle");
            setError("");
          }
        }}
        aria-invalid={status === "error"}
        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/30"
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center rounded-lg bg-teal-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500/40 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? t.updatesSubmitting : t.updatesSubmit}
      </button>
      {status === "error" && (
        <p role="alert" className="text-xs font-medium text-rose-600">
          {error}
        </p>
      )}
    </form>
  );
}
