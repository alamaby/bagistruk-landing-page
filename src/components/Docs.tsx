import type { Lang } from "../content";
import { docs, docsIndex, findDoc } from "../docsContent";
import { CheckIcon } from "./Icons";

function docsRoot(lang: Lang) {
  return lang === "id" ? "/id/docs" : "/docs";
}

function homeHref(lang: Lang) {
  return lang === "id" ? "/id" : "/";
}

export function DocsIndexPage({ lang }: { lang: Lang }) {
  const t = docsIndex[lang];
  const root = docsRoot(lang);
  const groups = (Object.keys(t.groupLabels) as Array<keyof typeof t.groupLabels>).map(
    (id) => ({ id, title: t.groupLabels[id], entries: docs.filter((d) => d.group === id) }),
  );

  return (
    <main className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
      <a
        href={homeHref(lang)}
        className="text-sm font-semibold text-teal-700 underline-offset-4 hover:underline"
      >
        {t.backToHome}
      </a>
      <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
        {t.title}
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600">{t.intro}</p>

      <div className="mt-10 space-y-10">
        {groups.map((g) => (
          <section key={g.id}>
            <h2 className="text-xl font-bold tracking-tight text-slate-900">{g.title}</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {g.entries.map((entry) => {
                const text = entry.text[lang];
                return (
                  <a
                    key={entry.slug}
                    href={`${root}/${entry.slug}`}
                    className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-teal-300 hover:shadow-sm"
                  >
                    <h3 className="text-base font-semibold text-slate-900">{text.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{text.summary}</p>
                  </a>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}

export function DocDetailPage({ lang, slug }: { lang: Lang; slug: string }) {
  const t = docsIndex[lang];
  const root = docsRoot(lang);
  const entry = findDoc(slug);

  if (!entry) {
    return (
      <main className="mx-auto max-w-3xl px-5 py-16 sm:py-24">
        <a
          href={root}
          className="text-sm font-semibold text-teal-700 underline-offset-4 hover:underline"
        >
          {t.backToHome}
        </a>
        <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          {lang === "id" ? "Dokumen tidak ditemukan" : "Doc not found"}
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-600">
          {lang === "id"
            ? "Slug dokumen ini tidak dikenal. Kembali ke indeks dokumentasi."
            : "This doc slug is unknown. Back to the docs index."}
        </p>
        <a
          href={root}
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-teal-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-700"
        >
          {t.title}
        </a>
      </main>
    );
  }

  const text = entry.text[lang];
  const groupLabel = t.groupLabels[entry.group];
  const related = docs.filter((d) => d.group === entry.group && d.slug !== entry.slug).slice(0, 3);

  return (
    <main>
      <section className="border-b border-slate-100 bg-gradient-to-b from-teal-50/70 via-white to-white">
        <div className="mx-auto max-w-3xl px-5 py-14 sm:py-20">
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <a
              href={homeHref(lang)}
              className="font-semibold text-teal-700 underline-offset-4 hover:underline"
            >
              {t.backToHome}
            </a>
            <span className="text-slate-300">/</span>
            <a
              href={root}
              className="font-semibold text-teal-700 underline-offset-4 hover:underline"
            >
              {t.title}
            </a>
          </div>
          <p className="mt-5 text-xs font-bold uppercase tracking-wide text-teal-700">{groupLabel}</p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            {text.title}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-slate-600">{text.intro}</p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-5 py-12 sm:py-16">
        {text.screenshot && (
          <figure className="mb-10 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
            {/* TODO(screenshots): replace this SVG placeholder with a real app capture (PNG, portrait). */}
            <img src={text.screenshot} alt={text.title} className="h-auto w-full" loading="lazy" />
          </figure>
        )}
        <div className="space-y-10">
          {text.sections.map((section, i) => (
            <section key={`${section.heading ?? "section"}-${i}`}>
              {section.heading && (
                <h2 className="text-xl font-bold tracking-tight text-slate-900">{section.heading}</h2>
              )}
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

        {related.length > 0 && (
          <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h2 className="text-base font-semibold text-slate-900">
              {lang === "id" ? "Dokumen terkait" : "Related docs"}
            </h2>
            <ul className="mt-3 space-y-2 text-sm">
              {related.map((r) => (
                <li key={r.slug}>
                  <a
                    href={`${root}/${r.slug}`}
                    className="font-medium text-teal-700 underline-offset-4 hover:underline"
                  >
                    {r.text[lang].title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </article>
    </main>
  );
}
