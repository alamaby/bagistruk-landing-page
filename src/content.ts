export type Lang = "en" | "id";

export const meta: Record<Lang, { title: string; description: string }> = {
  en: {
    title: "BagiStruk - Split bills from receipt photos",
    description:
      "BagiStruk helps you scan receipt photos, review extracted bill items, split costs with friends, and track settlement.",
  },
  id: {
    title: "BagiStruk - Bagi tagihan dari foto struk",
    description:
      "BagiStruk membantu kamu scan foto struk, mengecek hasil OCR, membagi tagihan dengan teman, dan memantau pembayaran.",
  },
};

export const content = {
  en: {
    nav: {
      workflow: "How it works",
      features: "Features",
      guide: "User guide",
      screenshots: "Screenshots",
      faq: "FAQ",
      cta: "Join waitlist",
    },
    hero: {
      badge: "Preparing for Google Play internal testing.",
      title: "BagiStruk",
      tagline: "Split bills from receipt photos, without rebuilding the receipt by hand.",
      supporting:
        "Scan receipts, review the OCR result, and split the bill with friends in a few steps.",
      primaryCta: "Join the waitlist",
      secondaryCta: "See how it works",
      valueProps: [
        "No need to type every item by hand.",
        "Review and correct OCR results before saving.",
        "Split tax and service proportionally.",
        "Track who has paid.",
      ],
    },
    workflow: {
      heading: "How BagiStruk works",
      subheading: "Four simple steps from a receipt photo to settled payments.",
      steps: [
        {
          title: "Take a receipt photo",
          desc: "Snap or pick photos of your receipt — even multiple pages.",
        },
        {
          title: "Review the OCR result",
          desc: "Check and correct the extracted items before saving.",
        },
        {
          title: "Choose participants",
          desc: "Add the people who shared the bill.",
        },
        {
          title: "Split items & track payments",
          desc: "Assign items, split tax and service, and see who has paid.",
        },
      ],
    },
    features: {
      heading: "Everything you need to split a bill",
      items: [
        { title: "Multi-photo receipt OCR", desc: "Capture long receipts across multiple photos." },
        { title: "Editable OCR results", desc: "Fix item names and prices before saving." },
        { title: "Item-level assignment", desc: "Assign each item to the right participants." },
        { title: "Proportional tax & service", desc: "Tax and service are split fairly per item." },
        { title: "Settlement tracking", desc: "Keep track of who has paid and who hasn't." },
        { title: "Anonymous-first", desc: "Start without an account, upgrade anytime to keep history." },
        { title: "Bilingual UI", desc: "Use BagiStruk in English or Bahasa Indonesia." },
      ],
    },
    guide: {
      heading: "User guide",
      subheading:
        "A practical walkthrough from scanning a receipt to closing out payments.",
      steps: [
        {
          title: "Scan receipts",
          desc: "Add photos from the camera or gallery. Long receipts can use multiple photos, and scan credits are checked before processing.",
        },
        {
          title: "Review before saving",
          desc: "Check merchant, date, currency, items, tax, service, and total. Fix OCR mistakes before the bill is saved.",
        },
        {
          title: "Split with participants",
          desc: "Add participants, choose an active participant, then tap the items that belong to them until every item is assigned.",
        },
        {
          title: "Settle and share",
          desc: "Share each participant's amount, mark payments as paid, and let the bill become settled automatically when everyone has paid.",
        },
      ],
      secondary: [
        "History shows saved bills, outstanding totals, and settlement status. Free accounts can view the last 7 days; Plus can view the last 90 days.",
        "Settings manages scan credits, currency, language, theme, account actions, Plus access, bank transfer info, and deleted bill recovery.",
        "Anonymous users get 5 lifetime OCR credits, Free users get 20 credits per month, and Plus users get 60 credits per month plus export and insight features. Anonymous and Free multi-photo scans use credits by photo count; Plus keeps long receipts to 1 credit per valid scan.",
      ],
      tipsHeading: "Scan accuracy tips",
      tips: [
        "Use bright, clear photos and avoid shadows over totals or item lists.",
        "Capture multiple photos for long receipts.",
        "Always review every number before tapping save.",
      ],
    },
    screenshots: {
      heading: "See it in action",
      subheading: "A quick look at the BagiStruk experience.",
      captions: ["Scan receipt", "Review extracted bill", "Assign items to participants", "Track settlement"],
    },
    trust: {
      heading: "Built with your privacy in mind",
      note: "BagiStruk processes receipt photos to recognize bill items. You should still review OCR results before saving or sharing.",
      points: [
        "Receipt photos are used to process OCR and extract bill items.",
        "OCR API keys are stored on the server, not in the app.",
        "You can request account and data deletion per our privacy policy.",
        "OCR processing may use third-party AI providers such as Google Gemini, OpenRouter, and Nvidia NIM.",
      ],
    },
    waitlist: {
      heading: "Be the first to try BagiStruk",
      subheading: "Join the waitlist and we'll let you know when testing access opens.",
      emailLabel: "Email address",
      emailPlaceholder: "you@example.com",
      updates: "Send me occasional product updates.",
      submit: "Join the waitlist",
      submitting: "Joining…",
      success: "You're on the list! We'll be in touch soon.",
      errorEmail: "Please enter a valid email address.",
      errorGeneric: "Something went wrong. Please try again.",
    },
    faq: {
      heading: "Frequently asked questions",
      items: [
        {
          q: "Is the OCR result always accurate?",
          a: "Not always — OCR can make mistakes. That's why you can review and correct items before saving or sharing.",
        },
        {
          q: "Can I use it without an account?",
          a: "Some flows can start anonymously and you get 5 lifetime OCR credits. Creating a permanent account keeps your history across devices.",
        },
        {
          q: "What data is processed?",
          a: "Receipt photos, bill items, participant names, and account data where relevant. For the full list and how we use each item, see our Privacy Policy.",
        },
        {
          q: "When will it be on Google Play?",
          a: "We're currently preparing for internal testing. We'll update this when the release state changes.",
        },
      ],
    },
    footer: {
      desc: "Split bills from receipt photos, without rebuilding the receipt by hand.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      github: "GitHub",
      availableOn: "Available on",
      googlePlay: "Google Play",
      appStore: "App Store",
      comingSoon: "coming soon",
      contact: "Contact",
      rights: "All rights reserved.",
    },
    langLabel: "Language",
  },
  id: {
    nav: {
      workflow: "Cara kerja",
      features: "Fitur",
      guide: "Panduan",
      screenshots: "Screenshot",
      faq: "FAQ",
      cta: "Gabung waitlist",
    },
    hero: {
      badge: "Sedang disiapkan untuk Google Play internal testing.",
      title: "BagiStruk",
      tagline: "Bagi tagihan dari foto struk, tanpa mengetik ulang semuanya.",
      supporting:
        "Scan struk, cek hasil OCR, lalu bagi tagihan ke teman dalam beberapa langkah.",
      primaryCta: "Gabung waitlist",
      secondaryCta: "Lihat cara kerja",
      valueProps: [
        "Tidak perlu mengetik ulang semua item.",
        "Tetap bisa koreksi hasil OCR sebelum disimpan.",
        "Pajak dan service dibagi proporsional.",
        "Pantau siapa yang sudah bayar.",
      ],
    },
    workflow: {
      heading: "Cara kerja BagiStruk",
      subheading: "Empat langkah sederhana dari foto struk sampai pembayaran lunas.",
      steps: [
        {
          title: "Ambil foto struk",
          desc: "Foto atau pilih gambar struk — bahkan beberapa halaman sekaligus.",
        },
        {
          title: "Review hasil OCR",
          desc: "Cek dan koreksi item yang terbaca sebelum disimpan.",
        },
        {
          title: "Tentukan peserta",
          desc: "Tambahkan orang-orang yang ikut patungan.",
        },
        {
          title: "Bagi item & pantau pembayaran",
          desc: "Atur item, bagi pajak dan service, lihat siapa yang sudah bayar.",
        },
      ],
    },
    features: {
      heading: "Semua yang kamu butuhkan untuk bagi tagihan",
      items: [
        { title: "OCR struk multi-foto", desc: "Tangkap struk panjang dalam beberapa foto." },
        { title: "Hasil OCR bisa diedit", desc: "Perbaiki nama item dan harga sebelum disimpan." },
        { title: "Penugasan per item", desc: "Tetapkan tiap item ke peserta yang tepat." },
        { title: "Pajak & service proporsional", desc: "Pajak dan service dibagi adil per item." },
        { title: "Pantau pelunasan", desc: "Lacak siapa yang sudah dan belum bayar." },
        { title: "Bisa tanpa akun", desc: "Mulai tanpa akun, buat akun kapan saja untuk simpan riwayat." },
        { title: "UI dwibahasa", desc: "Gunakan BagiStruk dalam Bahasa Indonesia atau Inggris." },
      ],
    },
    guide: {
      heading: "Panduan pengguna",
      subheading:
        "Ringkasan praktis dari scan struk sampai tagihan selesai dibayar.",
      steps: [
        {
          title: "Scan struk",
          desc: "Tambahkan foto dari kamera atau galeri. Struk panjang bisa memakai beberapa foto, dan credit scan dicek sebelum diproses.",
        },
        {
          title: "Review sebelum simpan",
          desc: "Cek merchant, tanggal, currency, item, pajak, service, dan total. Perbaiki hasil OCR sebelum bill disimpan.",
        },
        {
          title: "Bagi ke partisipan",
          desc: "Tambahkan partisipan, pilih partisipan aktif, lalu tap item yang menjadi bagiannya sampai semua item terbagi.",
        },
        {
          title: "Lunasi dan bagikan",
          desc: "Bagikan nominal tiap partisipan, tandai pembayaran, dan bill otomatis lunas ketika semua partisipan sudah membayar.",
        },
      ],
      secondary: [
        "History menampilkan bill tersimpan, total outstanding, dan status lunas. Akun Free melihat 7 hari terakhir; Plus melihat 90 hari terakhir.",
        "Settings mengatur credit scan, currency, bahasa, tema, akun, akses Plus, info bank transfer, dan pemulihan bill terhapus.",
        "Pengguna Anonymous mendapat 5 credit OCR lifetime, Free mendapat 20 credit per bulan, dan Plus mendapat 60 credit per bulan plus fitur export dan insight. Scan multi-foto Anonymous dan Free memakai credit sesuai jumlah foto; Plus tetap 1 credit per scan valid untuk struk panjang.",
      ],
      tipsHeading: "Tips scan lebih akurat",
      tips: [
        "Gunakan foto terang dan jelas, tanpa bayangan di area total atau daftar item.",
        "Ambil beberapa foto untuk struk panjang.",
        "Selalu cek semua angka sebelum menekan simpan.",
      ],
    },
    screenshots: {
      heading: "Lihat langsung",
      subheading: "Sekilas pengalaman menggunakan BagiStruk.",
      captions: ["Scan struk", "Review tagihan", "Bagi item ke peserta", "Pantau pelunasan"],
    },
    trust: {
      heading: "Dibangun dengan menjaga privasimu",
      note: "BagiStruk memproses foto struk untuk mengenali item tagihan. Hasil OCR tetap perlu kamu cek sebelum disimpan atau dibagikan.",
      points: [
        "Foto struk dipakai untuk memproses OCR dan mengekstrak item tagihan.",
        "API key OCR disimpan di server, bukan di aplikasi.",
        "Kamu bisa meminta penghapusan akun dan data sesuai kebijakan privasi.",
        "Pemrosesan OCR dapat menggunakan penyedia AI pihak ketiga seperti Google Gemini, OpenRouter, dan Nvidia NIM.",
      ],
    },
    waitlist: {
      heading: "Jadi yang pertama mencoba BagiStruk",
      subheading: "Gabung waitlist dan kami kabari saat akses testing dibuka.",
      emailLabel: "Alamat email",
      emailPlaceholder: "kamu@contoh.com",
      updates: "Kirimi saya update produk sesekali.",
      submit: "Gabung waitlist",
      submitting: "Memproses…",
      success: "Kamu sudah terdaftar! Kami akan segera menghubungi.",
      errorEmail: "Masukkan alamat email yang valid.",
      errorGeneric: "Terjadi kesalahan. Silakan coba lagi.",
    },
    faq: {
      heading: "Pertanyaan yang sering diajukan",
      items: [
        {
          q: "Apakah hasil OCR selalu akurat?",
          a: "Tidak selalu — OCR bisa keliru. Karena itu kamu bisa review dan koreksi item sebelum disimpan atau dibagikan.",
        },
        {
          q: "Apakah bisa dipakai tanpa akun?",
          a: "Beberapa alur bisa dimulai secara anonim dan kamu mendapat 5 credit OCR lifetime. Membuat akun permanen membuat riwayatmu tetap ada lintas perangkat.",
        },
        {
          q: "Data apa yang diproses?",
          a: "Foto struk, item tagihan, nama peserta, dan data akun bila relevan. Untuk daftar lengkap dan bagaimana kami menggunakan tiap item, lihat Kebijakan Privasi kami.",
        },
        {
          q: "Kapan tersedia di Google Play?",
          a: "Saat ini sedang disiapkan untuk internal testing. Kami akan memperbarui ini saat status rilis berubah.",
        },
      ],
    },
    footer: {
      desc: "Bagi tagihan dari foto struk, tanpa mengetik ulang semuanya.",
      privacy: "Kebijakan Privasi",
      terms: "Syarat & Ketentuan",
      github: "GitHub",
      availableOn: "Tersedia di",
      googlePlay: "Google Play",
      appStore: "App Store",
      comingSoon: "segera",
      contact: "Kontak",
      rights: "Hak cipta dilindungi.",
    },
    langLabel: "Bahasa",
  },
} as const;
