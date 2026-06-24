import { useEffect, useState, type FormEvent } from "react";
import { content, type Lang } from "../content";
import { FUNCTIONS, invoke } from "../lib/supabase";
import { CheckIcon } from "./Icons";
type Status = "idle" | "submitting" | "success" | "error";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
type ModalCopy = (typeof content)[Lang]["accountDeleteModal"];
function messageForError(t: ModalCopy, code?: string): string {
  switch (code) {
    case "rate_limited":
      return t.errorRateLimit;
    case "invalid_email":
      return t.errorEmail;
    default:
      return t.errorGeneric;
  }
}
export function AccountDeleteModal({
  lang,
  open,
  onClose,
}: {
  lang: Lang;
  open: boolean;
  onClose: () => void;
}) {
  const t = content[lang].accountDeleteModal;
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  useEffect(() => {
    if (!open) return;
    setStatus("idle");
    setError("");
    setEmail("");
    setHoneypot("");
  }, [open]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);
  if (!open) return null;
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === "submitting" || status === "success") return;
    if (honeypot) {
      setStatus("success");
      return;
    }
    if (!EMAIL_RE.test(email.trim())) {
      setError(t.errorEmail);
      setStatus("error");
      return;
    }
    setStatus("submitting");
    setError("");
    const res = await invoke(FUNCTIONS.accountDeleteRequest, {
      email: email.trim(),
      preferredLanguage: lang,
    });
    if (res.ok) {
      setStatus("success");
    } else {
      setError(messageForError(t, res.code));
      setStatus("error");
    }
  }
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="delete_modal_title"
      className="fixed inset-0 z-50 flex items-end justify-center bg-slate-900/60 p-4 sm:items-center"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h2
          id="delete_modal_title"
          className="text-xl font-bold text-slate-900"
        >
          {t.title}
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">{t.body}</p>
        {status === "success" ? (
          <div className="mt-5 rounded-xl border border-teal-200 bg-teal-50 p-4">
            <div className="flex items-start gap-2">
              <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
              <p className="text-sm font-medium text-teal-900">{t.success}</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-5 space-y-3" noValidate>
            <div className="absolute left-[-9999px]" aria-hidden="true">
              <label htmlFor="company_delete">Company</label>
              <input
                id="company_delete"
                name="company"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </div>
            <label
              htmlFor="delete_email"
              className="block text-sm font-medium text-slate-700"
            >
              {t.emailLabel}
            </label>
            <input
              id="delete_email"
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
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/30"
            />
            <p className="text-xs leading-5 text-slate-500">{t.warning}</p>
            {status === "error" && (
              <p role="alert" className="text-xs font-medium text-rose-600">
                {error}
              </p>
            )}
            <div className="flex flex-col-reverse gap-2 pt-2 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300"
              >
                {t.cancel}
              </button>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center justify-center rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500/40 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "submitting" ? t.submitting : t.submit}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
