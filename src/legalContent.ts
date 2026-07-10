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
    effectiveDate: "2026-07-10",
    intro:
      "This policy explains how BagiStruk collects, uses, stores, and deletes data. This document is provided for product transparency and should be reviewed for legal compliance before publication.",
    backToHome: "Back to home",
    sections: [
      {
        heading: "Summary",
        body: [
          "BagiStruk is a split-bill app that helps users scan receipts, extract bill items with OCR, and divide payments among participants. We collect only the data needed to provide these features. We do not sell personal data. If ads are enabled, we use Google Mobile Ads / AdMob to show ads and measure ad performance.",
          "",
          "For users in the European Economic Area, the United Kingdom, and Switzerland, we use Google's User Messaging Platform (UMP) and AdMob's European regulations message — a Google-certified Consent Management Platform (CMP) integrated with the IAB Transparency and Consent Framework (TCF) v2.3. This message may ask for consent for cookies, SDK local storage, advertising identifiers, and the collection and use of personal data for personalized ads, in line with Google's EU User Consent Policy, the ePrivacy Directive, and the GDPR.",
        ],
      },
      {
        heading: "Who We Are",
        body: [
          "The data controller for BagiStruk is:",
          "",
          "Alam Aby Bashit",
          "Komplek Kamarasan Residence A3/2 Kelurahan Buahbatu Kecamatan Bojongsoang",
          "Bandung, 40287",
          "Indonesia",
          "Email: alam.aby.b@gmail.com",
          "",
          "If you are in the European Economic Area, the address above also serves as our contact for the purposes of GDPR Art. 27 when you cannot reach us by email. You can always contact us at the email above regardless of your location.",
          "",
          "For Indonesian users, you may lodge a complaint with the Ministry of Communication and Information Technology (KOMINFO) or with the Personal Data Protection Authority (Otoritas Pelindungan Data Pribadi, OPDP) once it becomes operational. The list of EEA supervisory authorities is available at https://edpb.europa.eu/about-edpb/about-edpb/members_en.",
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
          "Bill data: merchant names, receipt dates, items, quantities, prices, taxes, service charges, participants, split assignments, settlement status, deleted-bill recovery metadata, exports generated on device, and optional transfer bank information used in settlement messages.",
          "OCR credit data: plan/entitlement status, Plus trial start/end/consumption metadata, monthly credit grants, credit usage, and audit records needed to enforce scan limits and feature access.",
          "Google Play Billing data when purchases are available: product IDs, purchase tokens, order IDs, subscription status/expiry, and verification responses needed to grant Plus access or OCR credit packs.",
          "Support and reminder data: email address and inactivity reminder timestamps when reminders are sent.",
          "Operational alert data: limited diagnostic details such as request ID, user ID, OCR provider, model, currency, hint, error status, and error message may be sent to the operator by email when OCR provider configuration, quota, or service issues need attention.",
          "Basic technical data sent by app/framework/network services, such as device and request metadata needed for diagnostics and security. For anonymous anti-abuse, we may store a server-side HMAC hash derived from coarse request signals; we do not store the raw IP address or raw device fingerprint for this purpose.",
          "Advertising data when ads are enabled: advertising identifiers such as the Android Advertising ID, device/ad interaction data, approximate location inferred by ad services, and consent status used by Google Mobile Ads / AdMob for ad delivery, frequency capping, fraud prevention, and measurement.",
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
          "To save, display, edit, split, settle, share, export, delete, and restore bills when the feature is available.",
          "To preserve anonymous data when a user upgrades to a registered account.",
          "To enforce OCR credit limits and feature access, including anonymous, Free, Plus, history windows, export access, deleted-bill recovery, per-bill currency override, transfer bank information, and monthly insights.",
          "To grant and enforce one-time Plus trials for eligible registered users, including recording when a trial starts, ends, and has been consumed.",
          "To verify Google Play purchases server-side and grant Plus subscriptions or one-time OCR credit packs.",
          "To store user preferences and personalize the app.",
          "To track last activity for account retention and cleanup.",
          "To send inactivity reminders to registered users before account cleanup.",
          "To show ads, measure ad performance, prevent ad fraud, and respect consent choices when ads are enabled. If you do not consent to personalized ads where required, Google Mobile Ads / AdMob may serve non-personalized or limited ads where supported.",
          "To diagnose errors, prevent abuse, and enforce database rate limits.",
        ],
      },
      {
        heading: "Legal Basis For Processing",
        body: [
          "We process your personal data on the following legal bases, in line with Article 6 of the EU General Data Protection Regulation (GDPR) and equivalent provisions of the Indonesian Personal Data Protection Law (UU No. 27/2022, \"UU PDP\"):",
          "",
          "Account data, authentication, and bill data — to perform the contract you entered with us by creating an account (Art. 6(1)(b) GDPR / Pasal 23 UU PDP).",
          "Receipt photos and OCR processing — with your explicit consent each time you submit a scan (Art. 6(1)(a) GDPR). Scans submitted before withdrawal of consent will have been processed.",
          "Marketing emails and promotional communications — with your prior opt-in consent only (Art. 6(1)(a) GDPR / Pasal 23 UU PDP). You can withdraw this consent at any time from Profile & Settings, or via the unsubscribe link in any marketing email we send.",
          "Personalized advertising — with your consent given through Google's User Messaging Platform (UMP) when required by applicable law (Art. 6(1)(a) GDPR / ePrivacy Directive). We do not personalize ads for users who do not give consent.",
          "Basic technical, security, and anti-abuse data — on the basis of our legitimate interest in keeping the service secure and preventing abuse (Art. 6(1)(f) GDPR).",
          "Inactivity reminders and account cleanup notifications — on the basis of our legitimate interest in keeping account records accurate (Art. 6(1)(f) GDPR).",
          "Operational alerts about OCR provider issues — on the basis of our legitimate interest in operating a reliable service (Art. 6(1)(f) GDPR).",
        ],
      },
      {
        heading: "Storage And Processing",
        body: [
          "App data is stored in Supabase, including authentication data and PostgreSQL database records. Receipt images are processed by Supabase Edge Functions. OCR processing may call third-party AI/OCR providers such as Google Gemini, OpenRouter, and Nvidia NIM. API keys for those providers are stored server-side and are not bundled into the mobile app.",
        ],
      },
      {
        heading: "International Data Transfers",
        body: [
          "Your data may be transferred to and processed in countries other than your country of residence. The main destinations are:",
          "",
          "United States — for Google services (Sign-In, Play Billing, Mobile Ads, Gemini), OpenRouter, and Nvidia NIM OCR processing.",
          "European Economic Area or other Supabase regions — for authentication, database, and Edge Functions, depending on your Supabase project's configured region.",
          "",
          "When we transfer personal data outside the European Economic Area, we rely on safeguards such as the European Commission's Standard Contractual clauses (SCCs), the EU-U.S. Data Privacy Framework (where applicable), or equivalent contractual protections. A copy of the relevant safeguards can be requested by contacting us.",
          "",
          "Under Indonesian law (UU PDP Pasal 56), cross-border transfers are subject to requirements of adequate protection in the destination country or explicit consent from the data subject. Where required, we obtain such consent at the time of account creation.",
        ],
      },
      {
        heading: "Third-Party Services",
        body: ["BagiStruk may use:"],
        bullets: [
          "Supabase: authentication, database, row-level security, Edge Functions, and scheduled cleanup.",
          "Google Sign-In: optional account login.",
          "Google Gemini, OpenRouter, and/or Nvidia NIM: OCR and receipt parsing.",
          "Resend or another email provider: inactivity reminder emails and operational OCR provider alerts, if configured.",
          "Google User Messaging Platform (UMP) / AdMob: Google-certified CMP, optional ad delivery, ad measurement, fraud prevention, and consent/privacy messaging via the European regulations message, integrated with IAB TCF v2.3.",
          "Google Play Billing / Google Play Developer API: purchase processing and server-side purchase verification for subscriptions and one-time OCR credit packs.",
        ],
      },
      {
        heading: "Account Retention And Deletion",
        bullets: [
          "Anonymous users may be deleted after 30 days of inactivity.",
          "Registered Free users may receive an inactivity reminder after 6 months of inactivity.",
          "If a registered Free user remains inactive for 30 days after the reminder, the account may be deleted.",
          "Registered users with an active Plus entitlement are excluded from inactivity cleanup while the entitlement remains active.",
          "When Plus entitlement ends, the inactivity window for cleanup is counted from the later of the user's last app activity and the latest Plus entitlement end time.",
          "When an inactive user is deleted, bills owned by that user are deleted first, then the authentication user is deleted.",
          "If a user opens the app after receiving a reminder, the pending deletion state is reset.",
          "You can delete your account and associated app data from Profile & Settings > Delete Account in the app.",
          "You may also request account and data deletion by contacting us at alam.aby.b@gmail.com or through the public privacy page.",
        ],
      },
      {
        heading: "Security",
        body: [
          "We rely on Supabase authentication, row-level security, server-side API keys, and database policies to protect user data. No system is perfectly secure, but we take reasonable steps to limit access and reduce exposure.",
        ],
      },
      {
        heading: "Usage Analytics",
        body: [
          "We may collect lightweight, privacy-friendly usage analytics such as page views and CTA clicks to understand product interest and improve the landing page.",
        ],
      },
      {
        heading: "Data Breach Notification",
        body: [
          "In the event of a personal data breach that is likely to result in a high risk to your rights and freedoms, we will:",
          "",
          "Notify the relevant supervisory authority (the data protection authority in your jurisdiction) within 72 hours of becoming aware of the breach, as required by GDPR Art. 33.",
          "Notify affected users without undue delay, as required by GDPR Art. 34, when the breach poses a high risk to their rights.",
          "For users in Indonesia, notify the Personal Data Protection Authority (Otoritas Pelindungan Data Pribadi) and affected users within 3 x 24 hours of becoming aware, as required by UU PDP Pasal 46.",
          "",
          "The notification will describe the nature of the breach, the categories and approximate number of affected users, the likely consequences, and the measures taken or proposed to address it.",
        ],
      },
      {
        heading: "Your Rights",
        body: [
          "Subject to applicable law, you have the following rights regarding your personal data:",
          "",
          "Right of access (GDPR Art. 15 / UU PDP Pasal 7) — to request a copy of the personal data we hold about you.",
          "Right to rectification (GDPR Art. 16 / UU PDP Pasal 8) — to correct inaccurate or incomplete data. Most profile fields can be updated from Profile & Settings; bill fields can be edited in the app.",
          "Right to erasure / right to be forgotten (GDPR Art. 17 / UU PDP Pasal 9) — to request deletion of your account and associated data from Profile & Settings, or by contacting us.",
          "Right to restriction of processing (GDPR Art. 18) — to request that we limit how we use your data in certain circumstances.",
          "Right to data portability (GDPR Art. 20 / UU PDP Pasal 11) — to receive your data in a structured, commonly used, machine-readable format. Bills and their data can be exported as PDF and CSV from the app.",
          "Right to object (GDPR Art. 21) — to object to processing based on legitimate interest, including profiling related to direct marketing.",
          "Right to withdraw consent (GDPR Art. 7(3) / UU PDP Pasal 25) — to withdraw any consent you have given, at any time, without affecting the lawfulness of processing before withdrawal. Marketing opt-in can be withdrawn from Profile & Settings.",
          "Right to lodge a complaint — with your local data protection authority (for EEA residents; see https://edpb.europa.eu/about-edpb/about-edpb/members_en), or with KOMINFO / the Personal Data Protection Authority (for Indonesian residents).",
          "Right not to be subject to automated decision-making (GDPR Art. 22) — BagiStruk does not make decisions based solely on automated processing that produce legal or similarly significant effects on you.",
          "",
          "To exercise any of these rights, contact us at alam.aby.b@gmail.com. We will respond within 30 days, or earlier if required by local law. We may need to verify your identity before acting on the request.",
        ],
      },
      {
        heading: "Children",
        body: [
          "BagiStruk is not intended for children under 13 years of age (the threshold under the US Children's Online Privacy Protection Act, COPPA), or under the age required by your local law to consent to digital services (16 in most of the European Economic Area by default, 18 in Indonesia under the Civil Code, or younger if your country's law allows consent at a lower age with parental approval).",
          "",
          "We do not knowingly collect personal data from children below the applicable age threshold. If you believe a child has provided personal data to us, contact us at alam.aby.b@gmail.com so we can review, delete the data, and close the account. Where required by law, we will obtain verifiable parental consent before processing the child's data.",
        ],
      },
      {
        heading: "Changes",
        body: [
          "We may update this policy from time to time. The latest version should be made available in the app and on the public page hosting this document. Where consent is required for processing changes, we will ask for fresh consent through our CMP.",
        ],
      },
      {
        heading: "Ad Privacy Choices",
        body: [
          "If you are in a region that requires consent for personalized ads, the app will show a Google consent message the first time you launch it. You can also review or change your ad privacy choices at any time from Profile & Settings in the app. Outside these regions, the ad privacy entry point is hidden.",
        ],
      },
      {
        heading: "Contact",
        body: [
          "For privacy questions, deletion requests, or to exercise your data protection rights, contact us:",
          "",
          "Email: alam.aby.b@gmail.com",
          "",
          "Postal address (also our EEA Art. 27 contact):",
          "Alam Aby Bashit",
          "Komplek Kamarasan Residence A3/2 Kelurahan Buahbatu Kecamatan Bojongsoang",
          "Bandung, 40287",
          "Indonesia",
        ],
      },
    ],
  },
  id: {
    title: "Kebijakan Privasi",
    effectiveDateLabel: "Tanggal berlaku",
    effectiveDate: "2026-07-10",
    intro:
      "Kebijakan ini menjelaskan bagaimana BagiStruk mengumpulkan, menggunakan, menyimpan, dan menghapus data. Dokumen ini disediakan untuk transparansi produk dan sebaiknya ditinjau kembali untuk kepatuhan hukum sebelum dipublikasikan.",
    backToHome: "Kembali ke beranda",
    sections: [
      {
        heading: "Ringkasan",
        body: [
          "BagiStruk adalah aplikasi pembagi tagihan yang membantu pengguna memindai struk, mengekstrak item tagihan dengan OCR, dan membagi pembayaran antar peserta. Kami hanya mengumpulkan data yang diperlukan agar fitur aplikasi berjalan. Kami tidak menjual data pribadi. Jika iklan diaktifkan, kami memakai Google Mobile Ads / AdMob untuk menampilkan iklan dan mengukur performa iklan.",
          "",
          "Untuk pengguna di Wilayah Ekonomi Eropa, Inggris Raya, dan Swiss, kami menggunakan Google User Messaging Platform (UMP) dan pesan European regulations AdMob — sebuah Consent Management Platform (CMP) tersertifikasi Google yang terintegrasi dengan IAB Transparency and Consent Framework (TCF) v2.3. Pesan ini dapat meminta persetujuan untuk cookie, penyimpanan lokal SDK, identifier iklan, serta pengumpulan dan penggunaan data pribadi untuk iklan yang dipersonalisasi, sesuai Google EU User Consent Policy, ePrivacy Directive, dan GDPR.",
        ],
      },
      {
        heading: "Siapa Kami",
        body: [
          "Pengontrol data untuk BagiStruk adalah:",
          "",
          "Alam Aby Bashit",
          "Komplek Kamarasan Residence A3/2 Kelurahan Buahbatu Kecamatan Bojongsoang",
          "Bandung, 40287",
          "Indonesia",
          "Email: alam.aby.b@gmail.com",
          "",
          "Jika Anda berada di Wilayah Ekonomi Eropa, alamat di atas juga berfungsi sebagai kontak kami untuk keperluan Pasal 27 GDPR saat Anda tidak dapat menghubungi kami melalui email. Anda selalu dapat menghubungi kami di email di atas dari mana pun.",
          "",
          "Untuk pengguna di Indonesia, Anda dapat mengajukan keluhan ke Kementerian Komunikasi dan Informatika (KOMINFO) atau Otoritas Pelindungan Data Pribadi (OPDP) setelah badan tersebut beroperasi. Daftar otoritas pengawas EEA tersedia di https://edpb.europa.eu/about-edpb/about-edpb/members_en.",
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
          "Data tagihan: nama merchant, tanggal struk, item, jumlah, harga, pajak, service, peserta, pembagian item, status pembayaran, metadata pemulihan bill terhapus, export yang dibuat di perangkat, dan info bank transfer opsional untuk pesan settlement.",
          "Data credit OCR: status plan/entitlement, metadata mulai/akhir/pemakaian trial Plus, grant credit bulanan, penggunaan credit, dan audit yang dibutuhkan untuk menerapkan batas scan dan akses fitur.",
          "Data Google Play Billing saat pembelian tersedia: product ID, purchase token, order ID, status/expiry subscription, dan respons verifikasi yang dibutuhkan untuk memberi akses Plus atau paket credit OCR.",
          "Data dukungan dan reminder: alamat email dan timestamp reminder tidak aktif saat reminder dikirim.",
          "Data alert operasional: detail diagnostik terbatas seperti request ID, user ID, penyedia OCR, model, currency, hint, status error, dan pesan error dapat dikirim ke operator melalui email saat masalah konfigurasi, quota, atau layanan penyedia OCR perlu ditangani.",
          "Data teknis dasar dari app/framework/network service, seperti metadata perangkat dan request yang dibutuhkan untuk diagnostik dan keamanan. Untuk anti-abuse pengguna anonim, kami dapat menyimpan hash HMAC sisi server yang diturunkan dari sinyal request terbatas; kami tidak menyimpan alamat IP mentah atau fingerprint perangkat mentah untuk tujuan ini.",
          "Data iklan saat iklan diaktifkan: identifier iklan seperti Android Advertising ID, data perangkat/interaksi iklan, perkiraan lokasi yang disimpulkan layanan iklan, dan status consent yang digunakan Google Mobile Ads / AdMob untuk penayangan iklan, pembatasan frekuensi, pencegahan fraud, dan pengukuran.",
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
          "Menyimpan, menampilkan, mengedit, membagi, menyelesaikan, membagikan, mengekspor, menghapus, dan memulihkan tagihan saat fitur tersedia.",
          "Mempertahankan data anonim saat pengguna upgrade ke akun terdaftar.",
          "Menerapkan batas credit OCR dan akses fitur, termasuk batas pengguna anonim, Free, Plus, jendela History, akses export, pemulihan bill terhapus, penggantian currency per bill, info bank transfer, dan insight bulanan.",
          "Memberikan dan menerapkan trial Plus satu kali untuk pengguna terdaftar yang memenuhi syarat, termasuk mencatat kapan trial mulai, berakhir, dan sudah digunakan.",
          "Memverifikasi pembelian Google Play dari sisi server dan memberi subscription Plus atau paket credit OCR sekali beli.",
          "Menyimpan preferensi pengguna dan menyesuaikan pengalaman aplikasi.",
          "Melacak aktivitas terakhir untuk retensi dan pembersihan akun.",
          "Mengirim reminder tidak aktif kepada pengguna terdaftar sebelum pembersihan akun.",
          "Menampilkan iklan, mengukur performa iklan, mencegah fraud iklan, dan menghormati pilihan consent saat iklan diaktifkan. Jika Anda tidak menyetujui iklan yang dipersonalisasi di wilayah yang mewajibkan, Google Mobile Ads / AdMob dapat menayangkan iklan non-personalized atau limited ads jika didukung.",
          "Mendiagnosis error, mencegah penyalahgunaan, dan menerapkan rate limit database.",
        ],
      },
      {
        heading: "Dasar Hukum Pemrosesan",
        body: [
          "Kami memproses data pribadi Anda berdasarkan dasar hukum berikut, sesuai Pasal 6 GDPR (Uni Eropa) dan ketentuan setara UU No. 27/2022 tentang Pelindungan Data Pribadi (\"UU PDP\"):",
          "",
          "Data akun, autentikasi, dan data tagihan — untuk pelaksanaan kontrak yang Anda sepakati saat membuat akun (Pasal 6(1)(b) GDPR / Pasal 23 UU PDP).",
          "Foto struk dan pemrosesan OCR — dengan persetujuan eksplisit Anda setiap kali Anda mengirim pindaian (Pasal 6(1)(a) GDPR). Pindaian yang dikirim sebelum penarikan persetujuan tetap akan diproses.",
          "Email promosi dan komunikasi pemasaran — hanya dengan persetujuan opt-in Anda (Pasal 6(1)(a) GDPR / Pasal 23 UU PDP). Anda dapat menarik persetujuan ini kapan saja dari Profil & Pengaturan, atau melalui link unsubscribe di email pemasaran apa pun.",
          "Iklan yang dipersonalisasi — dengan persetujuan Anda melalui Google User Messaging Platform (UMP) bila diwajibkan hukum yang berlaku (Pasal 6(1)(a) GDPR / ePrivacy Directive). Kami tidak mempersonalisasi iklan untuk pengguna yang tidak memberikan persetujuan.",
          "Data teknis, keamanan, dan anti-penyalahgunaan — berdasarkan kepentingan sah kami untuk menjaga layanan tetap aman dan mencegah fraud (Pasal 6(1)(f) GDPR).",
          "Reminder tidak aktif dan notifikasi pembersihan akun — berdasarkan kepentingan sah kami dalam memelihara catatan akun yang akurat (Pasal 6(1)(f) GDPR).",
          "Alert operasional tentang masalah penyedia OCR — berdasarkan kepentingan sah kami dalam mengoperasikan layanan yang andal (Pasal 6(1)(f) GDPR).",
        ],
      },
      {
        heading: "Penyimpanan Dan Pemrosesan",
        body: [
          "Data aplikasi disimpan di Supabase, termasuk data autentikasi dan record database PostgreSQL. Foto struk diproses oleh Supabase Edge Functions. Pemrosesan OCR dapat memanggil penyedia AI/OCR pihak ketiga seperti Google Gemini, OpenRouter, dan Nvidia NIM. API key untuk layanan tersebut disimpan di sisi server dan tidak dibundel ke aplikasi mobile.",
        ],
      },
      {
        heading: "Transfer Data Lintas Negara",
        body: [
          "Data Anda dapat ditransfer dan diproses di negara selain negara tempat tinggal Anda. Tujuan utama:",
          "",
          "Amerika Serikat — untuk layanan Google (Sign-In, Play Billing, Mobile Ads, Gemini), OpenRouter, dan pemrosesan OCR Nvidia NIM.",
          "Wilayah Ekonomi Eropa atau region Supabase lain — untuk autentikasi, database, dan Edge Functions, tergantung region project Supabase Anda.",
          "",
          "Ketika kami mentransfer data pribadi keluar dari Wilayah Ekonomi Eropa, kami mengandalkan perlindungan seperti Standard Contractual clauses (SCC) dari European Commission, EU-U.S. Data Privacy Framework (bila berlaku), atau perlindungan kontraktual setara. Salinan perlindungan relevan dapat diminta dengan menghubungi kami.",
          "",
          "Berdasarkan UU PDP Pasal 56, transfer lintas negara tunduk pada persyaratan tingkat perlindungan yang memadai di negara tujuan atau persetujuan eksplisit dari subjek data. Bila diperlukan, kami memperoleh persetujuan tersebut pada saat pembuatan akun.",
        ],
      },
      {
        heading: "Layanan Pihak Ketiga",
        body: ["BagiStruk dapat menggunakan:"],
        bullets: [
          "Supabase: autentikasi, database, row-level security, Edge Functions, dan scheduled cleanup.",
          "Google Sign-In: login akun opsional.",
          "Google Gemini, OpenRouter, dan/atau Nvidia NIM: OCR dan parsing struk.",
          "Resend atau penyedia email lain: email reminder tidak aktif dan alert operasional penyedia OCR, jika dikonfigurasi.",
          "Google User Messaging Platform (UMP) / AdMob: CMP tersertifikasi Google, penayangan iklan opsional, pengukuran iklan, pencegahan fraud, dan pesan consent/privasi melalui European regulations message, terintegrasi dengan IAB TCF v2.3.",
          "Google Play Billing / Google Play Developer API: pemrosesan pembelian dan verifikasi pembelian sisi server untuk subscription dan paket credit OCR sekali beli.",
        ],
      },
      {
        heading: "Retensi Dan Penghapusan Akun",
        bullets: [
          "Pengguna anonim dapat dihapus setelah 30 hari tidak aktif.",
          "Pengguna terdaftar Free dapat menerima reminder setelah 6 bulan tidak aktif.",
          "Jika pengguna terdaftar Free tetap tidak aktif selama 30 hari setelah reminder, akun dapat dihapus.",
          "Pengguna terdaftar dengan entitlement Plus aktif dikecualikan dari pembersihan akun tidak aktif selama entitlement tersebut masih aktif.",
          "Setelah entitlement Plus berakhir, jendela tidak aktif untuk cleanup dihitung dari waktu yang lebih baru antara aktivitas terakhir pengguna dan waktu entitlement Plus terakhir berakhir.",
          "Saat pengguna tidak aktif dihapus, bill milik pengguna dihapus terlebih dahulu, lalu user autentikasi dihapus.",
          "Jika pengguna membuka aplikasi setelah menerima reminder, jadwal penghapusan akan direset.",
          "Anda dapat menghapus akun dan data aplikasi terkait dari Profil & Pengaturan > Hapus Akun di dalam aplikasi.",
          "Anda juga dapat meminta penghapusan akun dan data dengan menghubungi alam.aby.b@gmail.com atau melalui halaman privacy publik.",
        ],
      },
      {
        heading: "Keamanan",
        body: [
          "Kami menggunakan autentikasi Supabase, row-level security, API key sisi server, dan policy database untuk melindungi data pengguna. Tidak ada sistem yang sepenuhnya aman, tetapi kami mengambil langkah wajar untuk membatasi akses dan mengurangi risiko.",
        ],
      },
      {
        heading: "Analytics Penggunaan",
        body: [
          "Kami dapat mengumpulkan analytics penggunaan ringan yang menjaga privasi, seperti page view dan klik CTA, untuk memahami minat produk dan meningkatkan landing page.",
        ],
      },
      {
        heading: "Notifikasi Pelanggaran Data",
        body: [
          "Apabila terjadi pelanggaran data pribadi yang kemungkinan besar berisiko tinggi terhadap hak dan kebebasan Anda, kami akan:",
          "",
          "Memberi tahu otoritas pengawas terkait (otoritas perlindungan data di yurisdiksi Anda) dalam 72 jam setelah menyadari pelanggaran, sesuai Pasal 33 GDPR.",
          "Memberi tahu pengguna terdampak tanpa penundaan yang tidak semestinya, sesuai Pasal 34 GDPR, ketika pelanggaran menimbulkan risiko tinggi terhadap hak mereka.",
          "Untuk pengguna di Indonesia, memberi tahu Otoritas Pelindungan Data Pribadi (OPDP) dan pengguna terdampak dalam 3 x 24 jam setelah menyadari, sesuai Pasal 46 UU PDP.",
          "",
          "Notifikasi akan menjelaskan sifat pelanggaran, kategori dan perkiraan jumlah pengguna terdampak, kemungkinan konsekuensi, serta langkah-langkah yang diambil atau diusulkan untuk mengatasinya.",
        ],
      },
      {
        heading: "Hak Anda",
        body: [
          "Sesuai hukum yang berlaku, Anda memiliki hak-hak berikut terkait data pribadi Anda:",
          "",
          "Hak akses (Pasal 15 GDPR / Pasal 7 UU PDP) — meminta salinan data pribadi yang kami simpan tentang Anda.",
          "Hak koreksi (Pasal 16 GDPR / Pasal 8 UU PDP) — mengoreksi data yang tidak akurat atau tidak lengkap. Sebagian besar field profil dapat diubah dari Profil & Pengaturan; field tagihan dapat diedit di aplikasi.",
          "Hak penghapusan / hak untuk dilupakan (Pasal 17 GDPR / Pasal 9 UU PDP) — meminta penghapusan akun dan data terkait dari Profil & Pengaturan, atau dengan menghubungi kami.",
          "Hak pembatasan pemrosesan (Pasal 18 GDPR) — meminta kami membatasi penggunaan data Anda dalam keadaan tertentu.",
          "Hak portabilitas data (Pasal 20 GDPR / Pasal 11 UU PDP) — menerima data Anda dalam format terstruktur, umum digunakan, dan dapat dibaca mesin. Tagihan dan datanya dapat diekspor sebagai PDF dan CSV dari aplikasi.",
          "Hak keberatan (Pasal 21 GDPR) — menolak pemrosesan berdasarkan kepentingan sah, termasuk profiling terkait pemasaran langsung.",
          "Hak penarikan persetujuan (Pasal 7(3) GDPR / Pasal 25 UU PDP) — menarik persetujuan yang telah Anda berikan, kapan saja, tanpa memengaruhi keabsahan pemrosesan sebelum penarikan. Opt-in pemasaran dapat ditarik dari Profil & Pengaturan.",
          "Hak mengajukan keluhan — ke otoritas perlindungan data lokal (untuk warga EEA; lihat https://edpb.europa.eu/about-edpb/about-edpb/members_en), atau ke KOMINFO / Otoritas Pelindungan Data Pribadi (untuk warga Indonesia).",
          "Hak untuk tidak menjadi subjek pengambilan keputusan otomatis (Pasal 22 GDPR) — BagiStruk tidak membuat keputusan berdasarkan pemrosesan otomatis semata yang menghasilkan efek hukum atau efek signifikan serupa terhadap Anda.",
          "",
          "Untuk menggunakan hak-hak ini, hubungi kami di alam.aby.b@gmail.com. Kami akan merespons dalam 30 hari, atau lebih cepat bila diwajibkan hukum lokal. Kami mungkin perlu memverifikasi identitas Anda sebelum menindaklanjuti permintaan.",
        ],
      },
      {
        heading: "Anak-Anak",
        body: [
          "BagiStruk tidak ditujukan untuk anak di bawah 13 tahun (batas minimum US Children's Online Privacy Protection Act, COPPA), atau di bawah usia yang diwajibkan hukum lokal Anda untuk menyetujui layanan digital (16 tahun di sebagian besar Wilayah Ekonomi Eropa secara default, 18 tahun di Indonesia menurut Kitab Undang-Undang Hukum Perdata, atau lebih muda bila hukum negara Anda mengizinkan persetujuan pada usia lebih muda dengan persetujuan orang tua).",
          "",
          "Kami tidak dengan sengaja mengumpulkan data pribadi dari anak di bawah batas usia yang berlaku. Jika Anda yakin seorang anak telah memberikan data pribadi kepada kami, hubungi kami di alam.aby.b@gmail.com agar kami dapat meninjau, menghapus data, dan menutup akun. Bila diwajibkan hukum, kami akan memperoleh persetujuan orang tua yang dapat diverifikasi sebelum memproses data anak.",
        ],
      },
      {
        heading: "Perubahan",
        body: [
          "Kami dapat memperbarui kebijakan ini dari waktu ke waktu. Versi terbaru sebaiknya tersedia di aplikasi dan halaman publik yang menghosting dokumen ini. Bila persetujuan diperlukan untuk perubahan pemrosesan, kami akan meminta persetujuan baru melalui CMP kami.",
        ],
      },
      {
        heading: "Pilihan Privasi Iklan",
        body: [
          "Jika Anda berada di wilayah yang mewajibkan persetujuan untuk iklan yang dipersonalisasi, aplikasi akan menampilkan pesan persetujuan Google saat pertama kali Anda meluncurkannya. Anda juga dapat meninjau atau mengubah pilihan privasi iklan kapan saja dari Profil & Pengaturan di aplikasi. Di luar wilayah tersebut, pintu masuk pilihan privasi iklan tidak ditampilkan.",
        ],
      },
      {
        heading: "Kontak",
        body: [
          "Untuk pertanyaan privasi, permintaan penghapusan, atau penggunaan hak perlindungan data Anda, hubungi kami:",
          "",
          "Email: alam.aby.b@gmail.com",
          "",
          "Alamat pos (juga kontak Pasal 27 GDPR kami):",
          "Alam Aby Bashit",
          "Komplek Kamarasan Residence A3/2 Kelurahan Buahbatu Kecamatan Bojongsoang",
          "Bandung, 40287",
          "Indonesia",
        ],
      },
    ],
  },
};

export const termsOfService: LegalContent = {
  en: {
    title: "Terms of Service",
    effectiveDateLabel: "Effective date",
    effectiveDate: "2026-07-10",
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
          "The first time you use BagiStruk, the app will ask you to read and accept these Terms and the Privacy Policy. Your continued use of the app confirms that you have read, understood, and agreed to both documents.",
          "",
          "Minimum age. BagiStruk is not intended for children under 13 years of age (the threshold under the US Children's Online Privacy Protection Act, COPPA), or under the age required by your local law to consent to digital services (16 in most of the European Economic Area by default, 18 in Indonesia under the Civil Code, or younger if your country's law allows consent at a lower age with parental approval). By accepting these Terms, you confirm that you meet the minimum age requirement in your jurisdiction. If you do not, do not use the app.",
          "",
          "If you do not agree with these Terms, do not use the app. You can uninstall BagiStruk at any time to end your agreement with us.",
        ],
      },
      {
        heading: "3. Accounts",
        body: [
          "You may use some features with an anonymous session. You may also register or sign in using email/password or Google Sign-In. You are responsible for keeping your device and account access secure.",
          "",
          "Anonymous accounts are intended for temporary or lightweight use. Registered accounts allow data to persist across devices and sessions, depending on the authentication provider and backend availability.",
          "",
          "OCR scanning and selected features may be limited by credits or plan entitlements. Anonymous users receive a limited lifetime credit allowance, free registered users may receive a monthly credit allowance, and Plus users may receive higher limits and additional features such as longer history access, monthly insights, PDF/CSV export, per-bill currency override, transfer bank information in settlement messages, deleted-bill recovery, and an ad-free experience when ads are enabled. For Anonymous and Free users, a valid OCR result may consume credits based on the number of receipt photos attached to that scan. For Plus users, a valid OCR scan may continue to consume one credit even when multiple photos are attached for a long receipt. Eligible registered users may receive a one-time Plus trial. When the trial ends, access returns to the Free plan unless a paid Plus subscription is active. Unused monthly credits may expire at the end of the applicable period.",
          "",
          "Paid subscriptions and one-time OCR credit packs, when available, are processed through Google Play Billing on Android. Subscription access continues while Google Play reports the subscription as active. One-time OCR credit packs are added to your account after server-side purchase verification. Refunds, cancellations, renewal timing, grace periods, and payment issues may affect access or available credits according to Google Play policies and the app's server-side entitlement records.",
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
          "",
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
          "Anonymous accounts may be deleted after 30 days of inactivity. Registered Free accounts may receive an inactivity reminder after 6 months of inactivity. If there is no activity within 30 days after the reminder, the account and associated app data may be deleted. Registered accounts with an active Plus entitlement are excluded from inactivity cleanup while the entitlement remains active. When Plus entitlement ends, the inactivity window for cleanup is counted from the later of the user's last app activity and the latest Plus entitlement end time.",
          "",
          "Opening the app after receiving a reminder resets the pending inactivity deletion state.",
        ],
      },
      {
        heading: "8. Third-Party Services",
        body: [
          "BagiStruk depends on third-party services such as Supabase, Google Sign-In, OCR providers, Google Mobile Ads / AdMob if ads are enabled, Google Play Billing when purchases are available, and email providers for transactional reminders or operational alerts. Their availability, policies, and behavior may affect the app. We are not responsible for outages or changes made by third-party providers.",
        ],
      },
      {
        heading: "8a. Advertising And Consent",
        body: [
          "When ads are enabled, BagiStruk may show ads through Google Mobile Ads / AdMob. Ad personalization and related consent choices are handled as described in the Privacy Policy and, where required, through Google's User Messaging Platform (CMP).",
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
          "We may suspend or delete accounts or data when required by law, for security reasons, for abuse prevention, or according to the inactivity policy. You may delete your account from Profile & Settings in the app or request account deletion by contacting us.",
        ],
      },
      {
        heading: "12. Your Rights As A Consumer",
        body: [
          "Nothing in these Terms is intended to exclude, limit, or override rights that you have under mandatory law in your country of residence, including but not limited to:",
          "",
          "For users in the European Economic Area: the protections of the EU General Data Protection Regulation (GDPR), the ePrivacy Directive, the EU Consumer Rights Directive, and equivalent national laws.",
          "For users in Indonesia: the protections of UU No. 27/2022 on Personal Data Protection and UU No. 8/1999 on Consumer Protection.",
          "For users in the United States: applicable state consumer protection and privacy laws (e.g., CCPA/CPRA in California).",
          "",
          "If any provision of these Terms is found to be invalid or unenforceable in your jurisdiction, that provision will be limited or removed to the minimum extent necessary so that the remaining provisions remain in full force and effect.",
        ],
      },
      {
        heading: "13. Disclaimer",
        body: [
          'The app is provided "as is" and "as available". We do not guarantee that the app will be uninterrupted, error-free, or that OCR results will be accurate.',
        ],
      },
      {
        heading: "14. Limitation Of Liability",
        body: [
          "To the maximum extent permitted by law, we are not liable for indirect, incidental, special, consequential, or punitive damages, or for losses caused by incorrect OCR output, user input mistakes, service outages, data loss, or third-party services.",
        ],
      },
      {
        heading: "15. Changes To These Terms",
        body: [
          "We may update these Terms from time to time. Continued use of the app after changes means you accept the updated Terms.",
        ],
      },
      {
        heading: "16. Contact",
        body: [
          "Questions about these Terms, complaints, or requests to exercise your consumer rights:",
          "",
          "Email: alam.aby.b@gmail.com",
          "",
          "Postal address:",
          "Alam Aby Bashit",
          "Komplek Kamarasan Residence A3/2 Kelurahan Buahbatu Kecamatan Bojongsoang",
          "Bandung, 40287",
          "Indonesia",
        ],
      },
    ],
  },
  id: {
    title: "Syarat dan Ketentuan",
    effectiveDateLabel: "Tanggal berlaku",
    effectiveDate: "2026-07-10",
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
          "Saat pertama kali Anda menggunakan BagiStruk, aplikasi akan meminta Anda untuk membaca dan menyetujui Syarat ini dan Kebijakan Privasi. Penggunaan aplikasi yang berkelanjutan mengonfirmasi bahwa Anda telah membaca, memahami, dan menyetujui kedua dokumen.",
          "",
          "Batas usia minimum. BagiStruk tidak ditujukan untuk anak di bawah 13 tahun (batas minimum US Children's Online Privacy Protection Act, COPPA), atau di bawah usia yang diwajibkan hukum lokal Anda untuk menyetujui layanan digital (16 tahun di sebagian besar Wilayah Ekonomi Eropa secara default, 18 tahun di Indonesia menurut Kitab Undang-Undang Hukum Perdata, atau lebih muda bila hukum negara Anda mengizinkan persetujuan pada usia lebih muda dengan persetujuan orang tua). Dengan menyetujui Syarat ini, Anda menyatakan memenuhi batas usia minimum di yurisdiksi Anda. Jika tidak, jangan gunakan aplikasi.",
          "",
          "Jika Anda tidak setuju dengan Syarat ini, jangan gunakan aplikasi. Anda dapat menghapus instalasi BagiStruk kapan saja untuk mengakhiri perjanjian Anda dengan kami.",
        ],
      },
      {
        heading: "3. Akun",
        body: [
          "Sebagian fitur dapat digunakan dengan sesi anonim. Anda juga dapat mendaftar atau login menggunakan email/password atau Google Sign-In. Anda bertanggung jawab menjaga keamanan perangkat dan akses akun.",
          "",
          "Akun anonim ditujukan untuk penggunaan sementara atau ringan. Akun terdaftar memungkinkan data bertahan lintas perangkat dan sesi, tergantung penyedia autentikasi dan ketersediaan backend.",
          "",
          "Scan OCR dan fitur tertentu dapat dibatasi oleh credit atau entitlement plan. Pengguna anonim mendapat batas credit lifetime terbatas, pengguna terdaftar Free dapat mendapat credit bulanan, dan pengguna Plus dapat mendapat batas lebih tinggi serta fitur tambahan seperti akses History lebih panjang, insight bulanan, export PDF/CSV, penggantian currency per bill, info bank transfer di pesan settlement, pemulihan bill terhapus, dan pengalaman tanpa iklan saat iklan diaktifkan. Untuk pengguna Anonymous dan Free, hasil OCR valid dapat mengonsumsi credit sesuai jumlah foto struk yang dilampirkan pada scan tersebut. Untuk pengguna Plus, scan OCR valid dapat tetap mengonsumsi satu credit meskipun beberapa foto dilampirkan untuk struk panjang. Pengguna terdaftar yang memenuhi syarat dapat menerima trial Plus satu kali. Setelah trial berakhir, akses kembali ke plan Free kecuali subscription Plus berbayar aktif. Credit bulanan yang tidak digunakan dapat hangus pada akhir periode yang berlaku.",
          "",
          "Subscription berbayar dan paket credit OCR sekali beli, jika tersedia, diproses melalui Google Play Billing di Android. Akses subscription berlaku selama Google Play melaporkan subscription masih aktif. Paket credit OCR sekali beli ditambahkan ke akun setelah verifikasi pembelian sisi server. Refund, pembatalan, waktu renewal, grace period, dan masalah pembayaran dapat memengaruhi akses atau credit yang tersedia sesuai kebijakan Google Play dan catatan entitlement server-side aplikasi.",
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
          "",
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
          "Akun anonim dapat dihapus setelah 30 hari tidak aktif. Akun terdaftar Free dapat menerima reminder setelah 6 bulan tidak aktif. Jika tidak ada aktivitas dalam 30 hari setelah reminder, akun dan data aplikasi terkait dapat dihapus. Akun terdaftar dengan entitlement Plus aktif dikecualikan dari pembersihan akun tidak aktif selama entitlement tersebut masih aktif. Setelah entitlement Plus berakhir, jendela tidak aktif untuk cleanup dihitung dari waktu yang lebih baru antara aktivitas terakhir pengguna dan waktu entitlement Plus terakhir berakhir.",
          "",
          "Membuka aplikasi setelah menerima reminder akan mereset status penghapusan tidak aktif yang tertunda.",
        ],
      },
      {
        heading: "8. Layanan Pihak Ketiga",
        body: [
          "BagiStruk bergantung pada layanan pihak ketiga seperti Supabase, Google Sign-In, penyedia OCR, Google Mobile Ads / AdMob jika iklan diaktifkan, Google Play Billing saat pembelian tersedia, dan penyedia email untuk reminder transaksional atau alert operasional. Ketersediaan, kebijakan, dan perilaku layanan tersebut dapat memengaruhi aplikasi. Kami tidak bertanggung jawab atas gangguan atau perubahan dari penyedia pihak ketiga.",
        ],
      },
      {
        heading: "8a. Iklan Dan Persetujuan",
        body: [
          "Saat iklan diaktifkan, BagiStruk dapat menampilkan iklan melalui Google Mobile Ads / AdMob. Personalisasi iklan dan pilihan persetujuan terkait diatur sebagaimana dijelaskan dalam Kebijakan Privasi dan, bila diwajibkan, melalui Google User Messaging Platform (CMP).",
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
          "Kami dapat menangguhkan atau menghapus akun atau data jika diwajibkan hukum, untuk alasan keamanan, pencegahan penyalahgunaan, atau sesuai kebijakan akun tidak aktif. Anda dapat menghapus akun dari Profil & Pengaturan di aplikasi atau meminta penghapusan akun dengan menghubungi kami.",
        ],
      },
      {
        heading: "12. Hak Anda Sebagai Konsumen",
        body: [
          "Tidak ada dalam Syarat ini yang bertujuan untuk mengecualikan, membatasi, atau mengesampingkan hak yang Anda miliki berdasarkan hukum wajib di negara tempat tinggal Anda, termasuk namun tidak terbatas pada:",
          "",
          "Untuk pengguna di Wilayah Ekonomi Eropa: perlindungan dari EU General Data Protection Regulation (GDPR), ePrivacy Directive, EU Consumer Rights Directive, dan hukum nasional setara.",
          "Untuk pengguna di Indonesia: perlindungan dari UU No. 27/2022 tentang Pelindungan Data Pribadi dan UU No. 8/1999 tentang Perlindungan Konsumen.",
          "Untuk pengguna di Amerika Serikat: hukum perlindungan konsumen dan privasi negara bagian yang berlaku (misalnya CCPA/CPRA di California).",
          "",
          "Jika ada ketentuan dalam Syarat ini yang ditemukan tidak valid atau tidak dapat diterapkan di yurisdiksi Anda, ketentuan tersebut akan dibatasi atau dihapus seminimal mungkin sehingga ketentuan yang tersisa tetap berlaku penuh.",
        ],
      },
      {
        heading: "13. Penafian",
        body: [
          'Aplikasi disediakan "sebagaimana adanya" dan "sebagaimana tersedia". Kami tidak menjamin aplikasi selalu tersedia, bebas error, atau hasil OCR selalu akurat.',
        ],
      },
      {
        heading: "14. Batasan Tanggung Jawab",
        body: [
          "Sejauh diizinkan hukum, kami tidak bertanggung jawab atas kerugian tidak langsung, insidental, khusus, konsekuensial, atau punitif, atau kerugian akibat hasil OCR yang salah, kesalahan input pengguna, gangguan layanan, kehilangan data, atau layanan pihak ketiga.",
        ],
      },
      {
        heading: "15. Perubahan Syarat",
        body: [
          "Kami dapat memperbarui Syarat ini dari waktu ke waktu. Penggunaan aplikasi setelah perubahan berarti Anda menerima Syarat yang diperbarui.",
        ],
      },
      {
        heading: "16. Kontak",
        body: [
          "Pertanyaan tentang Syarat ini, keluhan, atau permintaan penggunaan hak konsumen Anda:",
          "",
          "Email: alam.aby.b@gmail.com",
          "",
          "Alamat pos:",
          "Alam Aby Bashit",
          "Komplek Kamarasan Residence A3/2 Kelurahan Buahbatu Kecamatan Bojongsoang",
          "Bandung, 40287",
          "Indonesia",
        ],
      },
    ],
  },
};
