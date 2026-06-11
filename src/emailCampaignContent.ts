import type { Lang } from "./content";

export type EmailCampaignSlug =
  | "welcome-day-1"
  | "day-7-use-cases"
  | "low-credit"
  | "first-settlement"
  | "plus-feature-education"
  | "monthly-plus-recap"
  | "plus-ending-soon"
  | "former-plus-winback"
  | "dormant-free-reactivation";

type EmailCampaignText = {
  subject: string;
  preheader: string;
  audience: string;
  heading: string;
  intro: string;
  sections: Array<{
    heading?: string;
    body?: string[];
    bullets?: string[];
  }>;
  primaryCta: { label: string; target: string };
  secondaryCta?: { label: string; target: string };
  footerNote: string;
};

export type EmailCampaign = {
  slug: EmailCampaignSlug;
  campaignKey: string;
  stepKey: string;
  text: Record<Lang, EmailCampaignText>;
};

export const emailCampaigns: EmailCampaign[] = [
  {
    slug: "welcome-day-1",
    campaignKey: "free_onboarding",
    stepKey: "welcome_day1",
    text: {
      en: {
        subject: "Welcome to BagiStruk - start with your first receipt",
        preheader: "A quick guide to scan, review, split, and settle your first bill.",
        audience: "New Free users",
        heading: "Start your first split in a few steps",
        intro:
          "Welcome to BagiStruk. This web version mirrors the onboarding email in case your email app did not render it cleanly.",
        sections: [
          {
            heading: "Quick start",
            bullets: [
              "Open the Scan tab.",
              "Add receipt photos from the camera or gallery.",
              "Review the OCR result before saving.",
              "Add friends and assign items based on what each person ordered.",
              "Mark who has paid once settlement is done.",
            ],
          },
          {
            body: [
              "BagiStruk works best when you review the extracted receipt before saving. OCR can help with the typing, but you stay in control of the final bill.",
            ],
          },
        ],
        primaryCta: { label: "Read the BagiStruk guide", target: "/#guide" },
        secondaryCta: { label: "See how it works", target: "/#workflow" },
        footerNote:
          "You can manage marketing email preferences from the app Settings when email campaigns are enabled.",
      },
      id: {
        subject: "Selamat datang di BagiStruk - mulai dari struk pertama",
        preheader: "Panduan cepat untuk scan, review, split, dan settlement bill pertama.",
        audience: "Pengguna Free baru",
        heading: "Mulai bagi tagihan pertama dalam beberapa langkah",
        intro:
          "Selamat datang di BagiStruk. Versi web ini mencerminkan isi email onboarding jika aplikasi email kamu tidak merendernya dengan rapi.",
        sections: [
          {
            heading: "Mulai cepat",
            bullets: [
              "Buka tab Scan.",
              "Tambahkan foto struk dari kamera atau galeri.",
              "Review hasil OCR sebelum disimpan.",
              "Tambahkan teman dan pilih item sesuai pesanan masing-masing.",
              "Tandai siapa yang sudah membayar setelah settlement selesai.",
            ],
          },
          {
            body: [
              "BagiStruk paling nyaman dipakai ketika kamu tetap mengecek hasil struk sebelum menyimpan. OCR membantu mengurangi ketikan, tapi data akhir tetap kamu yang kendalikan.",
            ],
          },
        ],
        primaryCta: { label: "Baca panduan BagiStruk", target: "/id#guide" },
        secondaryCta: { label: "Lihat cara kerja", target: "/id#workflow" },
        footerNote:
          "Kamu bisa mengatur preferensi email marketing dari Settings aplikasi saat campaign email diaktifkan.",
      },
    },
  },
  {
    slug: "day-7-use-cases",
    campaignKey: "free_onboarding",
    stepKey: "day7_use_cases",
    text: {
      en: {
        subject: "5 everyday moments that are easier with BagiStruk",
        preheader: "Lunch, cafe bills, delivery food, trips, and small events.",
        audience: "Activated Free users",
        heading: "Use BagiStruk when equal split is not enough",
        intro:
          "Some bills are easy to split evenly. BagiStruk is made for the others: mixed orders, tax, service charge, and people paying at different times.",
        sections: [
          {
            heading: "Good moments to use it",
            bullets: [
              "Office lunch where everyone orders different items.",
              "Cafe bills with tax and service charge.",
              "Delivery food with shared and individual items.",
              "Family trips where one person pays first.",
              "Small events where snacks or supplies are split by item.",
            ],
          },
          {
            body: [
              "Free users can try monthly scan credits. Plus can help when you need longer history, PDF/CSV export, transfer bank info in settlement messages, and an ad-free experience when ads are enabled.",
            ],
          },
        ],
        primaryCta: { label: "Review the user guide", target: "/#guide" },
        secondaryCta: { label: "See features", target: "/#features" },
        footerNote: "This page avoids personal receipt details and only shows generic campaign content.",
      },
      id: {
        subject: "5 situasi sehari-hari yang cocok dibagi dengan BagiStruk",
        preheader: "Makan siang, kafe, delivery food, liburan, dan acara kecil.",
        audience: "Pengguna Free aktif",
        heading: "Pakai BagiStruk saat bagi rata saja tidak cukup",
        intro:
          "Ada tagihan yang mudah dibagi rata. BagiStruk dibuat untuk sisanya: pesanan campur, pajak, service, dan pembayaran yang selesai bertahap.",
        sections: [
          {
            heading: "Contoh situasi",
            bullets: [
              "Makan siang kantor saat tiap orang pesan menu berbeda.",
              "Tagihan kafe dengan pajak dan service charge.",
              "Delivery food dengan item bersama dan item pribadi.",
              "Liburan keluarga saat satu orang membayar dulu.",
              "Acara kecil ketika snack atau perlengkapan dibagi per item.",
            ],
          },
          {
            body: [
              "Pengguna Free bisa mencoba credit scan bulanan. Plus membantu saat kamu butuh history lebih panjang, export PDF/CSV, info bank di pesan settlement, dan pengalaman tanpa iklan saat iklan aktif.",
            ],
          },
        ],
        primaryCta: { label: "Buka panduan pengguna", target: "/id#guide" },
        secondaryCta: { label: "Lihat fitur", target: "/id#features" },
        footerNote: "Halaman ini tidak memuat detail struk personal dan hanya menampilkan isi campaign umum.",
      },
    },
  },
  {
    slug: "low-credit",
    campaignKey: "plus_conversion",
    stepKey: "low_credit",
    text: {
      en: {
        subject: "Your scan credits are running low",
        preheader: "More monthly scans are available with Plus or credit packs when available.",
        audience: "Free users with low scan credit",
        heading: "Need more scans this month?",
        intro:
          "If you split bills often, scan credits can run out before the month ends. Here are the options to keep going.",
        sections: [
          {
            heading: "Your options",
            bullets: [
              "Free includes monthly scan credits for light usage.",
              "Plus increases the monthly allowance and unlocks extra workflow features.",
              "Credit packs, when available, are useful if you need one-time extra scans without a subscription.",
            ],
          },
          {
            heading: "Plus also unlocks",
            bullets: [
              "Ad-free experience when ads are enabled.",
              "Longer bill history access.",
              "PDF/CSV export, monthly insights, bank info in settlement messages, and deleted bill recovery.",
            ],
          },
        ],
        primaryCta: { label: "Open billing in Settings", target: "/#features" },
        footerNote:
          "Billing availability depends on Google Play setup and the app version installed on your device.",
      },
      id: {
        subject: "Credit scan kamu hampir habis",
        preheader: "Scan bulanan lebih banyak tersedia lewat Plus atau paket credit saat tersedia.",
        audience: "Pengguna Free dengan credit scan rendah",
        heading: "Butuh scan lebih banyak bulan ini?",
        intro:
          "Kalau kamu sering membagi tagihan, credit scan bisa habis sebelum akhir bulan. Ini opsi agar tetap bisa lanjut.",
        sections: [
          {
            heading: "Pilihan kamu",
            bullets: [
              "Free punya credit scan bulanan untuk pemakaian ringan.",
              "Plus memberi allowance bulanan lebih besar dan membuka fitur workflow tambahan.",
              "Paket credit, jika tersedia, cocok untuk tambahan scan sekali beli tanpa subscription.",
            ],
          },
          {
            heading: "Plus juga membuka",
            bullets: [
              "Pengalaman tanpa iklan saat iklan aktif.",
              "Akses history lebih panjang.",
              "Export PDF/CSV, insight bulanan, info bank di pesan settlement, dan pemulihan bill terhapus.",
            ],
          },
        ],
        primaryCta: { label: "Buka billing di Settings", target: "/id#features" },
        footerNote:
          "Ketersediaan billing bergantung pada setup Google Play dan versi aplikasi yang terpasang di perangkat kamu.",
      },
    },
  },
  {
    slug: "first-settlement",
    campaignKey: "plus_conversion",
    stepKey: "first_settlement_d1",
    text: {
      en: {
        subject: "Your first bill is settled - make the next one easier",
        preheader: "A few Plus features can make repeated bill splitting smoother.",
        audience: "Free users after first successful settlement",
        heading: "Nice work closing out your first bill",
        intro:
          "Once a bill is settled, the next useful step is making repeated split-bill workflows faster and easier to archive.",
        sections: [
          {
            heading: "Helpful Plus features for next time",
            bullets: [
              "Save transfer bank info so settlement messages are more complete.",
              "Export PDF or CSV for your records.",
              "Keep access to a longer bill history window.",
              "Restore accidentally deleted bills within the recovery window.",
            ],
          },
        ],
        primaryCta: { label: "Explore Plus features", target: "/#features" },
        secondaryCta: { label: "Read the guide", target: "/#guide" },
        footerNote: "This web version does not include personal bill or participant details.",
      },
      id: {
        subject: "Bill pertama kamu selesai - bikin bill berikutnya lebih praktis",
        preheader: "Beberapa fitur Plus bisa membuat split bill berulang terasa lebih rapi.",
        audience: "Pengguna Free setelah settlement pertama",
        heading: "Mantap, bill pertama sudah selesai",
        intro:
          "Setelah satu bill lunas, langkah berikutnya adalah membuat workflow split bill berikutnya lebih cepat dan mudah diarsipkan.",
        sections: [
          {
            heading: "Fitur Plus yang membantu untuk bill berikutnya",
            bullets: [
              "Simpan info bank transfer agar pesan settlement lebih lengkap.",
              "Export PDF atau CSV untuk arsip.",
              "Akses history bill dengan jendela lebih panjang.",
              "Pulihkan bill yang tidak sengaja terhapus selama masa recovery.",
            ],
          },
        ],
        primaryCta: { label: "Lihat fitur Plus", target: "/id#features" },
        secondaryCta: { label: "Baca panduan", target: "/id#guide" },
        footerNote: "Versi web ini tidak memuat detail bill atau partisipan personal.",
      },
    },
  },
  {
    slug: "plus-feature-education",
    campaignKey: "plus_retention",
    stepKey: "feature_education_d2",
    text: {
      en: {
        subject: "Your Plus is active - try these features first",
        preheader: "Scan credits, no ads, longer history, export, bank info, and recovery.",
        audience: "Active Plus users",
        heading: "Make the most of BagiStruk Plus",
        intro:
          "Plus is most useful when you activate the workflow features that save time after the receipt has been scanned.",
        sections: [
          {
            heading: "Try these first",
            bullets: [
              "Use the higher monthly scan allowance for frequent split bills.",
              "Check longer History access and monthly insights.",
              "Export bill details as PDF or CSV.",
              "Add transfer bank info for settlement messages.",
              "Use Deleted bills recovery if you remove a bill by mistake.",
            ],
          },
        ],
        primaryCta: { label: "Open the guide", target: "/#guide" },
        secondaryCta: { label: "See screenshots", target: "/#screenshots" },
        footerNote: "Feature availability can depend on your app version and active entitlement.",
      },
      id: {
        subject: "Plus kamu aktif - coba fitur ini dulu",
        preheader: "Credit scan, tanpa iklan, history lebih panjang, export, info bank, dan recovery.",
        audience: "Pengguna Plus aktif",
        heading: "Maksimalkan BagiStruk Plus",
        intro:
          "Plus paling terasa manfaatnya saat fitur workflow setelah scan ikut dipakai untuk menghemat waktu.",
        sections: [
          {
            heading: "Coba fitur ini dulu",
            bullets: [
              "Gunakan allowance scan bulanan yang lebih besar untuk split bill rutin.",
              "Cek akses History lebih panjang dan insight bulanan.",
              "Export detail bill sebagai PDF atau CSV.",
              "Tambahkan info bank transfer untuk pesan settlement.",
              "Gunakan recovery Bill terhapus jika salah menghapus bill.",
            ],
          },
        ],
        primaryCta: { label: "Buka panduan", target: "/id#guide" },
        secondaryCta: { label: "Lihat screenshot", target: "/id#screenshots" },
        footerNote: "Ketersediaan fitur dapat bergantung pada versi aplikasi dan entitlement aktif.",
      },
    },
  },
  {
    slug: "monthly-plus-recap",
    campaignKey: "plus_retention",
    stepKey: "monthly_recap",
    text: {
      en: {
        subject: "Your BagiStruk Plus recap this month",
        preheader: "A safe web version of the monthly recap email.",
        audience: "Active Plus users",
        heading: "A quick reminder of what Plus helps with",
        intro:
          "The email version may include lightweight usage summaries. This public web version stays generic and avoids personal receipt, merchant, item, or amount details.",
        sections: [
          {
            heading: "Useful things to review in the app",
            bullets: [
              "How many scans you still have available.",
              "Bills that are already settled.",
              "Outstanding participants that still need follow-up.",
              "Monthly insights and trends.",
              "Plus features you have not tried yet.",
            ],
          },
        ],
        primaryCta: { label: "Open History in the app", target: "/#features" },
        footerNote: "For privacy, this web mirror does not show personalized monthly values.",
      },
      id: {
        subject: "Ringkasan BagiStruk Plus kamu bulan ini",
        preheader: "Versi web aman dari email recap bulanan.",
        audience: "Pengguna Plus aktif",
        heading: "Pengingat singkat manfaat Plus bulan ini",
        intro:
          "Versi email dapat memuat ringkasan penggunaan ringan. Versi web publik ini tetap generic dan tidak menampilkan detail struk, merchant, item, atau nominal personal.",
        sections: [
          {
            heading: "Hal yang bisa dicek di aplikasi",
            bullets: [
              "Sisa scan yang masih tersedia.",
              "Bill yang sudah lunas.",
              "Partisipan outstanding yang masih perlu di-follow up.",
              "Insight dan tren bulanan.",
              "Fitur Plus yang belum kamu coba.",
            ],
          },
        ],
        primaryCta: { label: "Buka History di aplikasi", target: "/id#features" },
        footerNote: "Demi privasi, mirror web ini tidak menampilkan nilai bulanan personal.",
      },
    },
  },
  {
    slug: "plus-ending-soon",
    campaignKey: "plus_retention",
    stepKey: "ending_soon",
    text: {
      en: {
        subject: "Your Plus access may end soon",
        preheader: "Check billing if you want to keep Plus features active.",
        audience: "Plus users near expiry or payment issue",
        heading: "Keep Plus ready for your next bill",
        intro:
          "If your subscription is canceled, past due, or close to ending, Plus features may stop after the current access period.",
        sections: [
          {
            heading: "What you may lose access to",
            bullets: [
              "Higher monthly scan allowance.",
              "Ad-free experience when ads are enabled.",
              "Longer History window and monthly insights.",
              "PDF/CSV export, transfer bank info, and deleted bill recovery.",
            ],
          },
        ],
        primaryCta: { label: "Check billing", target: "/#features" },
        footerNote:
          "This reminder should only be sent when billing status indicates access may actually end.",
      },
      id: {
        subject: "Akses Plus kamu mungkin segera berakhir",
        preheader: "Cek billing jika ingin fitur Plus tetap aktif.",
        audience: "Pengguna Plus mendekati expiry atau payment issue",
        heading: "Jaga Plus tetap siap untuk bill berikutnya",
        intro:
          "Jika subscription dibatalkan, bermasalah, atau mendekati akhir periode, fitur Plus dapat berhenti setelah periode akses berjalan selesai.",
        sections: [
          {
            heading: "Akses yang bisa hilang",
            bullets: [
              "Allowance scan bulanan lebih besar.",
              "Pengalaman tanpa iklan saat iklan aktif.",
              "Jendela History lebih panjang dan insight bulanan.",
              "Export PDF/CSV, info bank transfer, dan pemulihan bill terhapus.",
            ],
          },
        ],
        primaryCta: { label: "Cek billing", target: "/id#features" },
        footerNote:
          "Reminder ini sebaiknya hanya dikirim saat status billing menunjukkan akses memang berisiko berakhir.",
      },
    },
  },
  {
    slug: "former-plus-winback",
    campaignKey: "plus_winback",
    stepKey: "former_plus_d3",
    text: {
      en: {
        subject: "Plus features are ready whenever you need them again",
        preheader: "You can keep using Free, or return to Plus for the full workflow.",
        audience: "Former Plus users",
        heading: "You can still use BagiStruk Free",
        intro:
          "Your Plus access has ended, but BagiStruk Free remains available for light usage. When you need a more complete workflow again, Plus is ready.",
        sections: [
          {
            heading: "Plus adds back",
            bullets: [
              "60 scan credits per month.",
              "Ad-free experience when ads are enabled.",
              "History access up to 90 days.",
              "PDF/CSV export.",
              "Transfer bank info in settlement messages.",
              "Deleted bill recovery for 30 days.",
            ],
          },
        ],
        primaryCta: { label: "Review Plus features", target: "/#features" },
        secondaryCta: { label: "Read the guide", target: "/#guide" },
        footerNote: "This winback page avoids pressure and keeps the Free option clear.",
      },
      id: {
        subject: "Fitur Plus siap dipakai lagi kapan pun kamu butuh",
        preheader: "Kamu tetap bisa memakai Free, atau kembali ke Plus untuk workflow lengkap.",
        audience: "Mantan pengguna Plus",
        heading: "Kamu tetap bisa memakai BagiStruk Free",
        intro:
          "Akses Plus kamu sudah berakhir, tetapi BagiStruk Free tetap tersedia untuk pemakaian ringan. Saat butuh workflow yang lebih lengkap lagi, Plus siap dipakai.",
        sections: [
          {
            heading: "Plus mengembalikan",
            bullets: [
              "60 credit scan per bulan.",
              "Pengalaman tanpa iklan saat iklan aktif.",
              "Akses History sampai 90 hari.",
              "Export PDF/CSV.",
              "Info bank transfer di pesan settlement.",
              "Pemulihan bill terhapus selama 30 hari.",
            ],
          },
        ],
        primaryCta: { label: "Lihat fitur Plus", target: "/id#features" },
        secondaryCta: { label: "Baca panduan", target: "/id#guide" },
        footerNote: "Halaman winback ini dibuat tanpa tekanan dan tetap menjelaskan opsi Free.",
      },
    },
  },
  {
    slug: "dormant-free-reactivation",
    campaignKey: "free_reactivation",
    stepKey: "dormant_free_d21",
    text: {
      en: {
        subject: "Any receipts waiting to be split?",
        preheader: "A gentle reminder to split your next bill without manual calculation.",
        audience: "Dormant Free users",
        heading: "Split the next bill without rebuilding it by hand",
        intro:
          "If a receipt has been waiting in your camera roll, BagiStruk can help turn it into editable bill items and settlement tracking.",
        sections: [
          {
            heading: "A simple flow",
            bullets: [
              "Scan or pick receipt photos.",
              "Review the OCR result.",
              "Assign items to participants.",
              "Share amounts and mark payments as paid.",
            ],
          },
        ],
        primaryCta: { label: "Refresh the guide", target: "/#guide" },
        secondaryCta: { label: "See screenshots", target: "/#screenshots" },
        footerNote:
          "This is a marketing reactivation page, not an inactivity cleanup or account deletion notice.",
      },
      id: {
        subject: "Ada struk yang belum sempat dibagi?",
        preheader: "Pengingat ringan untuk bagi tagihan berikutnya tanpa hitung manual.",
        audience: "Pengguna Free yang tidak aktif",
        heading: "Bagi tagihan berikutnya tanpa mengetik ulang semuanya",
        intro:
          "Kalau ada struk yang menunggu di galeri, BagiStruk bisa membantu mengubahnya menjadi item tagihan yang bisa diedit dan dipantau settlement-nya.",
        sections: [
          {
            heading: "Flow sederhana",
            bullets: [
              "Scan atau pilih foto struk.",
              "Review hasil OCR.",
              "Bagi item ke partisipan.",
              "Bagikan nominal dan tandai pembayaran.",
            ],
          },
        ],
        primaryCta: { label: "Buka lagi panduan", target: "/id#guide" },
        secondaryCta: { label: "Lihat screenshot", target: "/id#screenshots" },
        footerNote:
          "Ini halaman reaktivasi marketing, bukan reminder cleanup atau penghapusan akun.",
      },
    },
  },
];

export function findEmailCampaign(slug: string | null): EmailCampaign | undefined {
  return emailCampaigns.find((campaign) => campaign.slug === slug);
}
