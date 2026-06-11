import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { content, meta, type Lang } from "./content";
import {
  PhoneMockup,
  ScanScreen,
  ReviewScreen,
  SplitScreen,
  SettlementScreen,
} from "./components/PhoneMockup";
import {
  CameraIcon,
  CheckListIcon,
  UsersIcon,
  WalletIcon,
  EditIcon,
  PieIcon,
  ChartIcon,
  UserPlusIcon,
  GlobeIcon,
  ShieldIcon,
  ArrowRightIcon,
  CheckIcon,
} from "./components/Icons";
import { Faq } from "./components/Faq";
import { privacyPolicy, termsOfService, type LegalContent } from "./legalContent";
import { trackCtaClick, type AnalyticsPage } from "./utils/analytics";

const PRIVACY_URL = "/privacy";
const TERMS_URL = "/terms";
const GITHUB_URL = "https://github.com/alamaby/bagistruk";
const GOOGLE_PLAY_URL = "";
const APP_STORE_URL = "";
const CONTACT_EMAIL = "alam.aby.b@gmail.com";
const APP_LOGO_URL = "/app-logo.png";
const SITE_URL = "https://bagistruk.vercel.app";
const OG_IMAGE_URL = `${SITE_URL}/icon.png`;

const STORAGE_KEY = "bagistruk_lang";

function detectInitialLang(): Lang {
  if (typeof window === "undefined") return "en";
  if (window.location.pathname.replace(/\/$/, "").startsWith("/id")) return "id";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "id" || stored === "en") return stored;
  return "en";
}

function getPage(): AnalyticsPage {
  if (typeof window === "undefined") return "home";
  const path = window.location.pathname.replace(/\/$/, "");
  if (path === "/privacy" || path === "/id/privacy") return "privacy";
  if (path === "/terms" || path === "/id/terms") return "terms";
  return "home";
}

function getLegalContent(page: string) {
  return page === "terms" ? termsOfService : privacyPolicy;
}

function getCanonicalUrl(page: AnalyticsPage, lang: Lang) {
  if (page === "privacy") return `${SITE_URL}${lang === "id" ? "/id/privacy" : "/privacy"}`;
  if (page === "terms") return `${SITE_URL}${lang === "id" ? "/id/terms" : "/terms"}`;
  return `${SITE_URL}${lang === "id" ? "/id" : "/"}`;
}

const workflowIcons = [CameraIcon, CheckListIcon, UsersIcon, WalletIcon];
const featureIcons = [CameraIcon, EditIcon, UserPlusIcon, PieIcon, ChartIcon, ShieldIcon, GlobeIcon];
const guideIcons = [CameraIcon, EditIcon, UsersIcon, WalletIcon];
const screenComponents = [ScanScreen, ReviewScreen, SplitScreen, SettlementScreen];

export default function App() {
  const [lang, setLang] = useState<Lang>(detectInitialLang);
  const page = getPage();
  const t = content[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    const legalContent = getLegalContent(page);
    const pageTitle =
      page !== "home" ? `${legalContent[lang].title} - BagiStruk` : meta[lang].title;
    const pageDescription =
      page !== "home" ? legalContent[lang].intro : meta[lang].description;
    const canonicalUrl = getCanonicalUrl(page, lang);
    document.title = pageTitle;

    const setMeta = (name: string, value: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", value);
    };
    const setOg = (prop: string, value: string) => {
      let el = document.querySelector(`meta[property="${prop}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("property", prop);
        document.head.appendChild(el);
      }
      el.setAttribute("content", value);
    };
    const setLink = (rel: string, href: string) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    };

    setLink("canonical", canonicalUrl);
    setMeta("description", pageDescription);
    setMeta("twitter:title", pageTitle);
    setMeta("twitter:description", pageDescription);
    setMeta("twitter:image", OG_IMAGE_URL);
    setOg("og:title", pageTitle);
    setOg("og:description", pageDescription);
    setOg("og:url", canonicalUrl);
    setOg("og:image", OG_IMAGE_URL);
    setOg("og:locale", lang === "id" ? "id_ID" : "en_US");
  }, [lang, page]);

  const changeLang = (next: Lang) => {
    setLang(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
      const currentPage = getPage();
      const path =
        next === "id"
          ? currentPage === "privacy"
            ? "/id/privacy"
            : currentPage === "terms"
              ? "/id/terms"
              : "/id"
          : currentPage === "privacy"
            ? "/privacy"
            : currentPage === "terms"
              ? "/terms"
              : "/";
      const hash = window.location.hash;
      window.history.replaceState(null, "", path + hash);
    } catch {
      /* ignore */
    }
  };

  const scrollTo = (id: string) => {
    if (page !== "home") {
      window.location.href = `/#${id}`;
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const trackAndScroll = (id: string, eventId: string, label: string) => {
    trackCtaClick({ id: eventId, label, lang, page, target: id });
    scrollTo(id);
  };

  if (page !== "home") {
    return (
      <>
        <LegalPage
          lang={lang}
          page={page}
          legalContent={getLegalContent(page)}
          onChangeLang={changeLang}
          onNav={trackAndScroll}
          t={t}
        />
        <Analytics />
      </>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-white text-slate-900 antialiased">
      <Header lang={lang} onChangeLang={changeLang} onNav={trackAndScroll} t={t} />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-slate-100">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-teal-50/60 via-white to-white" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 sm:py-20 lg:grid-cols-2 lg:gap-8 lg:py-24">
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                {t.hero.badge}
              </span>
              <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                {t.hero.title}
              </h1>
              <p className="mx-auto mt-3 max-w-xl text-lg font-semibold text-teal-700 lg:mx-0">
                {t.hero.tagline}
              </p>
              <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-slate-600 lg:mx-0">
                {t.hero.supporting}
              </p>

              <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row lg:justify-start">
                <button
                  onClick={() =>
                    trackAndScroll("workflow", "hero_workflow", t.hero.secondaryCta)
                  }
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500/40"
                >
                  {t.hero.secondaryCta}
                  <ArrowRightIcon className="h-4 w-4" />
                </button>
                <button
                  onClick={() => trackAndScroll("features", "hero_features", t.nav.features)}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300"
                >
                  {t.nav.features}
                </button>
              </div>

              <ul className="mx-auto mt-7 grid max-w-md gap-2 sm:grid-cols-2 lg:mx-0">
                {t.hero.valueProps.map((vp, i) => (
                  <li key={i} className="flex items-start gap-2 text-left text-sm text-slate-600">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" />
                    <span>{vp}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative flex justify-center">
              <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-tr from-teal-100 to-indigo-100 blur-2xl opacity-60" />
              <div className="relative">
                <PhoneMockup className="z-10">
                  <ScanScreen />
                </PhoneMockup>
                <div className="absolute -right-6 top-12 hidden w-40 rotate-6 sm:block">
                  <PhoneMockup>
                    <SettlementScreen />
                  </PhoneMockup>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WORKFLOW */}
        <Section id="workflow" heading={t.workflow.heading} subheading={t.workflow.subheading}>
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.workflow.steps.map((step, i) => {
              const Icon = workflowIcons[i];
              return (
                <li
                  key={i}
                  className="relative rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-teal-300 hover:shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wide text-teal-600">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-slate-900">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{step.desc}</p>
                </li>
              );
            })}
          </ol>
        </Section>

        {/* FEATURES */}
        <Section id="features" heading={t.features.heading} muted>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.features.items.map((f, i) => {
              const Icon = featureIcons[i] ?? CheckIcon;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:shadow-sm"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-slate-900">{f.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </Section>

        {/* USER GUIDE */}
        <Section id="guide" heading={t.guide.heading} subheading={t.guide.subheading}>
          <div className="grid gap-4 lg:grid-cols-4">
            {t.guide.steps.map((step, i) => {
              const Icon = guideIcons[i] ?? CheckIcon;
              return (
                <article
                  key={step.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-teal-300 hover:shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wide text-teal-600">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.desc}</p>
                </article>
              );
            })}
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-[1.5fr_1fr]">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <ul className="space-y-3 text-sm leading-6 text-slate-700">
                {t.guide.secondary.map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-teal-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-teal-100 bg-teal-50 p-5">
              <h3 className="text-base font-semibold text-slate-900">{t.guide.tipsHeading}</h3>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                {t.guide.tips.map((tip) => (
                  <li key={tip} className="flex gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-teal-600" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* SCREENSHOTS */}
        <Section
          id="screenshots"
          heading={t.screenshots.heading}
          subheading={t.screenshots.subheading}
        >
          <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
            {screenComponents.map((Screen, i) => (
              <figure key={i} className="flex flex-col items-center">
                <PhoneMockup className="max-w-[200px]">
                  <Screen />
                </PhoneMockup>
                <figcaption className="mt-4 text-center text-sm font-medium text-slate-600">
                  {t.screenshots.captions[i]}
                </figcaption>
              </figure>
            ))}
          </div>
        </Section>

        {/* TRUST */}
        <section className="border-y border-slate-100 bg-slate-50">
          <div className="mx-auto max-w-4xl px-5 py-16">
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-600 text-white">
                <ShieldIcon className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                {t.trust.heading}
              </h2>
              <p className="max-w-2xl text-base leading-relaxed text-slate-600">{t.trust.note}</p>
            </div>
            <ul className="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-1">
              {t.trust.points.map((p, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700"
                >
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex justify-center gap-4 text-sm font-medium text-teal-700">
              <a
                href={PRIVACY_URL}
                onClick={() =>
                  trackCtaClick({
                    id: "trust_privacy",
                    label: t.footer.privacy,
                    lang,
                    page,
                    target: PRIVACY_URL,
                  })
                }
                className="underline-offset-4 hover:underline"
              >
                {t.footer.privacy}
              </a>
              <span className="text-slate-300">·</span>
              <a
                href={TERMS_URL}
                onClick={() =>
                  trackCtaClick({
                    id: "trust_terms",
                    label: t.footer.terms,
                    lang,
                    page,
                    target: TERMS_URL,
                  })
                }
                className="underline-offset-4 hover:underline"
              >
                {t.footer.terms}
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <Section id="faq" heading={t.faq.heading} muted>
          <Faq lang={lang} />
        </Section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            <div className="sm:col-span-2 lg:col-span-2">
              <div className="flex items-center gap-2">
                <img
                  src={APP_LOGO_URL}
                  alt=""
                  className="h-8 w-8 rounded-lg shadow-sm"
                />
                <span className="text-lg font-bold text-white">BagiStruk</span>
              </div>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-400">
                {t.footer.desc}
              </p>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                {t.nav.features}
              </h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <button
                    onClick={() => trackAndScroll("workflow", "footer_workflow", t.nav.workflow)}
                    className="hover:text-white"
                  >
                    {t.nav.workflow}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() =>
                      trackAndScroll("screenshots", "footer_screenshots", t.nav.screenshots)
                    }
                    className="hover:text-white"
                  >
                    {t.nav.screenshots}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => trackAndScroll("guide", "footer_guide", t.nav.guide)}
                    className="hover:text-white"
                  >
                    {t.nav.guide}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => trackAndScroll("faq", "footer_faq", t.nav.faq)}
                    className="hover:text-white"
                  >
                    {t.nav.faq}
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Legal
              </h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a
                    href={PRIVACY_URL}
                    onClick={() =>
                      trackCtaClick({
                        id: "footer_privacy",
                        label: t.footer.privacy,
                        lang,
                        page,
                        target: PRIVACY_URL,
                      })
                    }
                    className="hover:text-white"
                  >
                    {t.footer.privacy}
                  </a>
                </li>
                <li>
                  <a
                    href={TERMS_URL}
                    onClick={() =>
                      trackCtaClick({
                        id: "footer_terms",
                        label: t.footer.terms,
                        lang,
                        page,
                        target: TERMS_URL,
                      })
                    }
                    className="hover:text-white"
                  >
                    {t.footer.terms}
                  </a>
                </li>
                <li>
                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() =>
                      trackCtaClick({
                        id: "footer_github",
                        label: t.footer.github,
                        lang,
                        page,
                        target: GITHUB_URL,
                      })
                    }
                    className="hover:text-white"
                  >
                    {t.footer.github}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    onClick={() =>
                      trackCtaClick({
                        id: "footer_contact",
                        label: t.footer.contact,
                        lang,
                        page,
                        target: `mailto:${CONTACT_EMAIL}`,
                      })
                    }
                    className="hover:text-white"
                  >
                    {t.footer.contact}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                {t.footer.availableOn}
              </h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <StoreLink
                    href={GOOGLE_PLAY_URL}
                    label={t.footer.googlePlay}
                    soon={t.footer.comingSoon}
                    eventId="footer_google_play"
                    lang={lang}
                    page={page}
                  />
                </li>
                <li>
                  <StoreLink
                    href={APP_STORE_URL}
                    label={t.footer.appStore}
                    soon={t.footer.comingSoon}
                    eventId="footer_app_store"
                    lang={lang}
                    page={page}
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-6 sm:flex-row">
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} BagiStruk. {t.footer.rights}
            </p>
            <LangSwitcher lang={lang} onChange={changeLang} label={t.langLabel} dark />
          </div>
        </div>
      </footer>
      </div>
      <Analytics />
    </>
  );
}

function StoreLink({
  href,
  label,
  soon,
  eventId,
  lang,
  page,
}: {
  href: string;
  label: string;
  soon: string;
  eventId: string;
  lang: Lang;
  page: AnalyticsPage;
}) {
  if (!href) {
    return (
      <span className="text-slate-500">
        {label} <span className="text-slate-600">({soon})</span>
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      onClick={() => trackCtaClick({ id: eventId, label, lang, page, target: href })}
      className="hover:text-white"
    >
      {label}
    </a>
  );
}

function LegalPage({
  lang,
  page,
  legalContent,
  onChangeLang,
  onNav,
  t,
}: {
  lang: Lang;
  page: AnalyticsPage;
  legalContent: LegalContent;
  onChangeLang: (l: Lang) => void;
  onNav: (id: string, eventId: string, label: string) => void;
  t: (typeof content)[Lang];
}) {
  const legal = legalContent[lang];

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      <Header lang={lang} onChangeLang={onChangeLang} onNav={onNav} t={t} />
      <main>
        <section className="border-b border-slate-100 bg-gradient-to-b from-teal-50/70 via-white to-white">
          <div className="mx-auto max-w-3xl px-5 py-14 sm:py-20">
            <a
              href={lang === "id" ? "/id" : "/"}
              onClick={() =>
                trackCtaClick({
                  id: "legal_back_home",
                  label: legal.backToHome,
                  lang,
                  page,
                  target: lang === "id" ? "/id" : "/",
                })
              }
              className="text-sm font-semibold text-teal-700 underline-offset-4 hover:underline"
            >
              {legal.backToHome}
            </a>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              {legal.title}
            </h1>
            <p className="mt-3 text-sm font-semibold text-teal-700">
              {legal.effectiveDateLabel}: {legal.effectiveDate}
            </p>
            <p className="mt-5 text-base leading-relaxed text-slate-600">{legal.intro}</p>
          </div>
        </section>

        <article className="mx-auto max-w-3xl px-5 py-12 sm:py-16">
          <div className="space-y-10">
            {legal.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-xl font-bold tracking-tight text-slate-900">
                  {section.heading}
                </h2>
                {section.body?.map((paragraph) => (
                  <p key={paragraph} className="mt-3 text-sm leading-7 text-slate-600">
                    {paragraph}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-600">
                    {section.bullets.map((item) => (
                      <li key={item} className="flex gap-3">
                        <CheckIcon className="mt-1.5 h-4 w-4 shrink-0 text-teal-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </article>
      </main>
    </div>
  );
}

function Header({
  lang,
  onChangeLang,
  onNav,
  t,
}: {
  lang: Lang;
  onChangeLang: (l: Lang) => void;
  onNav: (id: string, eventId: string, label: string) => void;
  t: (typeof content)[Lang];
}) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled
          ? "border-slate-200 bg-white/90 backdrop-blur"
          : "border-transparent bg-white/0"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="/" className="flex items-center gap-2">
          <img
            src={APP_LOGO_URL}
            alt=""
            className="h-8 w-8 rounded-lg shadow-sm"
          />
          <span className="text-lg font-bold text-slate-900">BagiStruk</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          <button
            onClick={() => onNav("workflow", "nav_workflow", t.nav.workflow)}
            className="hover:text-slate-900"
          >
            {t.nav.workflow}
          </button>
          <button
            onClick={() => onNav("features", "nav_features", t.nav.features)}
            className="hover:text-slate-900"
          >
            {t.nav.features}
          </button>
          <button
            onClick={() => onNav("guide", "nav_guide", t.nav.guide)}
            className="hover:text-slate-900"
          >
            {t.nav.guide}
          </button>
          <button
            onClick={() => onNav("screenshots", "nav_screenshots", t.nav.screenshots)}
            className="hover:text-slate-900"
          >
            {t.nav.screenshots}
          </button>
          <button
            onClick={() => onNav("faq", "nav_faq", t.nav.faq)}
            className="hover:text-slate-900"
          >
            {t.nav.faq}
          </button>
        </nav>
        <div className="flex items-center gap-3">
          <LangSwitcher lang={lang} onChange={onChangeLang} label={t.langLabel} />
        </div>
      </div>
    </header>
  );
}

function LangSwitcher({
  lang,
  onChange,
  label,
  dark = false,
}: {
  lang: Lang;
  onChange: (l: Lang) => void;
  label: string;
  dark?: boolean;
}) {
  const base = dark
    ? "border-slate-700 bg-slate-800"
    : "border-slate-300 bg-slate-100";
  return (
    <div
      role="group"
      aria-label={label}
      className={`inline-flex rounded-lg border p-0.5 text-xs font-semibold ${base}`}
    >
      {(["en", "id"] as Lang[]).map((l) => {
        const active = lang === l;
        return (
          <button
            key={l}
            onClick={() => onChange(l)}
            aria-pressed={active}
            className={`rounded-md px-2.5 py-1 transition ${
              active
                ? "bg-teal-600 text-white shadow-sm"
                : dark
                  ? "text-slate-400 hover:text-white"
                  : "text-slate-500 hover:text-slate-900"
            }`}
          >
            {l.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}

function Section({
  id,
  heading,
  subheading,
  children,
  muted = false,
}: {
  id: string;
  heading: string;
  subheading?: string;
  children: React.ReactNode;
  muted?: boolean;
}) {
  return (
    <section id={id} className={muted ? "bg-slate-50" : "bg-white"}>
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            {heading}
          </h2>
          {subheading && <p className="mt-3 text-base text-slate-600">{subheading}</p>}
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
