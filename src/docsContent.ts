import type { Lang } from "./content";

export type DocsGroupId = "core" | "organize" | "plus" | "account" | "privacy";

export type DocSection = {
  heading?: string;
  body?: string[];
  bullets?: string[];
};

export type DocEntryText = {
  title: string;
  summary: string;
  intro: string;
  sections: DocSection[];
  screenshot?: string;
};

export type DocEntry = {
  slug: string;
  group: DocsGroupId;
  text: Record<Lang, DocEntryText>;
};

export const docsIndex: Record<
  Lang,
  { title: string; intro: string; backToHome: string; groupLabels: Record<DocsGroupId, string> }
> = {
  en: {
    title: "Feature documentation",
    intro:
      "Every BagiStruk feature in one place — from scanning a receipt to Plus power features. Each page matches the app screens.",
    backToHome: "Back to home",
    groupLabels: {
      core: "Core flow",
      organize: "Organize",
      plus: "Plus power",
      account: "Account & settings",
      privacy: "Privacy",
    },
  },
  id: {
    title: "Dokumentasi fitur",
    intro:
      "Semua fitur BagiStruk dalam satu tempat — dari scan struk sampai fitur Plus. Setiap halaman sesuai dengan layar di aplikasi.",
    backToHome: "Kembali ke beranda",
    groupLabels: {
      core: "Alur utama",
      organize: "Atur & cari",
      plus: "Fitur Plus",
      account: "Akun & pengaturan",
      privacy: "Privasi",
    },
  },
};

export const docs: DocEntry[] = [
  {
    slug: "scan-receipt",
    group: "core",
    text: {
      en: {
        title: "Scan receipt",
        summary: "Capture long receipts across multiple photos, from camera, gallery, or Android share.",
        intro:
          "Open the Scan tab, add photos, and let AI read the receipt. The app checks scan credits before processing.",
        sections: [
          {
            heading: "How to scan",
            bullets: [
              "Add photos from the camera or gallery.",
              "Long receipts can use multiple photos in one scan.",
              "Android users can share a receipt photo straight into BagiStruk (share-to-scan).",
              "Bright, straight photos give the best OCR accuracy.",
            ],
          },
          {
            heading: "Credits",
            bullets: [
              "Anonymous and Free scans use credits by photo count.",
              "Plus keeps long multi-photo receipts to 1 credit per valid scan.",
              "A scan only consumes credit when it produces a valid receipt result.",
            ],
          },
        ],
        screenshot: "/screenshots/scan-receipt.svg",
      },
      id: {
        title: "Scan struk",
        summary: "Tangkap struk panjang dalam beberapa foto, dari kamera, galeri, atau share Android.",
        intro:
          "Buka tab Scan, tambahkan foto, dan biarkan AI membaca struk. Aplikasi mengecek credit scan sebelum memproses.",
        sections: [
          {
            heading: "Cara scan",
            bullets: [
              "Tambahkan foto dari kamera atau galeri.",
              "Struk panjang bisa memakai beberapa foto dalam satu scan.",
              "Pengguna Android bisa share foto struk langsung ke BagiStruk (share-to-scan).",
              "Foto yang terang dan lurus memberi hasil OCR terbaik.",
            ],
          },
          {
            heading: "Credit",
            bullets: [
              "Scan Anonymous dan Free memakai credit sesuai jumlah foto.",
              "Plus tetap 1 credit per scan valid untuk struk panjang multi-foto.",
              "Scan hanya memakai credit jika menghasilkan struk yang valid.",
            ],
          },
        ],
        screenshot: "/screenshots/scan-receipt.svg",
      },
    },
  },
  {
    slug: "review-bill",
    group: "core",
    text: {
      en: {
        title: "Review bill",
        summary: "Check and correct merchant, date, items, tax, service, and total before saving.",
        intro:
          "Review is a required step before a bill is saved. Fix OCR mistakes here so the split is correct.",
        sections: [
          {
            heading: "What to check",
            bullets: [
              "Merchant name, receipt date, and currency.",
              "Item names, quantities (decimals allowed), and prices.",
              "Tax and service amounts, pre-filled from the receipt.",
              "Total compared against the printed receipt total.",
            ],
          },
          {
            heading: "Safety nets",
            bullets: [
              "A mismatch banner appears when the computed total differs from the receipt total.",
              "A suspect-thousands banner warns when a zero-decimal currency still shows fractions.",
              "Add items with Add item, remove with swipe.",
            ],
          },
        ],
        screenshot: "/screenshots/review-bill.svg",
      },
      id: {
        title: "Review tagihan",
        summary: "Cek dan koreksi merchant, tanggal, item, pajak, service, dan total sebelum disimpan.",
        intro:
          "Review adalah tahap wajib sebelum bill disimpan. Perbaiki hasil OCR di sini agar pembagian tepat.",
        sections: [
          {
            heading: "Yang perlu dicek",
            bullets: [
              "Nama merchant, tanggal struk, dan currency.",
              "Nama item, quantity (boleh desimal), dan harga.",
              "Pajak dan service, terisi otomatis dari struk.",
              "Total dibandingkan dengan total di struk.",
            ],
          },
          {
            heading: "Pengaman",
            bullets: [
              "Banner mismatch muncul saat total hitung berbeda dari total struk.",
              "Banner suspect-thousands muncul saat currency tanpa desimal masih menampilkan pecahan.",
              "Tambah item dengan Tambah item, hapus dengan swipe.",
            ],
          },
        ],
        screenshot: "/screenshots/review-bill.svg",
      },
    },
  },
  {
    slug: "split-bill",
    group: "core",
    text: {
      en: {
        title: "Split bill",
        summary: "Assign items to participants; tax and service split proportionally. Equal split in one tap.",
        intro:
          "Pick an active participant, then tap the items that belong to them until every item is assigned.",
        sections: [
          {
            heading: "Splitting",
            bullets: [
              "Add participants, then assign each item to the right people.",
              "Tax and service are distributed proportionally by subtotal share.",
              "Use Split equally (Bagi rata) for a one-tap even split.",
              "Items support shared assignment with weights.",
            ],
          },
        ],
        screenshot: "/screenshots/split-bill.svg",
      },
      id: {
        title: "Bagi tagihan",
        summary: "Tetapkan item ke peserta; pajak dan service dibagi proporsional. Bagi rata satu tap.",
        intro:
          "Pilih partisipan aktif, lalu tap item yang menjadi bagiannya sampai semua item terbagi.",
        sections: [
          {
            heading: "Pembagian",
            bullets: [
              "Tambahkan partisipan, lalu tetapkan tiap item ke orang yang tepat.",
              "Pajak dan service dibagi proporsional berdasarkan subtotal.",
              "Gunakan Bagi rata untuk split even satu tap.",
              "Item mendukung assignment bersama dengan bobot.",
            ],
          },
        ],
        screenshot: "/screenshots/split-bill.svg",
      },
    },
  },
  {
    slug: "settlement",
    group: "core",
    text: {
      en: {
        title: "Settlement",
        summary: "Track per-participant payment status; the bill auto-settles when everyone has paid.",
        intro:
          "The bill detail screen is the settlement loop: toggle who has paid and share each person's amount.",
        sections: [
          {
            heading: "Settling",
            bullets: [
              "Toggle per-participant paid status with optimistic UI.",
              "The bill flips to settled automatically once everyone has paid.",
              "Share per-participant amounts to WhatsApp.",
              "Bank transfer info can be appended to the message (Plus).",
            ],
          },
        ],
        screenshot: "/screenshots/settlement.svg",
      },
      id: {
        title: "Pelunasan",
        summary: "Pantau status bayar per peserta; bill otomatis lunas saat semua sudah membayar.",
        intro:
          "Layar detail bill adalah loop pelunasan: tandai siapa yang sudah bayar dan bagikan nominal tiap orang.",
        sections: [
          {
            heading: "Pelunasan",
            bullets: [
              "Toggle status bayar per peserta dengan optimistic UI.",
              "Bill otomatis menjadi lunas saat semua sudah membayar.",
              "Bagikan nominal tiap peserta ke WhatsApp.",
              "Info bank transfer bisa ditambahkan ke pesan (Plus).",
            ],
          },
        ],
        screenshot: "/screenshots/settlement.svg",
      },
    },
  },
  {
    slug: "manual-bill",
    group: "core",
    text: {
      en: {
        title: "Manual bill",
        summary: "Create a bill without a receipt photo — free, uses 0 scan credits.",
        intro:
          "No receipt? Start a manual bill from History or Scan and type items by hand. Saving never touches OCR credits.",
        sections: [
          {
            heading: "When to use it",
            bullets: [
              "Verbal bills, e-wallet transfers, or lost receipts.",
              "Entry from History (New manual) or the Scan screen.",
              "Low-confidence and mismatch banners are suppressed for manual bills.",
            ],
          },
        ],
        screenshot: "/screenshots/manual-bill.svg",
      },
      id: {
        title: "Bill manual",
        summary: "Buat bill tanpa foto struk — gratis, memakai 0 credit scan.",
        intro:
          "Tanpa struk? Buat bill manual dari History atau Scan lalu ketik item sendiri. Menyimpan tidak memakai credit OCR.",
        sections: [
          {
            heading: "Kapan dipakai",
            bullets: [
              "Tagihan lisan, transfer e-wallet, atau struk hilang.",
              "Masuk dari History (New manual) atau layar Scan.",
              "Banner low-confidence dan mismatch dimatikan untuk bill manual.",
            ],
          },
        ],
        screenshot: "/screenshots/manual-bill.svg",
      },
    },
  },
  {
    slug: "participants",
    group: "core",
    text: {
      en: {
        title: "Participants library",
        summary: "Re-add frequent friends fast with saved participants and contact import.",
        intro:
          "BagiStruk remembers people you split with. Duplicate names are rejected per bill; phones are normalized.",
        sections: [
          {
            heading: "Faster adds",
            bullets: [
              "Suggestion chips show saved participants (tap to quick-add).",
              "Import from the Android contact picker (no broad contacts permission).",
              "Names dedupe case-insensitively per bill.",
            ],
          },
        ],
        screenshot: "/screenshots/participants.svg",
      },
      id: {
        title: "Pustaka peserta",
        summary: "Tambah teman langganan dengan cepat via peserta tersimpan dan impor kontak.",
        intro:
          "BagiStruk mengingat orang yang sering patungan. Nama duplikat ditolak per bill; nomor dinormalisasi.",
        sections: [
          {
            heading: "Tambah lebih cepat",
            bullets: [
              "Chip saran menampilkan peserta tersimpan (tap untuk tambah cepat).",
              "Impor dari contact picker Android (tanpa izin kontak luas).",
              "Nama didedup case-insensitive per bill.",
            ],
          },
        ],
        screenshot: "/screenshots/participants.svg",
      },
    },
  },
  {
    slug: "reminders",
    group: "core",
    text: {
      en: {
        title: "Settlement reminders",
        summary: "Local T+3/T+7 nudges for unsettled bills. Opt-in, cancellable, no server push.",
        intro:
          "When a bill is saved with an outstanding balance, the app can remind you locally after 3 and 7 days.",
        sections: [
          {
            heading: "Behavior",
            bullets: [
              "Permission is asked contextually when you enable reminders, not at cold start.",
              "Reminders cancel automatically once the bill is settled.",
              "Tapping a reminder opens the bill detail screen.",
              "Best-effort local notifications: they may not fire if the OS kills the process.",
            ],
          },
        ],
        screenshot: "/screenshots/reminders.svg",
      },
      id: {
        title: "Pengingat pelunasan",
        summary: "Pengingat lokal T+3/T+7 untuk bill yang belum lunas. Opt-in, bisa dibatalkan, tanpa push server.",
        intro:
          "Saat bill disimpan dengan sisa outstanding, aplikasi bisa mengingatkan secara lokal setelah 3 dan 7 hari.",
        sections: [
          {
            heading: "Perilaku",
            bullets: [
              "Izin diminta kontekstual saat mengaktifkan reminder, bukan saat cold start.",
              "Reminder batal otomatis saat bill lunas.",
              "Tap reminder membuka layar detail bill.",
              "Notifikasi lokal best-effort: bisa tidak jalan bila proses dibunuh OS.",
            ],
          },
        ],
        screenshot: "/screenshots/reminders.svg",
      },
    },
  },
  {
    slug: "share-link",
    group: "plus",
    text: {
      en: {
        title: "Share link",
        summary: "Read-only bill link with expiry and revoke. Viewers need no account.",
        intro:
          "Copy a link from the bill detail screen and send it to anyone. The public page is read-only.",
        sections: [
          {
            heading: "Rules",
            bullets: [
              "Links expire and can be revoked manually.",
              "Free bills keep 1 active link; Plus can rotate links.",
              "The public view hides bank details and editing.",
              "Rate-limited to prevent abuse.",
            ],
          },
        ],
        screenshot: "/screenshots/share-link.svg",
      },
      id: {
        title: "Link berbagi",
        summary: "Link bill read-only dengan kedaluwarsa dan revoke. Penerima tanpa akun bisa melihat.",
        intro:
          "Salin link dari layar detail bill dan kirim ke siapa saja. Halaman publik bersifat read-only.",
        sections: [
          {
            heading: "Aturan",
            bullets: [
              "Link kedaluwarsa dan bisa di-revoke manual.",
              "Bill Free punya 1 link aktif; Plus bisa rotate link.",
              "Tampilan publik menyembunyikan info bank dan editing.",
              "Dibatasi rate-limit anti-abuse.",
            ],
          },
        ],
        screenshot: "/screenshots/share-link.svg",
      },
    },
  },
  {
    slug: "export",
    group: "plus",
    text: {
      en: {
        title: "Export PDF, CSV, XLSX",
        summary: "Export any bill on-device. XLSX with Item + Participant sheets is Plus.",
        intro:
          "Exports are generated on-device from the bill detail screen and shared via the system share sheet.",
        sections: [
          {
            heading: "Formats",
            bullets: [
              "PDF: summary, items, participants, and bank info.",
              "CSV: RFC4180-compatible line items.",
              "XLSX (Plus): Item and Participant sheets with numeric cells.",
              "File name is slugged from the bill title plus a short id.",
            ],
          },
        ],
        screenshot: "/screenshots/export.svg",
      },
      id: {
        title: "Export PDF, CSV, XLSX",
        summary: "Export bill di perangkat. XLSX dengan sheet Item + Peserta khusus Plus.",
        intro:
          "Export dibuat di perangkat dari layar detail bill dan dibagikan via system share sheet.",
        sections: [
          {
            heading: "Format",
            bullets: [
              "PDF: ringkasan, item, peserta, dan info bank.",
              "CSV: line item kompatibel RFC4180.",
              "XLSX (Plus): sheet Item dan Peserta dengan sel numerik.",
              "Nama file memakai slug judul bill plus id pendek.",
            ],
          },
        ],
        screenshot: "/screenshots/export.svg",
      },
    },
  },
  {
    slug: "history",
    group: "organize",
    text: {
      en: {
        title: "History",
        summary: "Saved bills with outstanding totals, filters, and per-plan windows (Free 30 / Plus 365 days).",
        intro:
          "History shows saved bills, outstanding totals, and settlement status with cursor pagination.",
        sections: [
          {
            heading: "Windows",
            bullets: [
              "Free shows the last 30 days; Plus shows up to the last 365 days.",
              "Anonymous history is locked — sign up to save and view bills.",
              "A Plus banner explains the window and links to Settings.",
            ],
          },
        ],
        screenshot: "/screenshots/history.svg",
      },
      id: {
        title: "History",
        summary: "Bill tersimpan dengan total outstanding, filter, dan jendela per plan (Free 30 / Plus 365 hari).",
        intro:
          "History menampilkan bill tersimpan, total outstanding, dan status lunas dengan cursor pagination.",
        sections: [
          {
            heading: "Jendela",
            bullets: [
              "Free melihat 30 hari terakhir; Plus sampai 365 hari terakhir.",
              "History Anonymous terkunci — daftar untuk menyimpan dan melihat bill.",
              "Banner Plus menjelaskan jendela dan mengarah ke Settings.",
            ],
          },
        ],
        screenshot: "/screenshots/history.svg",
      },
    },
  },
  {
    slug: "search-category",
    group: "organize",
    text: {
      en: {
        title: "Search, categories & tags",
        summary: "Find bills fast with server-side search, category picker, and Plus custom tags.",
        intro:
          "Filter History by text query, category, status, and currency. Categories work for Free; custom tags are Plus.",
        sections: [
          {
            heading: "Organizing",
            bullets: [
              "Categories: food, transport, groceries, shopping, other.",
              "Server-side search with 400ms debounce and stable pagination.",
              "Plus custom tags (up to 5) for flexible grouping.",
              "Monthly insight can break down spending by category.",
            ],
          },
        ],
        screenshot: "/screenshots/search-category.svg",
      },
      id: {
        title: "Search, kategori & tag",
        summary: "Temukan bill cepat dengan search server-side, picker kategori, dan tag kustom Plus.",
        intro:
          "Filter History berdasar query teks, kategori, status, dan currency. Kategori untuk Free; tag kustom khusus Plus.",
        sections: [
          {
            heading: "Pengaturan",
            bullets: [
              "Kategori: makan, transport, groceries, belanja, lain.",
              "Search server-side dengan debounce 400ms dan pagination stabil.",
              "Tag kustom Plus (maks 5) untuk grouping fleksibel.",
              "Insight bulanan bisa breakdown per kategori.",
            ],
          },
        ],
        screenshot: "/screenshots/search-category.svg",
      },
    },
  },
  {
    slug: "insight",
    group: "organize",
    text: {
      en: {
        title: "Monthly insight",
        summary: "Plus-only monthly totals, trends, outstanding, top merchants, and category breakdown.",
        intro:
          "The insight card on History summarizes the selected month and compares it with the previous month.",
        sections: [
          {
            heading: "Metrics",
            bullets: [
              "Total, average bill, bill count, and outstanding.",
              "Month-over-month trend and top merchants.",
              "By-category breakdown when categories are set.",
              "Empty months render zeros instead of errors.",
            ],
          },
        ],
        screenshot: "/screenshots/insight.svg",
      },
      id: {
        title: "Insight bulanan",
        summary: "Khusus Plus: total bulanan, tren, outstanding, merchant teratas, dan breakdown kategori.",
        intro:
          "Kartu insight di History merangkum bulan terpilih dan membandingkannya dengan bulan sebelumnya.",
        sections: [
          {
            heading: "Metrik",
            bullets: [
              "Total, rata-rata bill, jumlah bill, dan outstanding.",
              "Tren month-over-month dan merchant teratas.",
              "Breakdown per kategori bila kategori diisi.",
              "Bulan kosong menampilkan nol, bukan error.",
            ],
          },
        ],
        screenshot: "/screenshots/insight.svg",
      },
    },
  },
  {
    slug: "trash",
    group: "organize",
    text: {
      en: {
        title: "Deleted bills recovery",
        summary: "Soft-deleted bills can be restored within the per-plan window (Free 30 / Plus 90 days).",
        intro:
          "Deleted bills move to trash instead of disappearing. Restore them from Settings before they expire.",
        sections: [
          {
            heading: "Retention",
            bullets: [
              "Free trash keeps bills for 30 days; Plus for 90 days.",
              "Expiry is computed at delete time and never shortened on downgrade.",
              "The trash screen shows a countdown per bill.",
            ],
          },
        ],
        screenshot: "/screenshots/trash.svg",
      },
      id: {
        title: "Pemulihan bill terhapus",
        summary: "Bill yang di-soft-delete bisa dipulihkan dalam jendela per plan (Free 30 / Plus 90 hari).",
        intro:
          "Bill terhapus pindah ke trash, bukan hilang. Pulihkan dari Settings sebelum kedaluwarsa.",
        sections: [
          {
            heading: "Retensi",
            bullets: [
              "Trash Free menyimpan 30 hari; Plus 90 hari.",
              "Expiry dihitung saat hapus dan tidak dipendekkan saat downgrade.",
              "Layar trash menampilkan countdown per bill.",
            ],
          },
        ],
        screenshot: "/screenshots/trash.svg",
      },
    },
  },
  {
    slug: "templates",
    group: "plus",
    text: {
      en: {
        title: "Templates & duplicate",
        summary: "One-tap duplicate for recurring bills; save reusable templates (Free up to 5).",
        intro:
          "Recurring kos or arisan bill? Duplicate it or save it as a template, then instantiate next month.",
        sections: [
          {
            heading: "Reuse",
            bullets: [
              "Duplicate copies items, participants, weights, tax, service, and currency.",
              "Settlement state resets on duplicate (unpaid, unsettled).",
              "Templates sync across devices; Free keeps up to 5.",
              "Snapshots are versioned and validated on use.",
            ],
          },
        ],
        screenshot: "/screenshots/templates.svg",
      },
      id: {
        title: "Template & duplikat",
        summary: "Duplikat satu tap untuk bill rutin; simpan template reusable (Free maks 5).",
        intro:
          "Bill kos atau arisan rutin? Duplikat atau simpan sebagai template, lalu pakai lagi bulan depan.",
        sections: [
          {
            heading: "Pakai ulang",
            bullets: [
              "Duplikat menyalin item, peserta, bobot, pajak, service, dan currency.",
              "Status settlement di-reset saat duplikat (belum bayar, belum lunas).",
              "Template sinkron lintas perangkat; Free maks 5.",
              "Snapshot berversi dan divalidasi saat dipakai.",
            ],
          },
        ],
        screenshot: "/screenshots/templates.svg",
      },
    },
  },
  {
    slug: "plus-ocr",
    group: "plus",
    text: {
      en: {
        title: "Plus priority OCR",
        summary: "Plus scans retry once on busy providers and merge multi-receipt batches fairly.",
        intro:
          "When Gemini is rate-limited, Plus automatically tries the next provider once under the same request id.",
        sections: [
          {
            heading: "Priority",
            bullets: [
              "One automatic retry for Plus on retryable errors (429/5xx/408).",
              "Server-orchestrated so credits stay atomic — no double charge.",
              "Batch merge: combine 2–10 photos into one request with explicit cost estimate.",
              "Credit cost stays server-authoritative per photo for Free, flat for Plus.",
            ],
          },
        ],
        screenshot: "/screenshots/plus-ocr.svg",
      },
      id: {
        title: "OCR prioritas Plus",
        summary: "Scan Plus retry sekali saat provider sibuk dan gabung batch multi-struk secara adil.",
        intro:
          "Saat Gemini rate-limit, Plus otomatis mencoba provider berikutnya sekali dalam request id yang sama.",
        sections: [
          {
            heading: "Prioritas",
            bullets: [
              "Satu auto-retry untuk Plus pada error retryable (429/5xx/408).",
              "Diorkestrasi server agar credit atomik — tanpa double charge.",
              "Batch gabung: 2–10 foto jadi satu request dengan estimasi biaya eksplisit.",
              "Biaya credit tetap otoritatif server per foto untuk Free, flat untuk Plus.",
            ],
          },
        ],
        screenshot: "/screenshots/plus-ocr.svg",
      },
    },
  },
  {
    slug: "credits",
    group: "plus",
    text: {
      en: {
        title: "Credits & Plus plans",
        summary: "Anonymous 5 lifetime, Free 20/month, Plus 60/month — plus credit packs and a one-time trial.",
        intro:
          "Scan credits gate OCR only. Everything else — manual bills, splitting, settlement — is free.",
        sections: [
          {
            heading: "Plans",
            bullets: [
              "Anonymous: 5 lifetime OCR credits.",
              "Free: 20 credits per month.",
              "Plus: 60 credits per month, priority OCR, export, insights, templates.",
              "Credit packs (50/150/500) and a one-time Plus trial for eligible users.",
            ],
          },
        ],
        screenshot: "/screenshots/credits.svg",
      },
      id: {
        title: "Credit & paket Plus",
        summary: "Anonymous 5 lifetime, Free 20/bulan, Plus 60/bulan — plus paket credit dan trial satu kali.",
        intro:
          "Credit scan hanya untuk OCR. Sisanya — bill manual, split, settlement — gratis.",
        sections: [
          {
            heading: "Paket",
            bullets: [
              "Anonymous: 5 credit OCR lifetime.",
              "Free: 20 credit per bulan.",
              "Plus: 60 credit per bulan, OCR prioritas, export, insight, template.",
              "Paket credit (50/150/500) dan trial Plus satu kali untuk yang eligible.",
            ],
          },
        ],
        screenshot: "/screenshots/credits.svg",
      },
    },
  },
  {
    slug: "account",
    group: "account",
    text: {
      en: {
        title: "Account & sign-in",
        summary: "Start anonymous, promote to email or Google anytime without losing bills.",
        intro:
          "Sessions persist across restarts. Anonymous users get a generic label until they create a permanent account.",
        sections: [
          {
            heading: "Methods",
            bullets: [
              "Anonymous-first with lazy sign-in on first gated action.",
              "Email/password with link + 8-digit OTP verification.",
              "Google sign-in with post-login welcome.",
              "Password reset, logout, and in-app account deletion.",
            ],
          },
        ],
        screenshot: "/screenshots/account.svg",
      },
      id: {
        title: "Akun & masuk",
        summary: "Mulai anonim, upgrade ke email atau Google kapan saja tanpa kehilangan bill.",
        intro:
          "Sesi tersimpan lintas restart. Pengguna anonim memakai label generik sampai membuat akun permanen.",
        sections: [
          {
            heading: "Metode",
            bullets: [
              "Anonymous-first dengan lazy sign-in pada aksi gated pertama.",
              "Email/password dengan verifikasi link + OTP 8 digit.",
              "Google sign-in dengan welcome pasca-login.",
              "Reset password, logout, dan hapus akun dari aplikasi.",
            ],
          },
        ],
        screenshot: "/screenshots/account.svg",
      },
    },
  },
  {
    slug: "settings",
    group: "account",
    text: {
      en: {
        title: "Settings",
        summary: "Display name, default currency, language, theme, marketing opt-in, and ad privacy.",
        intro:
          "Settings is per-account and persists in the profile table. Anonymous users see a create-account CTA.",
        sections: [
          {
            heading: "Preferences",
            bullets: [
              "Default currency (per-bill override is Plus).",
              "Language ID/EN and theme light/dark/system.",
              "Transfer bank info, deleted bills, credits, and Plus access.",
              "Marketing email opt-in and ad-privacy entry point.",
            ],
          },
        ],
        screenshot: "/screenshots/settings.svg",
      },
      id: {
        title: "Pengaturan",
        summary: "Nama tampil, currency default, bahasa, tema, opt-in marketing, dan privasi iklan.",
        intro:
          "Settings per akun dan tersimpan di tabel profile. Pengguna anonim melihat CTA buat akun.",
        sections: [
          {
            heading: "Preferensi",
            bullets: [
              "Currency default (override per bill khusus Plus).",
              "Bahasa ID/EN dan tema terang/gelap/sistem.",
              "Info bank transfer, bill terhapus, credit, dan akses Plus.",
              "Opt-in email marketing dan pintu privasi iklan.",
            ],
          },
        ],
        screenshot: "/screenshots/settings.svg",
      },
    },
  },
  {
    slug: "onboarding-about",
    group: "account",
    text: {
      en: {
        title: "Onboarding & About",
        summary: "First-run walkthrough with preferences, plus an About page with version and links.",
        intro:
          "New users get a short tour plus language, currency, and theme setup. Replay it anytime from Settings.",
        sections: [
          {
            heading: "Inside",
            bullets: [
              "First-run slides plus an optional promo slide.",
              "About page shows version, author, and website/GitHub/donation links.",
              "In-app Privacy Policy and Terms screens.",
              "Legal-acceptance gate tracks ToS/PP versions.",
            ],
          },
        ],
        screenshot: "/screenshots/onboarding.svg",
      },
      id: {
        title: "Onboarding & Tentang",
        summary: "Tur awal dengan preferensi, plus halaman Tentang berisi versi dan tautan.",
        intro:
          "Pengguna baru mendapat tur singkat plus setup bahasa, currency, dan tema. Bisa diulang dari Settings.",
        sections: [
          {
            heading: "Isi",
            bullets: [
              "Slide awal plus slide promo opsional.",
              "Halaman Tentang menampilkan versi, author, dan tautan website/GitHub/donasi.",
              "Layar Privacy Policy dan Terms di aplikasi.",
              "Gate legal-acceptance melacak versi ToS/PP.",
            ],
          },
        ],
        screenshot: "/screenshots/onboarding.svg",
      },
    },
  },
  {
    slug: "ads-consent",
    group: "privacy",
    text: {
      en: {
        title: "Ads & consent",
        summary: "Feature-flagged AdMob banners with Google UMP consent in regulated regions.",
        intro:
          "Ads are off unless enabled. Where the law requires it, a Google-certified consent message appears first.",
        sections: [
          {
            heading: "Controls",
            bullets: [
              "Banner ads on scan/history, never inside the split flow.",
              "UMP + IAB TCF v2.3 consent in EEA/UK/CH.",
              "Review or change ad choices from Profile & Settings.",
              "Non-personalized ads where consent is declined.",
            ],
          },
        ],
        screenshot: "/screenshots/ads-consent.svg",
      },
      id: {
        title: "Iklan & consent",
        summary: "Banner AdMob ber-flag dengan consent Google UMP di wilayah regulasi.",
        intro:
          "Iklan mati kecuali diaktifkan. Di wilayah yang mewajibkan, pesan consent tersertifikasi Google muncul dulu.",
        sections: [
          {
            heading: "Kontrol",
            bullets: [
              "Banner di scan/history, tidak pernah di alur split.",
              "Consent UMP + IAB TCF v2.3 di EEA/UK/CH.",
              "Ubah pilihan iklan dari Profil & Pengaturan.",
              "Iklan non-personalized bila consent ditolak.",
            ],
          },
        ],
        screenshot: "/screenshots/ads-consent.svg",
      },
    },
  },
];

export function findDoc(slug: string | null | undefined): DocEntry | undefined {
  if (!slug) return undefined;
  return docs.find((d) => d.slug === slug);
}
