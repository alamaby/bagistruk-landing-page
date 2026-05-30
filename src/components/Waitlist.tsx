import { useState, type FormEvent } from "react";
import { content, type Lang } from "../content";
import { CheckIcon } from "./Icons";

type Status = "idle" | "submitting" | "success" | "error";

const SUBMITTED_KEY = "bagistruk_waitlist_done";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export function Waitlist({ lang }: { lang: Lang }) {
  const t = content[lang].waitlist;
  const [email, setEmail] = useState("");
  const [updates, setUpdates] = useState(true);
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<Status>(() =>
    typeof window !== "undefined" && window.localStorage.getItem(SUBMITTED_KEY)
      ? "success"
      : "idle"
  );
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === "submitting" || status === "success") return;

    // Honeypot: if filled, silently pretend success (likely a bot).
    if (honeypot) {
      setStatus("success");
      return;
    }

    if (!isValidEmail(email)) {
      setError(t.errorEmail);
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setError("");

    try {
      // No backend available — simulate a submission and persist locally
      // so repeated submissions are prevented on this device.
      await new Promise((r) => setTimeout(r, 900));
      window.localStorage.setItem(
        SUBMITTED_KEY,
        JSON.stringify({ email: email.trim(), updates, at: Date.now() })
      );
      setStatus("success");
    } catch {
      setError(t.errorGeneric);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="mx-auto flex max-w-md flex-col items-center gap-3 rounded-2xl border border-teal-200 bg-teal-50 px-6 py-8 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-600 text-white">
          <CheckIcon className="h-6 w-6" />
        </div>
        <p className="text-base font-medium text-teal-900">{t.success}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-full max-w-md text-left" noValidate>
      {/* Honeypot field — hidden from real users */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700">
        {t.emailLabel}
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id="email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          placeholder={t.emailPlaceholder}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") {
              setStatus("idle");
              setError("");
            }
          }}
          aria-invalid={status === "error"}
          className="w-full flex-1 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/30"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex shrink-0 items-center justify-center rounded-xl bg-teal-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500/40 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? t.submitting : t.submit}
        </button>
      </div>

      {status === "error" && (
        <p role="alert" className="mt-2 text-sm font-medium text-rose-600">
          {error}
        </p>
      )}

      <label className="mt-3 flex items-start gap-2 text-sm text-slate-600">
        <input
          type="checkbox"
          checked={updates}
          onChange={(e) => setUpdates(e.target.checked)}
          className="mt-0.5 h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500"
        />
        <span>{t.updates}</span>
      </label>
    </form>
  );
}
