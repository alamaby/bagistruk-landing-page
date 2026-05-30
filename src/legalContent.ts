import type { Lang } from "./content";

type LegalSection = {
  heading: string;
  body?: string[];
  bullets?: string[];
};

export type LegalContent = Record<
  Lang,
  {
    title: string;
    effectiveDateLabel: string;
    effectiveDate: string;
    intro: string;
    backToHome: string;
    sections: LegalSection[];
  }
>;

export const privacyPolicy: LegalContent = {
  en: {
    title: "Privacy Policy",
    effectiveDateLabel: "Effective date",
    effectiveDate: "2026-05-23",
    intro:
      "This policy explains how BagiStruk collects, uses, stores, and deletes data. This document is provided for product transparency and should be reviewed for legal compliance before publication.",
    backToHome: "Back to home",
    sections: [
      {
        heading: "Summary",
        body: [
          "BagiStruk is a split-bill app that helps users scan receipts, extract bill items with OCR, and divide payments among participants. We collect only the data needed to provide these features. We do not sell personal data and we do not use advertising SDKs.",
        ],
      },
      {
        heading: "Data We Collect",
        bullets: [
          "Account data: email address, authentication identifiers, and sign-in provider information when you create or use an account.",
          "Anonymous session data: an anonymous Supabase user ID may be created when you use features that require saving data.",
          "Google Sign-In data: when you sign in with Google, we receive authentication tokens from Google through Supabase Auth. We do not receive your Google password.",
          "Profile preferences: display name, default currency, language preference, and theme preference.",
          "App activity metadata: last_active_at, used to understand when an account was last active and to support inactivity cleanup.",
          "Receipt photos: images you choose or capture for OCR processing.",
          "Bill data: merchant names, receipt dates, items, quantities, prices, taxes, service charges, participants, split assignments, and settlement status.",
          "Support and reminder data: email address and inactivity reminder timestamps when reminders are sent.",
          "Basic technical data sent by app/framework/network services, such as device and request metadata needed for diagnostics and security.",
        ],
      },
      {
        heading: "Permissions Used",
        bullets: [
          "Camera: to capture receipt photos.",
          "Photos / media access: to pick receipt photos from the gallery.",
          "Internet / network state: to communicate with Supabase and OCR services.",
        ],
      },
      {
        heading: "How We Use Data",
        bullets: [
          "To authenticate users and keep sessions active.",
          "To process receipt photos and extract bill information.",
          "To save, display, edit, split, and settle bills.",
          "To preserve anonymous data when a user upgrades to a registered account.",
          "To store user preferences and personalize the app.",
          "To track last activity for account retention and cleanup.",
          "To send inactivity reminders to registered users before account cleanup.",
          "To diagnose errors, prevent abuse, and enforce database rate limits.",
        ],
      },
      {
        heading: "Storage And Processing",
        body: [
          "App data is stored in Supabase, including authentication data and PostgreSQL database records. Receipt images are processed by Supabase Edge Functions. OCR processing may call third-party AI/OCR providers such as Google Gemini and OpenRouter. API keys for those providers are stored server-side and are not bundled into the mobile app.",
        ],
      },
      {
        heading: "Third-Party Services",
        body: ["BagiStruk may use:"],
        bullets: [
          "Supabase: authentication, database, row-level security, Edge Functions, and scheduled cleanup.",
          "Google Sign-In: optional account login.",
          "Google Gemini and/or OpenRouter: OCR and receipt parsing.",
          "Resend or another email provider: inactivity reminder emails, if configured.",
          "We do not use third-party advertising SDKs.",
        ],
      },
      {
        heading: "Account Retention And Deletion",
        bullets: [
          "Anonymous users may be deleted after 30 days of inactivity.",
          "Registered users may receive an inactivity reminder after 6 months of inactivity.",
          "If a registered user remains inactive for 30 days after the reminder, the account may be deleted.",
          "When an inactive user is deleted, bills owned by that user are deleted first, then the authentication user is deleted.",
          "If a user opens the app after receiving a reminder, the pending deletion state is reset.",
          "You may request account and data deletion by contacting us at alam.aby.b@gmail.com.",
        ],
      },
      {
        heading: "Security",
        body: [
          "We rely on Supabase authentication, row-level security, server-side API keys, and database policies to protect user data. No system is perfectly secure, but we take reasonable steps to limit access and reduce exposure.",
        ],
      },
      {
        heading: "Children",
        body: [
          "BagiStruk is not intended for children under the age required by applicable law to consent to digital services. If you believe a child has provided personal data, contact us so we can review and delete it.",
        ],
      },
      {
        heading: "Changes",
        body: [
          "We may update this policy from time to time. The latest version should be made available in the app and on the public page hosting this document.",
        ],
      },
      {
        heading: "Contact",
        body: ["For privacy questions or deletion requests, contact: alam.aby.b@gmail.com"],
      },
    ],
  },
  id: {
    title: "Kebijakan Privasi",
    effectiveDateLabel: "Tanggal berlaku",
    effectiveDate: "2026-05-23",
    intro:
      "Kebijakan ini menjelaskan bagaimana BagiStruk mengumpulkan, menggunakan, menyimpan, dan menghapus data. Dokumen ini disediakan untuk transparansi produk dan sebaiknya ditinjau kembali untuk kepatuhan hukum sebelum dipublikasikan.",
    backToHome: "Kembali ke beranda",
    sections: [
      {
        heading: "Ringkasan",
        body: [
          "BagiStruk adalah aplikasi pembagi tagihan yang membantu pengguna memindai struk, mengekstrak item tagihan dengan OCR, dan membagi pembayaran antar peserta. Kami hanya mengumpulkan data yang diperlukan agar fitur aplikasi berjalan. Kami tidak menjual data pribadi dan tidak menggunakan SDK iklan.",
        ],
      },
      {
        heading: "Data Yang Kami Kumpulkan",
        bullets: [
          "Data akun: alamat email, identifier autentikasi, dan informasi penyedia login saat Anda membuat atau menggunakan akun.",
          "Data sesi anonim: ID pengguna anonim Supabase dapat dibuat saat Anda memakai fitur yang perlu menyimpan data.",
          "Data Google Sign-In: saat Anda login dengan Google, kami menerima token autentikasi melalui Supabase Auth. Kami tidak menerima password Google Anda.",
          "Preferensi profil: nama tampilan, mata uang default, bahasa, dan tema.",
          "Metadata aktivitas aplikasi: last_active_at, digunakan untuk mengetahui kapan akun terakhir aktif dan mendukung pembersihan akun tidak aktif.",
          "Foto struk: gambar yang Anda pilih atau ambil untuk pemrosesan OCR.",
          "Data tagihan: nama merchant, tanggal struk, item, jumlah, harga, pajak, service, peserta, pembagian item, dan status pembayaran.",
          "Data dukungan dan reminder: alamat email dan timestamp reminder tidak aktif saat reminder dikirim.",
          "Data teknis dasar dari app/framework/network service, seperti metadata perangkat dan request yang dibutuhkan untuk diagnostik dan keamanan.",
        ],
      },
      {
        heading: "Izin Yang Digunakan",
        bullets: [
          "Kamera: untuk mengambil foto struk.",
          "Akses foto / media: untuk memilih foto struk dari galeri.",
          "Internet / status jaringan: untuk berkomunikasi dengan Supabase dan layanan OCR.",
        ],
      },
      {
        heading: "Cara Kami Menggunakan Data",
        bullets: [
          "Mengautentikasi pengguna dan menjaga sesi tetap aktif.",
          "Memproses foto struk dan mengekstrak informasi tagihan.",
          "Menyimpan, menampilkan, mengedit, membagi, dan menyelesaikan tagihan.",
          "Mempertahankan data anonim saat pengguna upgrade ke akun terdaftar.",
          "Menyimpan preferensi pengguna dan menyesuaikan pengalaman aplikasi.",
          "Melacak aktivitas terakhir untuk retensi dan pembersihan akun.",
          "Mengirim reminder tidak aktif kepada pengguna terdaftar sebelum pembersihan akun.",
          "Mendiagnosis error, mencegah penyalahgunaan, dan menerapkan rate limit database.",
        ],
      },
      {
        heading: "Penyimpanan Dan Pemrosesan",
        body: [
          "Data aplikasi disimpan di Supabase, termasuk data autentikasi dan record database PostgreSQL. Foto struk diproses oleh Supabase Edge Functions. Pemrosesan OCR dapat memanggil penyedia AI/OCR pihak ketiga seperti Google Gemini dan OpenRouter. API key untuk layanan tersebut disimpan di sisi server dan tidak dibundel ke aplikasi mobile.",
        ],
      },
      {
        heading: "Layanan Pihak Ketiga",
        body: ["BagiStruk dapat menggunakan:"],
        bullets: [
          "Supabase: autentikasi, database, row-level security, Edge Functions, dan scheduled cleanup.",
          "Google Sign-In: login akun opsional.",
          "Google Gemini dan/atau OpenRouter: OCR dan parsing struk.",
          "Resend atau penyedia email lain: email reminder tidak aktif, jika dikonfigurasi.",
          "Kami tidak menggunakan SDK iklan pihak ketiga.",
        ],
      },
      {
        heading: "Retensi Dan Penghapusan Akun",
        bullets: [
          "Pengguna anonim dapat dihapus setelah 30 hari tidak aktif.",
          "Pengguna terdaftar dapat menerima reminder setelah 6 bulan tidak aktif.",
          "Jika pengguna terdaftar tetap tidak aktif selama 30 hari setelah reminder, akun dapat dihapus.",
          "Saat pengguna tidak aktif dihapus, bill milik pengguna dihapus terlebih dahulu, lalu user autentikasi dihapus.",
          "Jika pengguna membuka aplikasi setelah menerima reminder, jadwal penghapusan akan direset.",
          "Anda dapat meminta penghapusan akun dan data dengan menghubungi alam.aby.b@gmail.com.",
        ],
      },
      {
        heading: "Keamanan",
        body: [
          "Kami menggunakan autentikasi Supabase, row-level security, API key sisi server, dan policy database untuk melindungi data pengguna. Tidak ada sistem yang sepenuhnya aman, tetapi kami mengambil langkah wajar untuk membatasi akses dan mengurangi risiko.",
        ],
      },
      {
        heading: "Anak-Anak",
        body: [
          "BagiStruk tidak ditujukan untuk anak di bawah usia yang diwajibkan hukum untuk memberikan persetujuan layanan digital. Jika Anda yakin seorang anak memberikan data pribadi, hubungi kami agar dapat ditinjau dan dihapus.",
        ],
      },
      {
        heading: "Perubahan",
        body: [
          "Kami dapat memperbarui kebijakan ini dari waktu ke waktu. Versi terbaru sebaiknya tersedia di aplikasi dan halaman publik yang menghosting dokumen ini.",
        ],
      },
      {
        heading: "Kontak",
        body: ["Pertanyaan privasi atau permintaan penghapusan data: alam.aby.b@gmail.com"],
      },
    ],
  },
};

export const termsOfService: LegalContent = {
  en: {
    title: "Terms of Service",
    effectiveDateLabel: "Effective date",
    effectiveDate: "2026-05-23",
    intro:
      "These Terms explain the basic rules for using BagiStruk. This document is provided for product transparency and should be reviewed for legal compliance before publication.",
    backToHome: "Back to home",
    sections: [
      {
        heading: "1. About BagiStruk",
        body: [
          "BagiStruk is a split-bill app that helps users scan receipts, review extracted bill items, and divide payments among participants. OCR output may be generated using third-party AI/OCR providers and should always be reviewed by the user before saving or sharing.",
        ],
      },
      {
        heading: "2. Acceptance",
        body: [
          "By using BagiStruk, you agree to these Terms and the Privacy Policy. If you do not agree, do not use the app.",
        ],
      },
      {
        heading: "3. Accounts",
        body: [
          "You may use some features with an anonymous session. You may also register or sign in using email/password or Google Sign-In. You are responsible for keeping your device and account access secure.",
          "Anonymous accounts are intended for temporary or lightweight use. Registered accounts allow data to persist across devices and sessions, depending on the authentication provider and backend availability.",
        ],
      },
      {
        heading: "4. User Content",
        body: [
          "You are responsible for receipt photos, bill data, participant names, and any other content you enter or upload. Do not upload content that is illegal, abusive, harmful, or violates another person's rights.",
        ],
      },
      {
        heading: "5. OCR Accuracy",
        body: [
          "BagiStruk uses OCR and AI-assisted parsing to extract receipt data. Results may be incomplete, inaccurate, or misread. You are responsible for reviewing and correcting bill items, prices, taxes, service charges, and split amounts before relying on them.",
          "BagiStruk is not a financial, tax, accounting, or legal advisory service.",
        ],
      },
      {
        heading: "6. Acceptable Use",
        body: ["You agree not to:"],
        bullets: [
          "Abuse anonymous sign-in, OCR processing, or backend quotas.",
          "Attempt to access another user's data.",
          "Reverse engineer, disrupt, overload, or attack the service.",
          "Upload malicious, unlawful, or privacy-invasive content.",
          "Use the app in a way that violates applicable law.",
        ],
      },
      {
        heading: "7. Data Retention And Inactive Accounts",
        body: [
          "Anonymous accounts may be deleted after 30 days of inactivity. Registered accounts may receive an inactivity reminder after 6 months of inactivity. If there is no activity within 30 days after the reminder, the account and associated app data may be deleted.",
          "Opening the app after receiving a reminder resets the pending inactivity deletion state.",
        ],
      },
      {
        heading: "8. Third-Party Services",
        body: [
          "BagiStruk depends on third-party services such as Supabase, Google Sign-In, OCR providers, and email providers. Their availability, policies, and behavior may affect the app. We are not responsible for outages or changes made by third-party providers.",
        ],
      },
      {
        heading: "9. Donations And External Links",
        body: [
          "The app may include links to websites, profiles, and donation platforms such as Buy Me a Coffee, Saweria, or Patreon. These services are operated by third parties. Donations are voluntary and do not guarantee specific features, support levels, or continued service availability.",
        ],
      },
      {
        heading: "10. Service Changes",
        body: [
          "We may update, suspend, limit, or discontinue parts of the app at any time, including features, providers, data retention behavior, and supported platforms.",
        ],
      },
      {
        heading: "11. Termination",
        body: [
          "We may suspend or delete accounts or data when required by law, for security reasons, for abuse prevention, or according to the inactivity policy. You may request account deletion by contacting us.",
        ],
      },
      {
        heading: "12. Disclaimer",
        body: [
          'The app is provided "as is" and "as available". We do not guarantee that the app will be uninterrupted, error-free, or that OCR results will be accurate.',
        ],
      },
      {
        heading: "13. Limitation Of Liability",
        body: [
          "To the maximum extent permitted by law, we are not liable for indirect, incidental, special, consequential, or punitive damages, or for losses caused by incorrect OCR output, user input mistakes, service outages, data loss, or third-party services.",
        ],
      },
      {
        heading: "14. Changes To These Terms",
        body: [
          "We may update these Terms from time to time. Continued use of the app after changes means you accept the updated Terms.",
        ],
      },
      {
        heading: "15. Contact",
        body: ["Questions about these Terms: alam.aby.b@gmail.com"],
      },
    ],
  },
  id: {
    title: "Syarat dan Ketentuan",
    effectiveDateLabel: "Tanggal berlaku",
    effectiveDate: "2026-05-23",
    intro:
      "Syarat ini menjelaskan aturan dasar penggunaan BagiStruk. Dokumen ini disediakan untuk transparansi produk dan sebaiknya ditinjau kembali untuk kepatuhan hukum sebelum dipublikasikan.",
    backToHome: "Kembali ke beranda",
    sections: [
      {
        heading: "1. Tentang BagiStruk",
        body: [
          "BagiStruk adalah aplikasi pembagi tagihan yang membantu pengguna memindai struk, meninjau item tagihan yang diekstrak, dan membagi pembayaran antar peserta. Hasil OCR dapat dibuat menggunakan penyedia AI/OCR pihak ketiga dan harus selalu diperiksa pengguna sebelum disimpan atau dibagikan.",
        ],
      },
      {
        heading: "2. Persetujuan",
        body: [
          "Dengan menggunakan BagiStruk, Anda menyetujui Syarat ini dan Kebijakan Privasi. Jika tidak setuju, jangan gunakan aplikasi.",
        ],
      },
      {
        heading: "3. Akun",
        body: [
          "Sebagian fitur dapat digunakan dengan sesi anonim. Anda juga dapat mendaftar atau login menggunakan email/password atau Google Sign-In. Anda bertanggung jawab menjaga keamanan perangkat dan akses akun.",
          "Akun anonim ditujukan untuk penggunaan sementara atau ringan. Akun terdaftar memungkinkan data bertahan lintas perangkat dan sesi, tergantung penyedia autentikasi dan ketersediaan backend.",
        ],
      },
      {
        heading: "4. Konten Pengguna",
        body: [
          "Anda bertanggung jawab atas foto struk, data tagihan, nama peserta, dan konten lain yang dimasukkan atau diunggah. Jangan unggah konten yang ilegal, abusif, berbahaya, atau melanggar hak orang lain.",
        ],
      },
      {
        heading: "5. Akurasi OCR",
        body: [
          "BagiStruk menggunakan OCR dan parsing berbantuan AI untuk mengekstrak data struk. Hasil dapat tidak lengkap, tidak akurat, atau salah baca. Anda bertanggung jawab memeriksa dan memperbaiki item, harga, pajak, service, dan nominal pembagian sebelum mengandalkannya.",
          "BagiStruk bukan layanan nasihat keuangan, pajak, akuntansi, atau hukum.",
        ],
      },
      {
        heading: "6. Penggunaan Yang Diperbolehkan",
        body: ["Anda setuju untuk tidak:"],
        bullets: [
          "Menyalahgunakan anonymous sign-in, pemrosesan OCR, atau kuota backend.",
          "Mencoba mengakses data pengguna lain.",
          "Melakukan reverse engineering, mengganggu, membebani, atau menyerang layanan.",
          "Mengunggah konten berbahaya, melanggar hukum, atau melanggar privasi.",
          "Menggunakan aplikasi dengan cara yang melanggar hukum yang berlaku.",
        ],
      },
      {
        heading: "7. Retensi Data Dan Akun Tidak Aktif",
        body: [
          "Akun anonim dapat dihapus setelah 30 hari tidak aktif. Akun terdaftar dapat menerima reminder setelah 6 bulan tidak aktif. Jika tidak ada aktivitas dalam 30 hari setelah reminder, akun dan data aplikasi terkait dapat dihapus.",
          "Membuka aplikasi setelah menerima reminder akan mereset status penghapusan tidak aktif yang tertunda.",
        ],
      },
      {
        heading: "8. Layanan Pihak Ketiga",
        body: [
          "BagiStruk bergantung pada layanan pihak ketiga seperti Supabase, Google Sign-In, penyedia OCR, dan penyedia email. Ketersediaan, kebijakan, dan perilaku layanan tersebut dapat memengaruhi aplikasi. Kami tidak bertanggung jawab atas gangguan atau perubahan dari penyedia pihak ketiga.",
        ],
      },
      {
        heading: "9. Donasi Dan Link Eksternal",
        body: [
          "Aplikasi dapat memuat link ke website, profil, dan platform donasi seperti Buy Me a Coffee, Saweria, atau Patreon. Layanan tersebut dioperasikan oleh pihak ketiga. Donasi bersifat sukarela dan tidak menjamin fitur, level dukungan, atau ketersediaan layanan tertentu.",
        ],
      },
      {
        heading: "10. Perubahan Layanan",
        body: [
          "Kami dapat memperbarui, menangguhkan, membatasi, atau menghentikan bagian aplikasi kapan saja, termasuk fitur, penyedia, perilaku retensi data, dan platform yang didukung.",
        ],
      },
      {
        heading: "11. Pengakhiran",
        body: [
          "Kami dapat menangguhkan atau menghapus akun atau data jika diwajibkan hukum, untuk alasan keamanan, pencegahan penyalahgunaan, atau sesuai kebijakan akun tidak aktif. Anda dapat meminta penghapusan akun dengan menghubungi kami.",
        ],
      },
      {
        heading: "12. Penafian",
        body: [
          'Aplikasi disediakan "sebagaimana adanya" dan "sebagaimana tersedia". Kami tidak menjamin aplikasi selalu tersedia, bebas error, atau hasil OCR selalu akurat.',
        ],
      },
      {
        heading: "13. Batasan Tanggung Jawab",
        body: [
          "Sejauh diizinkan hukum, kami tidak bertanggung jawab atas kerugian tidak langsung, insidental, khusus, konsekuensial, atau punitif, atau kerugian akibat hasil OCR yang salah, kesalahan input pengguna, gangguan layanan, kehilangan data, atau layanan pihak ketiga.",
        ],
      },
      {
        heading: "14. Perubahan Syarat",
        body: [
          "Kami dapat memperbarui Syarat ini dari waktu ke waktu. Penggunaan aplikasi setelah perubahan berarti Anda menerima Syarat yang diperbarui.",
        ],
      },
      {
        heading: "15. Kontak",
        body: ["Pertanyaan tentang Syarat ini: alam.aby.b@gmail.com"],
      },
    ],
  },
};
