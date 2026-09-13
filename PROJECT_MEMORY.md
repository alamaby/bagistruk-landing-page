# Project Memory

## 2026-09-13

### Fitur/Bug yang Dikerjakan
- Menambahkan situs dokumentasi per-fitur (`/docs`, `/docs/:slug`, + varian `/id/...`) bilingual EN/ID untuk 20 fitur app: scan, review, split, settlement, manual bill, participants, reminders, share-link, export, history, search-category, insight, trash, templates, plus-ocr, credits, account, settings, onboarding-about, ads-consent.
- Menambah `public/screenshots/*.svg` (20 placeholder) + `README.md` cara ganti ke PNG asli; section Screenshots kini image-based.
- Cutover domain `bagistruk.vercel.app` → `bagistruk.alamaby.com` (index.html, App SITE_URL, robots, sitemap, api/unsubscribe default).
- Menyelaraskan klaim: features 7→12 item, trust +ads/billing, guide history window → Free 30 / Plus 365 hari.

### File Penting yang Diubah
- `src/docsContent.ts` (baru)
- `src/components/Docs.tsx` (baru)
- `src/content.ts`
- `src/App.tsx`
- `src/utils/analytics.ts`
- `public/screenshots/*.svg` (baru, 20 file) + `public/screenshots/README.md` (baru)
- `public/sitemap.xml`
- `public/robots.txt`
- `index.html`
- `api/unsubscribe.ts`
- `TODO.md`

### Keputusan Teknis
- Katalog docs dipisah ke `src/docsContent.ts` mengikuti pola `legalContent.ts`/`emailCampaignContent.ts`, bukan menumpuk di `content.ts`.
- Landing mendokumentasikan Free 30 / Plus 365 hari (client `PlusFeatureLimits` authoritative per keputusan user); DB `bill_history_window_days()` masih 7/90 — dicatat sebagai follow-up app-repo, bukan diubah dari sini.
- Screenshots section memakai `<img>` placeholder SVG; mockup React (`PhoneMockup`) tetap dipakai di hero.
- `og:image` masih `icon.png` (hanya ganti host); ekspor `og-image.png` 1200x630 tetap TODO.

### Command Verifikasi yang Disarankan
- `npm run build`
- Preview `npm run dev`, cek `/`, `/id`, `/docs`, `/id/docs/scan-receipt`, `/docs/credits`, `/privacy`.

### Propose Commit Message
- `docs: add per-feature documentation routes`

## 2026-07-10

### Fitur/Bug yang Dikerjakan
- Menambahkan `public/app-ads.txt` untuk kepatuhan AdMob.

### File Penting yang Diubah
- `public/app-ads.txt` (baru)

### Keputusan Teknis
- Konten dari AdMob: `google.com, pub-4082765898994990, DIRECT, f08c47fec0942fa0`
- File diletakkan di `public/` agar Vite menyalin ke `dist/` saat build tanpa inlining.
- Vite `vite-plugin-singlefile` hanya menggabungkan JS/CSS ke `index.html`; file lain di `public/` tetap dicopy sebagai file terpisah.
- Build diverifikasi: `dist/app-ads.txt` berisi satu baris sesuai spesifikasi IAB Tech Lab.

### Command Verifikasi yang Disarankan
- `npm run build`
- Cek `dist/app-ads.txt`
- Setelah deploy, cek `https://bagistruk.vercel.app/app-ads.txt` harus merespon plain text, bukan HTML.

### Propose Commit Message
- `chore: add app-ads.txt for AdMob compliance`

## 2026-06-11

### Fitur/Bug yang Dikerjakan
- Menyelaraskan landing page dan Terms publik dengan aturan credit multi-photo/struk panjang terbaru.

### File Penting yang Diubah
- `src/content.ts`
- `src/legalContent.ts`
- `PROJECT_MEMORY.md`

### Keputusan Teknis
- Copy User Guide landing page EN/ID sekarang menjelaskan bahwa Anonymous/Free memakai credit sesuai jumlah foto pada scan multi-photo.
- Copy yang sama menjelaskan Plus tetap memakai 1 credit per scan valid untuk struk panjang multi-photo.
- Terms publik EN/ID di `src/legalContent.ts` diselaraskan dengan dokumen Terms repo aplikasi utama.
- Tidak menjalankan command verifikasi sesuai instruksi project; hanya menyiapkan command yang disarankan.

### Command Verifikasi yang Disarankan
- `npm run build`
- Preview lokal dengan `npm run dev`, lalu cek `/`, `/id`, `/terms`, dan `/id/terms`.

### Propose Commit Message
- `docs: sync multi-photo credit copy`

## 2026-06-11

### Fitur/Bug yang Dikerjakan
- Menambahkan web-version untuk setiap rencana email lifecycle campaign BagiStruk agar user bisa membuka versi browser jika email client tidak merender maksimal.

### File Penting yang Diubah
- `src/emailCampaignContent.ts`
- `src/App.tsx`
- `src/utils/analytics.ts`
- `PROJECT_MEMORY.md`

### Keputusan Teknis
- Campaign web-version dibuat statis, generic, bilingual, dan tidak memuat data personal agar aman dibuka publik.
- Menambahkan route `/emails/:slug` dan `/id/emails/:slug` untuk 9 campaign: welcome day 1, day 7 use cases, low credit, first settlement, Plus feature education, monthly Plus recap, Plus ending soon, former Plus winback, dan dormant Free reactivation.
- Halaman email memakai metadata `noindex,nofollow` agar tidak masuk index mesin pencari dan tidak dimasukkan ke sitemap.
- Monthly Plus recap versi web sengaja dibuat generic dan tidak menampilkan merchant, item, nominal, atau data personal.
- Language switcher mempertahankan slug campaign saat pindah EN/ID.
- CTA campaign memakai analytics page `email` dan event id berbasis `stepKey`.
- Navigasi dari halaman non-home sekarang mempertahankan bahasa aktif saat kembali ke anchor landing page.
- Tidak menjalankan command verifikasi sesuai instruksi project; hanya menyiapkan command yang disarankan.

### Command Verifikasi yang Disarankan
- `npm run build`
- Preview lokal dengan `npm run dev`, lalu cek:
  - `/emails/welcome-day-1`
  - `/id/emails/welcome-day-1`
  - `/emails/monthly-plus-recap`
  - `/id/emails/former-plus-winback`
  - slug tidak valid seperti `/emails/unknown`

### Propose Commit Message
- `feat: add email campaign web versions`

## 2026-06-11

### Fitur/Bug yang Dikerjakan
- Menyelaraskan halaman publik Privacy Policy dan Terms of Service dengan dokumen legal terbaru di repo aplikasi utama.

### File Penting yang Diubah
- `src/legalContent.ts`
- `PROJECT_MEMORY.md`

### Keputusan Teknis
- Konten tetap disimpan sebagai data terstruktur di `src/legalContent.ts` agar sesuai renderer legal page existing tanpa menambah Markdown parser.
- Tanggal efektif Privacy Policy dan Terms of Service diperbarui ke 2026-06-11 untuk English dan Bahasa Indonesia.
- Privacy Policy publik sekarang mencakup AdMob/ads, Google Play Billing, OCR credit/entitlement, trial Plus metadata, operational OCR provider alerts via email/Resend, Nvidia NIM, deleted-bill recovery, export, info bank transfer, anti-abuse hash, dan Plus inactive-cleanup exclusion.
- Terms publik sekarang mencakup batas credit/entitlement, trial Plus satu kali, fallback ke Free setelah trial, Google Play Billing/subscription/credit packs, Plus inactive-cleanup exclusion, third-party ads/billing/email providers, dan in-app delete account.
- Tidak menjalankan command verifikasi sesuai instruksi project; hanya menyiapkan command yang disarankan.

### Command Verifikasi yang Disarankan
- `npm run build`
- Preview lokal dengan `npm run dev`, lalu cek `/privacy`, `/id/privacy`, `/terms`, dan `/id/terms`.

### Propose Commit Message
- `docs: sync public legal pages`

## 2026-06-11

### Fitur/Bug yang Dikerjakan
- Melengkapi landing page dengan section User Guide/Panduan Pengguna berdasarkan draft `bagistruk/docs/user-guide.md` dan `bagistruk/docs/user-guide-en.md`.

### File Penting yang Diubah
- `src/content.ts`
- `src/App.tsx`
- `PROJECT_MEMORY.md`

### Keputusan Teknis
- Panduan dibuat sebagai section landing page, bukan route baru, agar user langsung mendapat ringkasan penggunaan dari halaman utama.
- Copy disimpan bilingual di `src/content.ts` mengikuti pola i18n existing.
- Section panduan merangkum flow scan, review, split, settlement, History, Settings, perbedaan Anonymous/Free/Plus, dan tips akurasi scan.
- Navigasi header dan footer ditambah anchor ke `#guide`, termasuk analytics event existing lewat `trackAndScroll`.
- Tidak menjalankan command verifikasi sesuai instruksi project; hanya menyiapkan command yang disarankan.

### Command Verifikasi yang Disarankan
- `npm run build`
- Preview lokal dengan `npm run dev`, lalu cek `/`, `/id`, anchor `#guide`, dan tampilan mobile/desktop.

### Propose Commit Message
- `feat: add bilingual user guide section`

## 2026-05-30

### Fitur/Bug yang Dikerjakan
- Menambahkan daftar TODO hasil analisis landing page.

### File Penting yang Diubah
- `TODO.md`
- `PROJECT_MEMORY.md`

### Keputusan Teknis
- TODO dibuat sebagai file Markdown root agar mudah dibaca dari repo dan tidak bercampur dengan source code.
- Item diprioritaskan berdasarkan risiko landing page: waitlist nyata, legal pages, link placeholder, static routing, SEO preview, analytics, dan validasi klaim produk.

### Command Verifikasi yang Disarankan
- Tidak perlu command verifikasi untuk perubahan dokumentasi ini.

## 2026-05-30

### Fitur/Bug yang Dikerjakan
- Menambahkan halaman Privacy Policy untuk route `/privacy` dan `/id/privacy` berdasarkan dokumen `bagistruk/docs/privacy-policy.md`.
- Menandai TODO Privacy Policy sebagai selesai.

### File Penting yang Diubah
- `src/App.tsx`
- `src/legalContent.ts`
- `TODO.md`
- `PROJECT_MEMORY.md`

### Keputusan Teknis
- Konten privacy policy disimpan sebagai data terstruktur di `src/legalContent.ts` agar bisa dirender bilingual tanpa dependency Markdown renderer tambahan.
- Route privacy ditangani di SPA berdasarkan `window.location.pathname`, termasuk varian `/privacy` dan `/id/privacy`.
- Language switcher mempertahankan konteks halaman legal saat pindah bahasa.

### Command Verifikasi yang Disarankan

## 2026-06-07

### Fitur/Bug yang Dikerjakan
- Menambahkan template source SVG `public/og-image.svg` (1200x630) untuk social preview image `og:image` dan `twitter:image`.

### File Penting yang Diubah
- `public/og-image.svg`
- `TODO.md`
- `PROJECT_MEMORY.md`

### Keputusan Teknis
- OG image disimpan sebagai SVG di `public/` agar path relatif `image href` ke `app-logo.png` tetap valid dan source bisa di-preview langsung di `/og-image.svg`.
- Konten di-render inline (logo, wordmark, headline 2-baris, value props, phone mockup dengan scan screen) sehingga tidak bergantung pada font eksternal.
- Palet mengikuti brand: gradient teal-50 (#f0fdfa -> #ccfbf1), aksen teal-600 (#0d9488), teks slate-900, body HP slate-900.
- Headline "receipt photos." di-highlight teal untuk konsistensi dengan tagline hero.

### Command Verifikasi yang Disarankan
- Ekspor `public/og-image.svg` ke `public/og-image.png` (1200x630) via Figma/Inkscape/browser screenshot.
- Update `og:image` dan `twitter:image` di `index.html` dan `src/App.tsx` ke `/og-image.png`.
- `npm run build`

## 2026-05-30

### Fitur/Bug yang Dikerjakan
- Memperbaiki SEO meta asset agar `og:image` dan `twitter:image` memakai URL absolut.
- Menambahkan canonical URL, hreflang EN/ID, `og:url`, `og:site_name`, Twitter metadata, robots meta, dan JSON-LD SoftwareApplication.
- Menambahkan `robots.txt` dan `sitemap.xml` untuk deployment Vercel.
- Menambahkan update canonical/OG/Twitter meta client-side untuk halaman home, privacy, terms, dan varian bahasa Indonesia.

### File Penting yang Diubah
- `index.html`
- `src/App.tsx`
- `public/robots.txt`
- `public/sitemap.xml`
- `PROJECT_MEMORY.md`

### Keputusan Teknis
- Domain produksi ditetapkan sebagai `https://bagistruk.vercel.app` di metadata.
- `icon.png` tetap dipakai sementara sebagai social image absolut sampai asset `og-image.png` 1200x630 dibuat.
- Sitemap mencantumkan route SPA utama dan halaman legal bilingual.

### Command Verifikasi yang Disarankan
- `npm run build`

## 2026-05-30

### Fitur/Bug yang Dikerjakan
- Mengimplementasikan logo aplikasi 1024x1024 ke landing page.
- Mengganti favicon/icon publik dengan logo aplikasi baru.
- Mengganti brand mark header, footer, dan mockup app dari huruf `B` menjadi image logo.

### File Penting yang Diubah
- `public/app-logo.png`
- `public/icon.png`
- `index.html`
- `src/App.tsx`
- `src/components/PhoneMockup.tsx`
- `PROJECT_MEMORY.md`

### Keputusan Teknis
- Logo sumber disimpan sebagai `public/app-logo.png`.
- `public/icon.png` ikut diganti agar favicon dan `og:image` yang sudah ada memakai logo baru.
- `apple-touch-icon` diarahkan ke `app-logo.png`.

### Command Verifikasi yang Disarankan
- `npm run build`

## 2026-05-30

### Fitur/Bug yang Dikerjakan
- Menambahkan Vercel Web Analytics untuk page analytics.
- Menambahkan wrapper `trackCtaClick` untuk event CTA/link penting.
- Menambahkan event tracking untuk hero CTA, nav/footer CTA, link legal, GitHub, contact, store link saat URL tersedia, dan back-to-home di halaman legal.
- Menambahkan keterangan analytics ringan di Privacy Policy.
- Menandai TODO analytics CTA sebagai selesai.

### File Penting yang Diubah
- `package.json`
- `package-lock.json`
- `src/App.tsx`
- `src/utils/analytics.ts`
- `src/legalContent.ts`
- `TODO.md`
- `PROJECT_MEMORY.md`

### Keputusan Teknis
- Menggunakan `@vercel/analytics` karena landing page akan dihosting di Vercel free tier.
- Tracking CTA dibungkus di `src/utils/analytics.ts` agar vendor analytics tidak tersebar di seluruh kode.
- Event `cta_click` menyertakan `id`, `label`, `lang`, `page`, dan `target`.

### Command Verifikasi yang Disarankan
- `npm run build`

## 2026-05-30

### Fitur/Bug yang Dikerjakan
- Menambahkan konfigurasi Vercel SPA fallback agar route seperti `/id`, `/privacy`, `/terms`, `/id/privacy`, dan `/id/terms` tidak 404 saat refresh.
- Menandai TODO route fallback sebagai selesai.

### File Penting yang Diubah
- `vercel.json`
- `TODO.md`
- `PROJECT_MEMORY.md`

### Keputusan Teknis
- Menggunakan `rewrites` Vercel dari `/(.*)` ke `/index.html` karena project adalah Vite SPA yang routing-nya ditangani di client.
- Konfigurasi ini ditujukan untuk deployment Vercel free tier sesuai rencana hosting.

### Command Verifikasi yang Disarankan
- `npm run build`

## 2026-05-30

### Fitur/Bug yang Dikerjakan
- Mengganti link GitHub footer ke `https://github.com/alamaby/bagistruk`.
- Menambahkan placeholder Google Play dan App Store di footer untuk diaktifkan saat aplikasi rilis.
- Menandai TODO placeholder GitHub sebagai selesai.

### File Penting yang Diubah
- `src/App.tsx`
- `src/content.ts`
- `TODO.md`
- `PROJECT_MEMORY.md`

### Keputusan Teknis
- URL store disiapkan sebagai konstanta kosong agar nanti cukup diisi tanpa mengubah markup.
- Placeholder store dirender sebagai teks non-link selama URL belum tersedia, untuk menghindari link mati.

### Command Verifikasi yang Disarankan
- `npm run build`

## 2026-05-30

### Fitur/Bug yang Dikerjakan
- Menambahkan `.gitignore` yang sesuai untuk proyek Vite/React/Tailwind.

### File Penting yang Diubah
- `.gitignore`
- `PROJECT_MEMORY.md`

### Keputusan Teknis
- Mengabaikan `node_modules`, output build, cache tooling, file env lokal, log, coverage, file OS, dan folder editor.
- `.env.example`, `.vscode/extensions.json`, dan `.vscode/settings.json` tetap boleh dilacak bila diperlukan sebagai konfigurasi proyek.

### Command Verifikasi yang Disarankan
- Tidak perlu command verifikasi untuk perubahan `.gitignore`.

## 2026-05-30

### Fitur/Bug yang Dikerjakan
- Menyembunyikan form waitlist dari landing page karena closed testing akan diundang manual.
- Menghapus CTA waitlist dari hero dan header.
- Menyesuaikan TODO terkait waitlist dan analytics.

### File Penting yang Diubah
- `src/App.tsx`
- `TODO.md`
- `PROJECT_MEMORY.md`

### Keputusan Teknis
- Komponen dan copy waitlist dibiarkan tetap ada sebagai cadangan, tetapi tidak lagi dirender.
- CTA utama hero diarahkan ke section cara kerja, sedangkan CTA sekunder diarahkan ke fitur.

### Command Verifikasi yang Disarankan
- `npm run build`

## 2026-05-30

### Fitur/Bug yang Dikerjakan
- Menambahkan halaman Terms of Service untuk route `/terms` dan `/id/terms` berdasarkan dokumen `bagistruk/docs/terms-of-service.md`.
- Menandai TODO Terms of Service sebagai selesai.

### File Penting yang Diubah
- `src/App.tsx`
- `src/legalContent.ts`
- `TODO.md`
- `PROJECT_MEMORY.md`

### Keputusan Teknis
- Konten Terms of Service disimpan di `src/legalContent.ts` bersama Privacy Policy dalam bentuk data terstruktur bilingual.
- Komponen halaman legal digeneralisasi menjadi `LegalPage` agar Privacy Policy dan Terms of Service memakai rendering yang sama.
- Language switcher mempertahankan konteks route legal, termasuk `/terms` dan `/id/terms`.

## 2026-06-15 (lanjutan)

### Fitur/Bug yang Dikerjakan
- Sinkronkan klaim produk di `src/content.ts` dengan Privacy Policy terbaru di app repo. Trust section ditambah poin tentang third-party OCR providers, FAQ ditambah referensi ke Privacy Policy + klarifikasi anonymous credit limit.

### File Penting yang Diubah
- `src/content.ts` (+2 baris, no layout change)
- `TODO.md`

### Keputusan Teknis
- Trust section pakai `sm:grid-cols-1` (single column), jadi tambah 1 poin (jadi 4 total) tidak break layout — otomatis stack vertikal.
- FAQ "What data is processed?" ditambah referensi ke Privacy Policy karena privacy policy punya 13 kategori data (lebih akurat) dan user yang ingin detail bisa klik link di footer.
- FAQ "Can I use it without an account?" wording "safer" diganti "across devices" karena lebih akurat (registered account = data persistence lintas device, bukan "safety"). Plus mention credit limit (5 lifetime) untuk expectation management.
- Semua perubahan bilingual EN + ID.

### Command Verifikasi yang Disarankan
- `npm run dev` lalu cek section Trust (4 poin, including third-party OCR) dan FAQ (2 jawaban yang diupdate).
- `npm run build` untuk verify TypeScript compile.

### Command Verifikasi yang Disarankan
- `npm run build`
## 2026-06-15
### Fitur/Bug yang Dikerjakan
- Sinkronkan halaman legal publik (Privacy Policy dan Terms of Service) dengan dokumen terbaru di `bagistruk/docs/privacy-policy.md` dan `bagistruk/docs/terms-of-service.md` setelah 8 critical gap fix compliance (GDPR / CAN-SPAM / UU PDP / COPPA / CCPA).

### File Penting yang Diubah
- `src/legalContent.ts` (rewrite utuh: PP 17 section EN + 17 section ID, ToS 16 section EN + 16 section ID)
- `TODO.md` (tambah section "Sinkronisasi Legal Docs")
- `PROJECT_MEMORY.md`

### Keputusan Teknis
- File di-rewrite utuh (delete + add file) karena patch in-place sebelumnya corrupt struktur TypeScript dan susah di-recover. Tipe `LegalSection` dan `LegalContent` di bagian atas file tidak berubah.
- Body string menggunakan array dengan empty string `""` sebagai line break, agar LegalPage component (yang render satu `<p>` per array item) menghasilkan paragraf terpisah untuk tiap poin.
- Konten Usage Analytics tetap dipertahankan (landing-page-specific — tentang page views dan CTA clicks di landing page itu sendiri, bukan di app).
- Effective date di-bump ke `2026-06-15` di semua 4 dokumen (PP EN, PP ID, ToS EN, ToS ID) untuk mencerminkan sinkronisasi.
- Alamat pos masih placeholder `[Operator legal name — to be filled before public release]` dst. — harus diisi sebelum publish. Wajib konsisten dengan placeholder di `bagistruk/docs/privacy-policy.md` dan `bagistruk/docs/terms-of-service.md`.
- App.tsx, content.ts, sitemap.xml, robots.txt, dan routing tidak perlu diubah — struktur data LegalContent tetap kompatibel, hanya isi sections yang berubah.

### Command Verifikasi yang Disarankan
- `npm run dev` lalu cek `/privacy`, `/id/privacy`, `/terms`, `/id/terms` di browser.
- `npm run build` lalu `npm run preview` untuk test production build.
- Setelah deploy Vercel, cek https://bagistruk.vercel.app/privacy dan /id/privacy tampil dengan section baru.

## 2026-05-30

## 2026-06-24

### Fitur/Bug yang Dikerjakan
- Melengkapi landing page dengan route marketing/akun baru: `/emails/confirmed`, `/emails/unsubscribed`, `/account-delete/completed`, dan `/account/email-preferences` (beserta varian `/id/...`).
- Menambahkan kolom "Updates" di footer dengan `FooterSubscribe`, tautan "Manage email preferences", dan tombol "Delete my account" yang membuka modal.

- Memperbaiki TypeScript error pre-existing yang memblokir `npm run dev`: dependency hilang, syntax rusak, dan type alias tidak valid.
- Field email "Stay updated" terlalu sempit di footer 6-kolom. Layout diubah jadi stack vertikal dengan label visible supaya input jadi full-width dan jelas konteksnya.

### File Penting yang Diubah
- `src/App.tsx`
- `src/content.ts`
- `PROJECT_MEMORY.md`
- `src/components/FooterSubscribe.tsx` (layout stack vertikal + label visible; type alias `FooterCopy`)
- `package.json` (tambah `@supabase/supabase-js`)
- `package-lock.json` (diperbarui oleh npm install)
- `tsconfig.json` (tambah `vite/client` ke `types`)
- `src/vite-env.d.ts` (referensi `vite/client`)
- `src/lib/supabase.ts` (kembalikan `});` yang hilang)
- `src/components/EmailSystemPage.tsx` (rewrite untuk hapus duplicate import)
- `src/components/AccountDeleteModal.tsx` (type alias `ModalCopy`)
- `src/components/EmailPreferencesPage.tsx` (type alias `FormCopy`, hapus `ManageCopy` unused)

### Keputusan Teknis
- `getPage()` diurut ulang agar `/emails/confirmed` dan `/emails/unsubscribed` matched sebelum fallback generik `/emails/*`.
- Language switcher dialihkan ke helper `pagePathForLang(page, lang, emailSlug)` agar path untuk 4 route baru konsisten antara EN/ID.
- Tambah `SimplePageChrome` sebagai wrapper shared untuk halaman confirmation/unsubscribe/preferences agar tidak duplikasi header.
- Meta title/description untuk 4 halaman baru dipusatkan di `pageMeta` di `src/content.ts` agar `useEffect` meta tidak lagi salah menarik dari `legalContent`.
- Validasi `outcome` query param dilakukan inline (whitelist) sehingga cast `outcome` ke tipe `EmailSystemPage` tidak butuh `as never`.
- Delete account pakai modal (`AccountDeleteModal`) dari footer karena flow-nya single-step (input email -> submit -> success/error). Modal mempertahankan konteks halaman user (mis. sedang baca privacy/footer) tanpa navigasi ulang.
- Manage email preferences pakai halaman dedicated (`/account/email-preferences` -> `EmailPreferencesPage`) karena punya multi-state: form request link, lookup loading (butuh network call ke `marketing-get-subscriber`), found/not-found, dan manage UI (resub/unsub). Modal terlalu sempit untuk loading state dan tombol "kembali ke form request" setelah not-found terasa aneh.
- Inkonsistensi ini disengaja: kompleksitas flow yang berbeda membutuhkan pola yang berbeda. Kontributor berikutnya jangan menyamakan keduanya tanpa analisis lebih dulu.
- Label "Email address" dipindah dari `sr-only` jadi `block text-xs text-slate-300` di atas input supaya jelas field untuk apa walaupun di kolom sempit footer 6-kolom.
- Input dan tombol Subscribe ditumpuk vertikal (masing-masing `w-full`) sehingga input jadi lebar penuh kolom dan tombol subscribe jadi lebar penuh juga — lebih mudah ditekan di mobile, kontras tombol lebih jelas di desktop.
- Honeypot tetap `absolute left-[-9999px]` agar tidak mengganggu layout.
- `(typeof content)[Lang][...]` dipakai untuk type alias copy agar kompatibel dengan `as const` di `content.ts` (EN vs ID literal types berbeda).
- `@supabase/supabase-js` ditambah ke dependencies karena komponen lookup subscriber (`EmailPreferencesPage`) membutuhkannya untuk memanggil Edge Function `marketing-get-subscriber`.
- `tsconfig.json` types ditambah `vite/client` agar `import.meta.env.VITE_SUPABASE_URL` dikenali tanpa `// @ts-expect-error`.
- Tidak menjalankan command verifikasi sesuai instruksi project; hanya menyiapkan command yang disarankan.

### Command Verifikasi yang Disarankan
- `npm run build`
- Preview lokal dengan `npm run dev`, lalu cek:
  - `/emails/confirmed?outcome=success`
  - `/id/emails/confirmed`
  - `/emails/unsubscribed`
  - `/account-delete/completed`
  - `/id/account/email-preferences?token=demo`
  - Buka modal "Delete my account" dari footer

### Propose Commit Message
- `feat: add email and account lifecycle routes`
### File Penting yang Diubah
