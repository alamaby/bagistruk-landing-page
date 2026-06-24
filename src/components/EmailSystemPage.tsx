import type { Lang } from "../content";
// Generic confirmation page shared by /emails/confirmed,
// /emails/unsubscribed and /account-delete/completed. Outcome query
// parameter tweaks the body text + CTA so we can stay in a single
// React component.

type Outcome =
  | "success"
  | "already"
  | "expired"
  | "success_expired_token"
  | "unknown"
  | "error";
type Variant = "confirmed" | "unsubscribed" | "deleted";
const COPY: Record<
  Lang,
  Record<Variant, { title: string; heading: string; body: string; cta: string; successTitle: string }>
> = {
  en: {
    confirmed: {
      title: "You're subscribed",
      heading: "You're on the list",
      body: "Thanks for confirming. We'll send you BagiStruk product news, feature announcements, and onboarding tips occasionally. No spam — promise.",
      cta: "Manage email preferences",
      successTitle: "You're subscribed",
    },
    unsubscribed: {
      title: "You've been unsubscribed",
      heading: "Sorry to see you go",
      body: "You won't receive any more marketing emails from us. If this was a mistake, you can re-subscribe anytime from the form at the bottom of our homepage.",
      cta: "Back to home",
      successTitle: "You've been unsubscribed",
    },
    deleted: {
      title: "Account deletion processed",
      heading: "Your account has been deleted",
      body: "Your BagiStruk account, bills, and personal data have been permanently deleted. If you have multiple accounts registered with different emails, you can request deletion for each one separately.",
      cta: "Back to home",
      successTitle: "Account deletion processed",
    },
  },
  id: {
    confirmed: {
      title: "Anda sudah berlangganan",
      heading: "Anda sudah masuk daftar",
      body: "Terima kasih sudah konfirmasi. Kami akan mengirim kabar produk, pengumuman fitur, dan tips onboarding BagiStruk sesekali. Tanpa spam — janji.",
      cta: "Kelola preferensi email",
      successTitle: "Anda sudah berlangganan",
    },
    unsubscribed: {
      title: "Anda sudah berhenti berlangganan",
      heading: "Yah, Anda pergi",
      body: "Anda tidak akan menerima email marketing lagi dari kami. Kalau ini tidak sengaja, Anda bisa berlangganan lagi kapan saja lewat form di bagian bawah beranda kami.",
      cta: "Kembali ke beranda",
      successTitle: "Anda sudah berhenti berlangganan",
    },
    deleted: {
      title: "Hapus akun diproses",
      heading: "Akun Anda sudah dihapus",
      body: "Akun BagiStruk, bill, dan data pribadi Anda sudah dihapus permanen. Kalau Anda punya beberapa akun dengan email berbeda, Anda bisa meminta hapus untuk masing-masing.",
      cta: "Kembali ke beranda",
      successTitle: "Hapus akun diproses",
    },
  },
};
function variantForPage(page: string): Variant {
  if (page === "email_unsubscribed") return "unsubscribed";
  if (page === "account_delete_completed") return "deleted";
  return "confirmed";
}
export function EmailSystemPage({
  lang,
  page,
  outcome,
  homeHref,
  manageHref,
}: {
  lang: Lang;
  page: "email_confirmed" | "email_unsubscribed" | "account_delete_completed";
  outcome: Outcome | null;
  homeHref: string;
  manageHref: string;
}) {
  const variant = variantForPage(page);
  const t = COPY[lang][variant];
  const isSuccess =
    outcome === "success" ||
    outcome === "already" ||
    outcome === "success_expired_token" ||
    outcome === null; // null outcome defaults to success copy.

  const heading = isSuccess
    ? variant === "confirmed"
      ? COPY[lang].confirmed.heading
      : variant === "unsubscribed"
        ? COPY[lang].unsubscribed.heading
        : COPY[lang].deleted.heading
    : lang === "id"
      ? "Permintaan tidak dapat diproses"
      : "Request could not be processed";
  const body = isSuccess
    ? t.body
    : lang === "id"
      ? "Link ini tidak valid, sudah kedaluwarsa, atau pernah dipakai. Coba lagi dari awal atau hubungi kami jika butuh bantuan."
      : "This link is invalid, expired, or already used. Please try again from the start, or contact us if you need help.";
  const ctaLabel = isSuccess ? t.cta : (lang === "id" ? "Kembali ke beranda" : "Back to home");
  const ctaHref = isSuccess && variant === "confirmed" ? manageHref : homeHref;
  return (
    <main className="mx-auto max-w-3xl px-5 py-16 sm:py-24">
      <p className="text-xs font-bold uppercase tracking-wide text-teal-700">
        {t.title}
      </p>
      <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
        {heading}
      </h1>
      <p className="mt-4 text-base leading-7 text-slate-600">{body}</p>
      <div className="mt-8">
        <a
          href={ctaHref}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500/40"
        >
          {ctaLabel}
        </a>
      </div>
    </main>
  );
}
