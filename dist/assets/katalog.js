/* =====================================================================
   MAHENORA — Katalog Lengkap (Gabungan Lama + Baru)
   ===================================================================== */

const PRODUK = [
  /* ============ AKSES & KEAMANAN (Lama + Baru) ============ */
  {
    judul: "Smart Access Control (RFID / PIN)",
    desc: "Kendali akses pintu dengan kartu RFID atau kode PIN. Log akses tersimpan di server lokal Anda. Bisa diintegrasikan dengan sistem absensi. Berbasis Arduino + magnetic door lock.",
    fungsi: "akses", tipe: "hybrid", sektor: ["gedung", "institusi", "industri"], ikon: "scan",
  },
  {
    judul: "AI CCTV – Optimasi Kamera Existing",
    desc: "Kami tidak menjual kamera baru. Kami mengoptimalkan CCTV yang sudah Anda miliki: deteksi orang/objek mencurigakan, kirim foto ke Telegram saat anomali. Proses di server lokal.",
    fungsi: "akses", tipe: "perangkat", sektor: ["gedung", "ritel", "institusi"], ikon: "camera",
  },
  {
    judul: "Sistem Alarm & Deteksi Dini",
    desc: "Deteksi asap, api, gas berbahaya, atau penyusup. Sirine dan notifikasi WhatsApp/Telegram instan ke petugas.",
    fungsi: "akses", tipe: "perangkat", sektor: ["gedung", "industri", "institusi"], ikon: "bell",
  },
  {
    judul: "Visitor Management System",
    desc: "Catat tamu, cetak QR code akses sementara, notifikasi ke host. Riwayat tamu tersimpan rapi. Integrasi dengan smart lock.",
    fungsi: "akses", tipe: "aplikasi", sektor: ["gedung", "institusi"], ikon: "portal",
  },

  /* ============ MONITORING & SENSOR (Lama + Baru) ============ */
  {
    judul: "Monitoring Ruang Server & Lingkungan",
    desc: "Pantau suhu, kelembapan, kebocoran air, kualitas udara ruang server, gudang, arsip. Alarm saat kondisi di luar batas aman.",
    fungsi: "monitoring", tipe: "perangkat", sektor: ["industri", "gedung", "institusi"], ikon: "temp",
  },
  {
    judul: "Monitoring Daya Listrik & Genset",
    desc: "Ukur konsumsi listrik per panel, deteksi lonjakan beban, pantau level BBM dan status genset. Data real-time di server Anda.",
    fungsi: "monitoring", tipe: "perangkat", sektor: ["gedung", "industri", "logistik"], ikon: "bolt",
  },
  {
    judul: "Monitoring Kualitas Udara Dalam Ruangan (IAQ)",
    desc: "Pantau CO2, debu (PM2.5), suhu, kelembaban. Ideal untuk kantor, sekolah, ruang publik. Notifikasi kualitas udara buruk.",
    fungsi: "monitoring", tipe: "perangkat", sektor: ["gedung", "institusi", "industri"], ikon: "air",
  },
  {
    judul: "Sensor Hunian & Optimalisasi Ruang",
    desc: "Hitung jumlah orang masuk/keluar ruangan real-time. Data untuk optimalisasi ruang meeting, efisiensi AC & lampu.",
    fungsi: "monitoring", tipe: "perangkat", sektor: ["gedung", "ritel", "institusi"], ikon: "people",
  },
  {
    judul: "Smart Farming Monitoring",
    desc: "Sensor kelembapan tanah, cuaca lahan, kualitas air kolam, iklim rumah kaca. Data real-time, bisa integrasi irigasi otomatis.",
    fungsi: "monitoring", tipe: "perangkat", sektor: ["agri"], ikon: "sprout",
  },
  {
    judul: "Wireless Soil & Weather Station",
    desc: "Stasiun pemantau cuaca mikro: curah hujan, kecepatan angin, suhu, kelembaban tanah di beberapa titik. Data akurat untuk pertanian presisi.",
    fungsi: "monitoring", tipe: "perangkat", sektor: ["agri", "industri"], ikon: "sprout",
  },

  /* ============ OTOMASI & ENERGI (Lama + Baru) ============ */
  {
    judul: "Otomatisasi Kelistrikan Gedung",
    desc: "Lampu, AC, perangkat listrik dikendalikan otomatis via jadwal atau sensor kehadiran. Matikan beban terlupa, hemat listrik.",
    fungsi: "otomasi", tipe: "perangkat", sektor: ["gedung", "institusi"], ikon: "bulb",
  },
  {
    judul: "Otomatisasi HVAC Pintar (Smart Thermostat)",
    desc: "Kontrol AC/kipas otomatis berdasarkan jadwal, suhu ruangan, dan ada/tidaknya orang. Hemat listrik AC hingga 20-30%.",
    fungsi: "otomasi", tipe: "perangkat", sektor: ["gedung", "institusi"], ikon: "temp",
  },
  {
    judul: "Smart Plug & Stop Kontak Terkontrol",
    desc: "Pasang di stop kontak, monitor daya, dan matikan/nyalakan perangkat dari jarak jauh via aplikasi. Mudah dan murah.",
    fungsi: "otomasi", tipe: "perangkat", sektor: ["gedung", "institusi", "agri"], ikon: "plug",
  },
  {
    judul: "Smart Switch & Otomasi Pencahayaan",
    desc: "Ganti sakelar manual dengan modul cerdas. Kontrol pencahayaan otomatis (jadwal/sensor) atau manual via aplikasi.",
    fungsi: "otomasi", tipe: "perangkat", sektor: ["gedung", "institusi"], ikon: "bulb",
  },
  {
    judul: "Smart Parking Sensor",
    desc: "Sensor ultrasonik di setiap slot parkir mendeteksi ketersediaan. Tampil di dashboard dan lampu indikator pintu masuk.",
    fungsi: "otomasi", tipe: "perangkat", sektor: ["gedung", "ritel", "institusi"], ikon: "parking",
  },
  {
    judul: "GPS Tracker Hemat (Posisi & Rute)",
    desc: "Lacak posisi kendaraan real-time, riwayat rute. Cocok untuk pemantauan dasar armada tanpa analitik BBM. Data di server Anda.",
    fungsi: "otomasi", tipe: "perangkat", sektor: ["logistik", "institusi"], ikon: "gps",
  },
  {
    judul: "Fleet Tracking Lengkap (Teltonika + BBM)",
    desc: "Device Teltonika profesional. Lacak posisi, konsumsi BBM, kecepatan, kebiasaan mengemudi, riwayat perjalanan. Data di server Anda.",
    fungsi: "otomasi", tipe: "hybrid", sektor: ["logistik", "institusi"], ikon: "bus",
  },
  {
    judul: "Smart Irigasi & Pompa Air Otomatis",
    desc: "Kontrol pompa air otomatis berdasarkan jadwal atau sensor kelembaban tanah. Bisa dari jarak jauh via ponsel. Hemat air & listrik.",
    fungsi: "otomasi", tipe: "perangkat", sektor: ["agri"], ikon: "water",
  },

  /* ============ APLIKASI OPERASIONAL (Lama + Baru) ============ */
  {
    judul: "Sistem Absensi & Manajemen Kehadiran",
    desc: "Rekap kehadiran, cuti, lembur otomatis — terhubung ke perangkat akses atau lewat ponsel. Gantikan rekap manual.",
    fungsi: "operasional", tipe: "aplikasi", sektor: ["gedung", "institusi", "industri"], ikon: "card",
  },
  {
    judul: "Smart Meeting Room & Booking System",
    desc: "Booking ruang meeting via web, cek ketersediaan real-time, lampu indikator status, unlock pintu otomatis. Hapus double booking.",
    fungsi: "operasional", tipe: "aplikasi", sektor: ["gedung", "institusi"], ikon: "calendar",
  },
  {
    judul: "Smart Classroom Environment",
    desc: "Paket komplit satu ruang kelas: kontrol AC & lampu otomatis, sensor kualitas udara, dashboard terpusat. Tingkatkan kenyamanan & efisiensi belajar.",
    fungsi: "operasional", tipe: "hybrid", sektor: ["institusi"], ikon: "dashboard",
  },
  {
    judul: "Smart IoT Lab Kit (ESP32 Trainer)",
    desc: "Modul edukasi berbagai sensor (suhu, cahaya, gerak) berbasis ESP32. Ideal untuk lab sekolah belajar coding & IoT. Harga mulai Rp2 jutaan.",
    fungsi: "operasional", tipe: "perangkat", sektor: ["institusi"], ikon: "lab",
  },
  {
    judul: "Aplikasi Persetujuan & Disposisi (Workflow)",
    desc: "Pengajuan, persetujuan, disposisi surat digital. Pimpinan approve dari ponsel, semua terekam tanpa kertas.",
    fungsi: "operasional", tipe: "aplikasi", sektor: ["institusi", "gedung"], ikon: "workflow",
  },
  {
    judul: "Helpdesk & Tiket Internal",
    desc: "Staf lapor kendala via tiket, terlacak hingga selesai. Kurangi miskomunikasi dan keluhan terlupa.",
    fungsi: "operasional", tipe: "aplikasi", sektor: ["gedung", "institusi", "industri"], ikon: "ticket",
  },
  {
    judul: "Formulir Digital & Pendataan",
    desc: "Ganti formulir kertas dengan form digital: pendaftaran, survei, checklist inspeksi. Data langsung terkumpul otomatis.",
    fungsi: "operasional", tipe: "aplikasi", sektor: ["institusi", "gedung", "industri"], ikon: "form",
  },
  {
    judul: "Manajemen Tugas & Proyek",
    desc: "Papan tugas, tenggat, progres tim dalam satu tempat. Agar pekerjaan tak tercecer di chat dan spreadsheet.",
    fungsi: "operasional", tipe: "aplikasi", sektor: ["gedung", "institusi"], ikon: "kanban",
  },
  {
    judul: "Notifikasi WhatsApp/Telegram Gateway",
    desc: "Mesin notifikasi yang menyambungkan semua sistem ke pesan instan. Pengingat, peringatan, notifikasi otomatis ke staf dan pimpinan.",
    fungsi: "operasional", tipe: "aplikasi", sektor: ["gedung", "institusi", "industri"], ikon: "chat",
  },

  /* ============ SISTEM MANAJEMEN (Lama, direvisi) ============ */
  {
    judul: "Sistem Inventaris & Aset",
    desc: "Kelola stok dan aset dengan label QR. Peringatan stok menipis, riwayat pemakaian, jadwal perawatan. Gantikan Excel.",
    fungsi: "manajemen", tipe: "aplikasi", sektor: ["gedung", "institusi", "industri"], ikon: "box",
  },
  {
    judul: "Aplikasi Data Karyawan & Cuti",
    desc: "Data karyawan, pengajuan cuti, riwayat cuti dalam satu sistem. Mudah diakses HRD (tanpa hitung gaji otomatis, bisa ditambahkan).",
    fungsi: "manajemen", tipe: "aplikasi", sektor: ["gedung", "industri", "ritel"], ikon: "people",
  },

  /* ============ WEB, PORTAL & DASHBOARD ============ */
  {
    judul: "Website Company Profile",
    desc: "Situs profil perusahaan profesional, cepat, ramah SEO. Etalase digital instansi Anda.",
    fungsi: "web", tipe: "aplikasi", sektor: ["gedung", "ritel", "institusi"], ikon: "globe",
  },
  {
    judul: "Portal Klien & Karyawan",
    desc: "Portal mandiri untuk klien/karyawan: akses dokumen, status layanan, pengumuman, direktori. Kurangi bolak-balik komunikasi.",
    fungsi: "web", tipe: "aplikasi", sektor: ["gedung", "institusi"], ikon: "portal",
  },
  {
    judul: "Dasbor & Laporan Terpusat",
    desc: "Satu layar pantau seluruh perangkat dan aplikasi, lengkap laporan berkala otomatis. Berjalan di server Anda sendiri.",
    fungsi: "web", tipe: "aplikasi", sektor: ["gedung", "institusi", "industri"], ikon: "dashboard",
  },
];

/* ---------- Label kategori ---------- */
const LABEL_FUNGSI = {
  akses:       "Akses & Keamanan",
  monitoring:  "Monitoring & Sensor",
  otomasi:     "Otomasi & Energi",
  operasional: "Aplikasi Operasional",
  manajemen:   "Sistem Manajemen",
  web:         "Web, Portal & Dashboard",
};

const LABEL_TIPE = {
  perangkat: "Perangkat",
  aplikasi:  "Aplikasi",
  hybrid:    "Perangkat + Aplikasi",
};

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
    sprout:    '<path d="M12 21v-7"/><path d="M12 14c0-3-2-5-6-5 0 3 2 5 6 5z"/><path d="M12 14c0-3 2-5 6-5 0 3-2 5-6 5z"/>',
    bulb:      '<path d="M9 18h6M10 21h4M12 3a6 6 0 00-4 10.5c.7.8 1 1.5 1 2.5h6c0-1 .3-1.7 1-2.5A6 6 0 0012 3z"/>',
    gps:       '<circle cx="12" cy="12" r="2"/><path d="M12 2a10 10 0 1010 10"/><path d="M12 6a6 6 0 016 6"/>',
    bus:       '<path d="M3 16V8a1 1 0 011-1h11l4 4v5"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/>',
    card:      '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 9h18M8 5v14"/>',
    workflow:  '<rect x="3" y="4" width="6" height="5" rx="1"/><rect x="15" y="9" width="6" height="5" rx="1"/><rect x="3" y="15" width="6" height="5" rx="1"/><path d="M9 6.5h3a2 2 0 012 2v3M9 17.5h3a2 2 0 002-2v-1.5"/>',
    ticket:    '<path d="M4 7a2 2 0 012-2h12a2 2 0 012 2v3a2 2 0 000 4v3a2 2 0 01-2 2H6a2 2 0 01-2-2v-3a2 2 0 000-4V7z"/><path d="M12 7v10" stroke-dasharray="2 2"/>',
    form:      '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h2M8 12h2M8 16h2M13 8h3M13 12h3M13 16h3"/>',
    kanban:    '<rect x="3" y="4" width="5" height="16" rx="1"/><rect x="9.5" y="4" width="5" height="10" rx="1"/><rect x="16" y="4" width="5" height="13" rx="1"/>',
    chat:      '<path d="M4 5h16v11H9l-4 3V5z"/><path d="M8 10h8M8 13h5"/>',
    box:       '<path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8M12 13v8"/>',
    people:    '<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><path d="M16 5.5a3 3 0 010 5.8M21 20c0-2.6-1.5-4.8-3.7-5.6"/>',
    globe:     '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 4 5.6 4 9s-1.5 6.5-4 9c-2.5-2.5-4-5.6-4-9s1.5-6.5 4-9z"/>',
    portal:    '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M7 6.5h.01M10 6.5h.01"/><path d="M8 13h8M8 16h5"/>',
    dashboard: '<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4M7 12l3-3 2.5 2.5L17 7"/>',
    air:       '<path d="M5 15h14"/><path d="M7 10l3-3 3 3"/><path d="M7 20l3-3 3 3"/><path d="M16 10l-2-2 2-2"/>',
    plug:      '<rect x="8" y="10" width="8" height="12" rx="2"/><path d="M12 10V6"/><circle cx="12" cy="16" r="1"/>',
    water:     '<path d="M3 13h18"/><path d="M6 13v5h12v-5"/><rect x="8" y="8" width="8" height="5" rx="1"/>',
    parking:   '<rect x="9" y="3" width="6" height="18" rx="1"/><path d="M9 10h4a3 3 0 010 6h-4"/>',
    calendar:  '<rect x="3" y="6" width="18" height="15" rx="2"/><path d="M3 10h18M8 3v3M16 3v3"/>',
    lab:       '<path d="M6 2l3 3-3 3"/><path d="M18 2l-3 3 3 3"/><rect x="3" y="9" width="18" height="12" rx="2"/>',
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