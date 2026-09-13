# TODO

## Landing Page

- [x] Sembunyikan form waitlist karena undangan closed testing akan dilakukan manual.
- [x] Tambahkan halaman Privacy Policy di `/privacy`.
- [x] Tambahkan halaman Terms of Service di `/terms`.
- [x] Ganti atau hapus placeholder link GitHub yang masih mengarah ke `https://github.com/`.
- [x] Pastikan route `/id` tidak 404 saat refresh di hosting static dengan SPA fallback/rewrite.
- [x] Buat social preview image khusus 1200x630 untuk `og:image` dan Twitter card.
  - Catatan: source SVG tersedia di `public/og-image.svg`. Ekspor ke `public/og-image.png` (1200x630) lalu arahkan `og:image` dan `twitter:image` di `index.html` dan `src/App.tsx` ke `/og-image.png`.
- [x] Tambahkan analytics ringan untuk event CTA click.
- [x] Review ulang klaim produk terkait Google Play internal testing, anonymous-first flow, OCR, data deletion, dan privacy agar sesuai dengan implementasi app/backend.
  - Selesai 2026-09-13: klaim diselaraskan ulang — features 7→12 item, trust +ads/billing, guide history window 7/90→30/365 hari.
- [ ] Ganti 20 SVG placeholder di `public/screenshots/` dengan capture PNG asli (lihat `public/screenshots/README.md`), lalu update `src` di `src/content.ts` + `src/docsContent.ts`.
- [ ] Verifikasi DNS `bagistruk.alamaby.com` mengarah ke project Vercel sebelum merge (canonical/OG/sitemap sudah cutover).
- [ ] App-repo follow-up: `bill_history_window_days()` (7/90) vs `PlusFeatureLimits` (30/365) — butuh satu sumber kebenaran + migrasi bila 30/365 yang benar.
- [ ] Ekspor `public/og-image.svg` → `public/og-image.png` 1200x630 lalu arahkan `og:image`/`twitter:image` ke file PNG.

## Sinkronisasi Legal Docs (sync dari app repo)

- [x] Sinkronkan Privacy Policy di landing page dengan dokumen terbaru di `bagistruk/docs/privacy-policy.md` setelah 8 critical gap fix (GDPR / CAN-SPAM / UU PDP / COPPA / CCPA).
  - Tambah section baru: Who We Are, Legal Basis For Processing, International Data Transfers, Data Breach Notification, Your Rights.
  - Update section: Children (age threshold 13+ eksplisit), Contact (alamat pos).
  - Effective date di-bump dari `2026-06-11` ke `2026-06-15`.
- [x] Sinkronkan Terms of Service di landing page dengan dokumen terbaru di `bagistruk/docs/terms-of-service.md`.
  - Tambah section baru: 12. Your Rights As A Consumer.
  - Update section 2 (in-app consent + age threshold) + section 16 Contact (alamat pos, renumber 12-15 ke 13-16).
  - Effective date di-bump dari `2026-06-11` ke `2026-06-15`.
- [x] Isi placeholder alamat pos di semua section Contact (4 section × 2 bahasa). Sekarang sudah terisi alamat Bandung.
- [x] Sinkronkan Phase 1 compliance: effective date 2026-07-22, tambah "Participant contact info" (Contact Picker), tambah "Contacts (no permission)" di Permissions, tambah Ollama + OCR disclosure di Storage/Third-Party/International. EN + ID.
  - Files: `src/legalContent.ts`.
  - Effective date PP: `2026-06-15` → `2026-07-22`.
  - Effective date ToS: `2026-06-15` → `2026-07-22`.

- [x] Sinkronkan klaim produk di `src/content.ts` dengan Privacy Policy terbaru.
  - Trust section: tambah poin ke-4 tentang third-party OCR providers (Google Gemini, OpenRouter, Nvidia NIM). Single-column grid `sm:grid-cols-1` sudah handle 4 poin tanpa ubah layout.
  - FAQ "What data is processed?": tambah referensi ke Privacy Policy untuk daftar lengkap.
  - FAQ "Can I use it without an account?": tambah "(anonymous users get 5 lifetime OCR credits)" / "(Pengguna anonim mendapat 5 credit OCR lifetime)" untuk expectation management.
  - Fix wording "safer across devices" -> "across devices" (lebih akurat, history persistence bukan safety).
