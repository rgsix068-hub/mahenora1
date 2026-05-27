/* =====================================================================
   MAHENORA — Data & Logika Katalog
   ---------------------------------------------------------------------
   Satu lini produk terpadu: PERANGKAT (otomasi/sensor) + APLIKASI (software).
   Beberapa solusi sengaja digabung agar tidak terpecah-pecah.

   CARA MENAMBAH / MENGUBAH PRODUK — cukup edit array PRODUK di bawah:
     - judul  : nama solusi
     - desc   : deskripsi singkat (1-2 kalimat)
     - fungsi : "akses" | "monitoring" | "otomasi" |
                "operasional" | "manajemen" | "web"
     - tipe   : "perangkat" (hardware/IoT) | "aplikasi" (software) | "hybrid"
     - sektor : array tag CONTOH penerapan (informasi saja):
                "gedung" | "institusi" | "industri" | "agri" |
                "logistik" | "ritel"
     - ikon   : nama ikon (lihat fungsi svgIcon di bawah)
   Simpan, selesai.
   ===================================================================== */

const PRODUK = [
  /* ============ AKSES & KEAMANAN ============ */
  {
    judul: "Smart Access Control (RFID / PIN / Biometrik)",
    desc: "Kendali akses pintu dengan kartu RFID, kode PIN, sidik jari, atau wajah — lengkap dengan log akses, manajemen tamu, dan integrasi absensi.",
    fungsi: "akses", tipe: "hybrid", sektor: ["gedung", "institusi", "industri"], ikon: "scan",
  },
  {
    judul: "AI CCTV & Video Analytics",
    desc: "Kamera pengawas yang mendeteksi gerak, orang, objek, hingga plat nomor (ANPR) dan mengirim peringatan otomatis — bukan sekadar merekam.",
    fungsi: "akses", tipe: "perangkat", sektor: ["gedung", "ritel", "logistik"], ikon: "camera",
  },
  {
    judul: "Sistem Alarm & Deteksi Dini",
    desc: "Deteksi asap, api, gas berbahaya, atau penyusup serta tombol darurat — semua memicu sirine dan notifikasi instan ke ponsel petugas.",
    fungsi: "akses", tipe: "perangkat", sektor: ["gedung", "industri", "institusi"], ikon: "bell",
  },

  /* ============ MONITORING & SENSOR ============ */
  {
    judul: "Monitoring Ruang Server & Lingkungan",
    desc: "Pantau suhu, kelembapan, kebocoran air, dan kualitas udara ruang server, gudang, atau arsip — dengan alarm saat kondisi di luar batas aman.",
    fungsi: "monitoring", tipe: "perangkat", sektor: ["industri", "gedung", "institusi"], ikon: "temp",
  },
  {
    judul: "Monitoring Daya Listrik & Genset",
    desc: "Ukur konsumsi listrik per panel, deteksi lonjakan beban, serta pantau level BBM dan status genset agar listrik cadangan selalu siap.",
    fungsi: "monitoring", tipe: "perangkat", sektor: ["gedung", "industri", "logistik"], ikon: "bolt",
  },
  {
    judul: "Cold Chain Monitoring (Rantai Dingin)",
    desc: "Pemantauan suhu kulkas, freezer, dan kendaraan berpendingin secara berkelanjutan, lengkap dengan log untuk audit mutu.",
    fungsi: "monitoring", tipe: "perangkat", sektor: ["ritel", "logistik", "industri"], ikon: "snow",
  },
  {
    judul: "Monitoring Industri (Mesin & Produksi)",
    desc: "Status mesin, downtime, dan output produksi secara real-time, dengan deteksi getaran untuk memprediksi kerusakan sebelum terjadi.",
    fungsi: "monitoring", tipe: "perangkat", sektor: ["industri"], ikon: "gear",
  },
  {
    judul: "Smart Farming Monitoring",
    desc: "Sensor kelembapan tanah, cuaca lahan, kualitas air kolam, atau iklim rumah kaca untuk keputusan tani berbasis data.",
    fungsi: "monitoring", tipe: "perangkat", sektor: ["agri"], ikon: "sprout",
  },

  /* ============ OTOMASI & ENERGI ============ */
  {
    judul: "Otomatisasi Kelistrikan Gedung",
    desc: "Lampu, AC, dan perangkat listrik dikendalikan otomatis lewat jadwal atau sensor kehadiran — mematikan beban terlupa dan menekan tagihan.",
    fungsi: "otomasi", tipe: "perangkat", sektor: ["gedung", "institusi"], ikon: "bulb",
  },
  {
    judul: "Smart Energy & Solar Monitoring",
    desc: "Pantau kinerja panel surya (PLTS) dan konsumsi daya per area dalam satu dasbor untuk operasional yang lebih hemat dan hijau.",
    fungsi: "otomasi", tipe: "perangkat", sektor: ["gedung", "industri", "agri"], ikon: "solar",
  },
  {
    judul: "Fleet Tracking & Analitik BBM",
    desc: "Lacak armada di server sendiri tanpa langganan, lengkap dengan dasbor rute dan konsumsi bahan bakar untuk menutup kebocoran anggaran.",
    fungsi: "otomasi", tipe: "hybrid", sektor: ["logistik", "institusi"], ikon: "bus",
  },

  /* ============ APLIKASI OPERASIONAL ============ */
  {
    judul: "Sistem Absensi & Manajemen Kehadiran",
    desc: "Rekap kehadiran, cuti, dan lembur otomatis — terhubung ke perangkat akses atau cukup lewat ponsel, menggantikan rekap manual harian.",
    fungsi: "operasional", tipe: "aplikasi", sektor: ["gedung", "institusi", "industri"], ikon: "card",
  },
  {
    judul: "Aplikasi Persetujuan & Disposisi (Workflow)",
    desc: "Pengajuan, persetujuan, dan disposisi surat berjalan digital — pimpinan menyetujui dari ponsel, semua terekam rapi tanpa kertas.",
    fungsi: "operasional", tipe: "aplikasi", sektor: ["institusi", "gedung"], ikon: "workflow",
  },
  {
    judul: "Helpdesk & Tiket Internal",
    desc: "Staf melaporkan kendala IT atau fasilitas, lalu terlacak rapi hingga selesai — mengurangi miskomunikasi dan keluhan yang terlupa.",
    fungsi: "operasional", tipe: "aplikasi", sektor: ["gedung", "institusi", "industri"], ikon: "ticket",
  },
  {
    judul: "Formulir Digital & Pendataan",
    desc: "Ganti formulir kertas dengan form digital: pendaftaran, survei, atau checklist inspeksi — data langsung terkumpul dan terangkum otomatis.",
    fungsi: "operasional", tipe: "aplikasi", sektor: ["institusi", "gedung", "industri"], ikon: "form",
  },
  {
    judul: "Manajemen Tugas & Proyek",
    desc: "Papan tugas, tenggat, dan progres tim dalam satu tempat — agar pekerjaan tidak lagi tercecer di chat dan spreadsheet terpisah.",
    fungsi: "operasional", tipe: "aplikasi", sektor: ["gedung", "institusi"], ikon: "kanban",
  },
  {
    judul: "Notifikasi WhatsApp/Telegram Gateway",
    desc: "Mesin notifikasi yang menyambungkan semua sistem ke pesan instan — pengingat, peringatan, atau pemberitahuan otomatis ke staf dan pimpinan.",
    fungsi: "operasional", tipe: "aplikasi", sektor: ["gedung", "institusi", "industri"], ikon: "chat",
  },

  /* ============ SISTEM MANAJEMEN ============ */
  {
    judul: "Sistem Inventaris & Aset",
    desc: "Kelola stok dan aset dengan label QR, peringatan stok menipis, riwayat pemakaian, serta jadwal perawatan — menggantikan pendataan via Excel.",
    fungsi: "manajemen", tipe: "aplikasi", sektor: ["gedung", "institusi", "industri"], ikon: "box",
  },
  {
    judul: "Aplikasi HR & Penggajian",
    desc: "Data karyawan, pengajuan cuti, perhitungan gaji, dan slip gaji otomatis dalam satu sistem — meringankan beban administrasi kepegawaian.",
    fungsi: "manajemen", tipe: "aplikasi", sektor: ["gedung", "industri", "ritel"], ikon: "people",
  },
  {
    judul: "Aplikasi Keuangan & Invoicing",
    desc: "Buat dan kirim invoice, catat pengeluaran, dan pantau arus kas secara real-time — laporan keuangan siap tanpa rekap manual.",
    fungsi: "manajemen", tipe: "aplikasi", sektor: ["gedung", "ritel", "logistik"], ikon: "invoice",
  },
  {
    judul: "CRM & Manajemen Pelanggan",
    desc: "Lacak prospek, riwayat pelanggan, dan follow-up penjualan dalam pipeline yang sesuai alur kerja Anda — tidak ada peluang yang terlewat.",
    fungsi: "manajemen", tipe: "aplikasi", sektor: ["ritel", "gedung", "logistik"], ikon: "crm",
  },
  {
    judul: "Sistem POS & Penjualan",
    desc: "Aplikasi kasir, pencatatan order, stok, dan laporan penjualan untuk ritel atau F&B — transaksi cepat dan rekap omzet otomatis.",
    fungsi: "manajemen", tipe: "aplikasi", sektor: ["ritel"], ikon: "pos",
  },

  /* ============ WEB, PORTAL & DASHBOARD ============ */
  {
    judul: "Website Company Profile",
    desc: "Situs profil perusahaan yang profesional, cepat, dan ramah SEO — membangun kredibilitas dan menjadi etalase digital instansi Anda.",
    fungsi: "web", tipe: "aplikasi", sektor: ["gedung", "ritel", "institusi"], ikon: "globe",
  },
  {
    judul: "Portal Klien & Karyawan",
    desc: "Portal mandiri untuk klien atau karyawan: akses dokumen, status layanan, pengumuman, dan direktori — mengurangi bolak-balik komunikasi.",
    fungsi: "web", tipe: "aplikasi", sektor: ["gedung", "institusi"], ikon: "portal",
  },
  {
    judul: "Dasbor & Laporan Terpusat",
    desc: "Satu layar untuk memantau seluruh perangkat dan aplikasi, lengkap dengan laporan berkala otomatis — berjalan di server Anda sendiri.",
    fungsi: "web", tipe: "aplikasi", sektor: ["gedung", "institusi", "industri"], ikon: "dashboard",
  },
  {
    judul: "Toko Online / E-Commerce",
    desc: "Toko daring dengan katalog produk, keranjang, dan pembayaran — memperluas penjualan tanpa bergantung sepenuhnya pada marketplace.",
    fungsi: "web", tipe: "aplikasi", sektor: ["ritel"], ikon: "cart",
  },
];

/* ---------- Label kategori (badge) ---------- */
const LABEL_FUNGSI = {
  akses:       "Akses & Keamanan",
  monitoring:  "Monitoring & Sensor",
  otomasi:     "Otomasi & Energi",
  operasional: "Aplikasi Operasional",
  manajemen:   "Sistem Manajemen",
  web:         "Web, Portal & Dashboard",
};

/* ---------- Label tipe ---------- */
const LABEL_TIPE = {
  perangkat: "Perangkat",
  aplikasi:  "Aplikasi",
  hybrid:    "Perangkat + Aplikasi",
};

/* ---------- Label sektor (tag informasi) ---------- */
const LABEL_SEKTOR = {
  gedung:    "Kantor & Gedung",
  institusi: "Institusi",
  industri:  "Industri",
  agri:      "Pertanian",
  logistik:  "Logistik",
  ritel:     "Ritel & F&B",
};

/* ---------- Ikon SVG ---------- */
function svgIcon(name) {
  const p = {
    scan:      '<path d="M4 8V6a2 2 0 012-2h2M16 4h2a2 2 0 012 2v2M20 16v2a2 2 0 01-2 2h-2M8 20H6a2 2 0 01-2-2v-2"/><circle cx="12" cy="12" r="3"/>',
    camera:    '<path d="M3 8a2 2 0 012-2h2l1.5-2h7L18 6h1a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"/><circle cx="12" cy="12.5" r="3.2"/>',
    bell:      '<path d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 01-3.4 0"/>',
    temp:      '<path d="M12 3a2 2 0 012 2v8a4 4 0 11-4 0V5a2 2 0 012-2z"/><circle cx="12" cy="16.5" r="1.6"/>',
    bolt:      '<path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/>',
    snow:      '<path d="M12 3v18M4.5 7.5l15 9M19.5 7.5l-15 9"/><path d="M12 3l-2 2M12 3l2 2M12 21l-2-2M12 21l2-2"/>',
    gear:      '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2"/>',
    sprout:    '<path d="M12 21v-7"/><path d="M12 14c0-3-2-5-6-5 0 3 2 5 6 5z"/><path d="M12 14c0-3 2-5 6-5 0 3-2 5-6 5z"/>',
    bulb:      '<path d="M9 18h6M10 21h4M12 3a6 6 0 00-4 10.5c.7.8 1 1.5 1 2.5h6c0-1 .3-1.7 1-2.5A6 6 0 0012 3z"/>',
    solar:     '<path d="M4 13h16l-1.5-7H5.5L4 13zM3 13h18v3H3zM8 6v7M14 6v7M3.5 16h17"/>',
    bus:       '<path d="M3 16V8a1 1 0 011-1h11l4 4v5"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/>',
    card:      '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 9h18M8 5v14"/>',
    workflow:  '<rect x="3" y="4" width="6" height="5" rx="1"/><rect x="15" y="9" width="6" height="5" rx="1"/><rect x="3" y="15" width="6" height="5" rx="1"/><path d="M9 6.5h3a2 2 0 012 2v3M9 17.5h3a2 2 0 002-2v-1.5"/>',
    ticket:    '<path d="M4 7a2 2 0 012-2h12a2 2 0 012 2v3a2 2 0 000 4v3a2 2 0 01-2 2H6a2 2 0 01-2-2v-3a2 2 0 000-4V7z"/><path d="M12 7v10" stroke-dasharray="2 2"/>',
    form:      '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h2M8 12h2M8 16h2M13 8h3M13 12h3M13 16h3"/>',
    kanban:    '<rect x="3" y="4" width="5" height="16" rx="1"/><rect x="9.5" y="4" width="5" height="10" rx="1"/><rect x="16" y="4" width="5" height="13" rx="1"/>',
    chat:      '<path d="M4 5h16v11H9l-4 3V5z"/><path d="M8 10h8M8 13h5"/>',
    box:       '<path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8M12 13v8"/>',
    people:    '<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><path d="M16 5.5a3 3 0 010 5.8M21 20c0-2.6-1.5-4.8-3.7-5.6"/>',
    invoice:   '<path d="M6 3h9l4 4v14H6z"/><path d="M15 3v4h4"/><path d="M9 12h6M9 15h6M9 18h3"/>',
    crm:       '<circle cx="12" cy="8" r="3"/><path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><path d="M12 14v-3" stroke-dasharray="0"/><path d="M16.5 5l1.5 1.5L21 3"/>',
    pos:       '<rect x="4" y="3" width="11" height="18" rx="2"/><path d="M7 6h5M7 9h5"/><rect x="7" y="13" width="5" height="5" rx="1"/><path d="M18 8h2a1 1 0 011 1v9a2 2 0 01-2 2h-4"/>',
    globe:     '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 4 5.6 4 9s-1.5 6.5-4 9c-2.5-2.5-4-5.6-4-9s1.5-6.5 4-9z"/>',
    portal:    '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M7 6.5h.01M10 6.5h.01"/><path d="M8 13h8M8 16h5"/>',
    dashboard: '<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4M7 12l3-3 2.5 2.5L17 7"/>',
    cart:      '<circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M3 4h2l2.2 11h11l2-8H6"/>',
  };
  return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (p[name] || p.box) + '</svg>';
}

/* ---------- State & Render ---------- */
let curFungsi = "all";
let curTipe = "all";

function tipePill(tipe) {
  const styles = {
    perangkat: "text-tealdk bg-tealdk/10 border-tealdk/25",
    aplikasi:  "text-indigo-500 bg-indigo-500/10 border-indigo-500/25",
    hybrid:    "text-amber-600 bg-amber-500/10 border-amber-500/25",
  };
  const dot = {
    perangkat: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3"/></svg>',
    aplikasi:  '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M8 18l-5-6 5-6M16 6l5 6-5 6"/></svg>',
    hybrid:    '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 3v18M5 8l7-5 7 5"/></svg>',
  };
  return '<span class="inline-flex items-center gap-1 text-[10.5px] font-semibold rounded-full px-2 py-0.5 border ' + styles[tipe] + '">' + dot[tipe] + LABEL_TIPE[tipe] + '</span>';
}

function cardHTML(prod) {
  const sektorBadges = prod.sektor.map(s =>
    '<span class="text-[10.5px] font-medium text-ink/55 bg-line/60 rounded-full px-2 py-0.5">' + (LABEL_SEKTOR[s] || s) + '</span>'
  ).join("");
  return (
    '<article class="card-lift group rounded-3xl bg-white border border-line hover:border-teal/40 p-7 flex flex-col">' +
      '<div class="flex items-start justify-between mb-5">' +
        '<span class="grid place-items-center w-12 h-12 rounded-2xl bg-ink text-teal group-hover:bg-teal group-hover:text-white transition-colors">' + svgIcon(prod.ikon) + '</span>' +
        '<span class="text-[10.5px] uppercase tracking-wide font-semibold text-ink/45 bg-line/50 border border-line rounded-full px-2.5 py-1 text-right">' + LABEL_FUNGSI[prod.fungsi] + '</span>' +
      '</div>' +
      '<div class="mb-2">' + tipePill(prod.tipe) + '</div>' +
      '<h3 class="font-display text-lg text-ink leading-snug">' + prod.judul + '</h3>' +
      '<p class="mt-2 text-sm text-ink/55 leading-relaxed flex-1">' + prod.desc + '</p>' +
      '<div class="mt-5 pt-4 border-t border-line flex flex-wrap gap-1.5 items-center">' +
        '<span class="text-[10px] uppercase tracking-wide text-ink/35 mr-1">Contoh:</span>' + sektorBadges +
      '</div>' +
    '</article>'
  );
}

function render() {
  const grid  = document.getElementById("grid");
  const empty = document.getElementById("empty");
  const count = document.getElementById("count");

  const items = PRODUK.filter(p =>
    (curFungsi === "all" || p.fungsi === curFungsi) &&
    (curTipe === "all" || p.tipe === curTipe || (curTipe !== "all" && p.tipe === "hybrid"))
  );

  grid.innerHTML = items.map(cardHTML).join("");
  count.textContent = items.length;
  empty.classList.toggle("hidden", items.length !== 0);
}

/* ---------- Tombol filter ---------- */
function wire(groupId, attr, setter) {
  const group = document.getElementById(groupId);
  if (!group) return;
  group.addEventListener("click", function (e) {
    const btn = e.target.closest("button");
    if (!btn) return;
    group.querySelectorAll("button").forEach(b => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    setter(btn.getAttribute(attr));
    render();
  });
}

document.addEventListener("DOMContentLoaded", function () {
  wire("filter-fungsi", "data-filter", v => (curFungsi = v));
  wire("filter-tipe", "data-tipe", v => (curTipe = v));
  render();
});
