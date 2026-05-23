/* =====================================================================
   MAHENORA — Data & Logika Katalog
   ---------------------------------------------------------------------
   CARA MENAMBAH / MENGUBAH PRODUK:
   Cukup edit array PRODUK di bawah. Setiap produk punya:
     - judul    : nama solusi
     - desc     : deskripsi singkat (1-2 kalimat)
     - fungsi   : salah satu dari "keamanan" | "monitoring" | "tracking" | "otomasi" | "aplikasi"
     - segmen   : array, gabungan dari "sekolah" | "gov" | "umum"
     - ikon     : nama ikon (lihat fungsi svgIcon di bawah)
   Tidak perlu menyentuh kode lain. Simpan, selesai.
   ===================================================================== */

const PRODUK = [
  // ---------- KEAMANAN & AKSES ----------
  {
    judul: "Smart RFID Gate & Absensi",
    desc: "Tap kartu di gerbang memicu pencatatan kehadiran otomatis dan notifikasi WhatsApp/Telegram real-time.",
    fungsi: "keamanan", segmen: ["sekolah", "gov", "umum"], ikon: "card",
  },
  {
    judul: "IoT Smart Lock & Log Akses",
    desc: "Kunci pintu digital untuk lab, gudang, atau ruang arsip — mencatat siapa mengakses dan kapan.",
    fungsi: "keamanan", segmen: ["sekolah", "gov", "umum"], ikon: "lock",
  },
  {
    judul: "Sistem Kehadiran Fingerprint/Wajah",
    desc: "Absensi staf berbasis sidik jari atau pengenalan wajah, terhubung langsung ke dasbor internal.",
    fungsi: "keamanan", segmen: ["gov", "umum"], ikon: "scan",
  },
  {
    judul: "Panic Button & Alarm Darurat",
    desc: "Tombol darurat nirkabel yang mengirim peringatan instan ke pos keamanan dan ponsel petugas.",
    fungsi: "keamanan", segmen: ["sekolah", "gov", "umum"], ikon: "bell",
  },

  // ---------- MONITORING LINGKUNGAN ----------
  {
    judul: "Monitoring Suhu & Kelembapan",
    desc: "Sensor untuk data center, ruang server, atau gudang arsip dengan alarm otomatis saat anomali.",
    fungsi: "monitoring", segmen: ["gov", "umum"], ikon: "temp",
  },
  {
    judul: "Monitoring Arus & Daya Listrik",
    desc: "Pantau konsumsi listrik per panel/ruangan dan deteksi lonjakan beban sebelum terjadi kerusakan.",
    fungsi: "monitoring", segmen: ["gov", "umum"], ikon: "bolt",
  },
  {
    judul: "Monitoring Kualitas Udara",
    desc: "Pengukuran CO₂, debu, dan suhu ruang kelas atau kantor untuk kenyamanan dan kesehatan.",
    fungsi: "monitoring", segmen: ["sekolah", "umum"], ikon: "wind",
  },
  {
    judul: "Monitoring Tandon & Pompa Air",
    desc: "Sensor level air dan kendali pompa otomatis untuk gedung, asrama, atau fasilitas instansi.",
    fungsi: "monitoring", segmen: ["sekolah", "gov", "umum"], ikon: "drop",
  },

  // ---------- TRACKING & ARMADA ----------
  {
    judul: "Self-Hosted Fleet Tracking",
    desc: "Pelacakan armada bus sekolah atau kendaraan dinas di server internal — tanpa langganan aplikasi luar.",
    fungsi: "tracking", segmen: ["sekolah", "gov"], ikon: "bus",
  },
  {
    judul: "Analitik Rute & Konsumsi BBM",
    desc: "Dasbor untuk mendeteksi penyalahgunaan rute dan memantau efisiensi bahan bakar armada.",
    fungsi: "tracking", segmen: ["gov", "umum"], ikon: "chart",
  },
  {
    judul: "E-Asset Tracking via QR/RFID",
    desc: "Pendataan inventaris dan aset bergerak dengan QR Code, audit stok jadi instan.",
    fungsi: "tracking", segmen: ["sekolah", "gov", "umum"], ikon: "grid",
  },

  // ---------- OTOMASI & ENERGI ----------
  {
    judul: "Smart Building (Lampu & AC)",
    desc: "Otomatisasi penerangan dan pendingin berdasarkan jadwal atau sensor kehadiran demi hemat energi.",
    fungsi: "otomasi", segmen: ["sekolah", "gov", "umum"], ikon: "bulb",
  },
  {
    judul: "Smart Irrigation / Penyiraman",
    desc: "Penyiraman taman atau lahan otomatis berdasarkan kelembapan tanah dan jadwal.",
    fungsi: "otomasi", segmen: ["sekolah", "umum"], ikon: "leaf",
  },
  {
    judul: "Bel Sekolah & Pengumuman Otomatis",
    desc: "Sistem bel terjadwal dan pengumuman terpusat yang dapat dikendalikan dari satu dasbor.",
    fungsi: "otomasi", segmen: ["sekolah"], ikon: "speaker",
  },

  // ---------- APLIKASI STAF ----------
  {
    judul: "E-Surat & Disposisi Digital",
    desc: "Digitalisasi surat-menyurat di Private Cloud — pimpinan memberi disposisi dari ponsel, di mana saja.",
    fungsi: "aplikasi", segmen: ["gov", "umum"], ikon: "mail",
  },
  {
    judul: "Dasbor Monitoring Terpusat",
    desc: "Satu layar untuk memantau seluruh perangkat IoT, status, dan notifikasi instansi Anda.",
    fungsi: "aplikasi", segmen: ["sekolah", "gov", "umum"], ikon: "dashboard",
  },
  {
    judul: "Aplikasi Pelaporan & Tiket Internal",
    desc: "Staf melaporkan kendala atau permintaan, terlacak rapi hingga selesai — mengurangi miskomunikasi.",
    fungsi: "aplikasi", segmen: ["sekolah", "gov", "umum"], ikon: "ticket",
  },
  {
    judul: "Notifikasi WhatsApp/Telegram Gateway",
    desc: "Mesin notifikasi yang menyambungkan semua sistem IoT ke pesan instan orang tua/staf/pimpinan.",
    fungsi: "aplikasi", segmen: ["sekolah", "gov", "umum"], ikon: "chat",
  },
];

/* ---------- Label fungsi (untuk badge) ---------- */
const LABEL_FUNGSI = {
  keamanan: "Keamanan & Akses",
  monitoring: "Monitoring Lingkungan",
  tracking: "Tracking & Armada",
  otomasi: "Otomasi & Energi",
  aplikasi: "Aplikasi Staf",
};
const LABEL_SEGMEN = { sekolah: "Pendidikan", gov: "Pemerintahan", umum: "Umum/Kantor" };

/* ---------- Ikon SVG ---------- */
function svgIcon(name) {
  const p = {
    card: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 9h18M8 5v14"/>',
    lock: '<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/>',
    scan: '<path d="M4 8V6a2 2 0 012-2h2M16 4h2a2 2 0 012 2v2M20 16v2a2 2 0 01-2 2h-2M8 20H6a2 2 0 01-2-2v-2"/><circle cx="12" cy="12" r="3"/>',
    bell: '<path d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 01-3.4 0"/>',
    temp: '<path d="M12 3v10m0 0a3 3 0 103 3M12 13a3 3 0 00-3 3"/><path d="M12 3a2 2 0 012 2v8"/>',
    bolt: '<path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/>',
    wind: '<path d="M4 8h10a2 2 0 100-4M4 12h14a2 2 0 110 4M4 16h8a2 2 0 110 4"/>',
    drop: '<path d="M12 3s6 6.5 6 11a6 6 0 01-12 0c0-4.5 6-11 6-11z"/>',
    bus: '<path d="M3 16V8a1 1 0 011-1h11l4 4v5"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/>',
    chart: '<path d="M4 19V5M4 19h16M8 16v-4M12 16V8M16 16v-6"/>',
    grid: '<rect x="4" y="4" width="6" height="6" rx="1"/><rect x="14" y="4" width="6" height="6" rx="1"/><rect x="4" y="14" width="6" height="6" rx="1"/><path d="M14 17h6M17 14v6"/>',
    bulb: '<path d="M9 18h6M10 21h4M12 3a6 6 0 00-4 10.5c.7.8 1 1.5 1 2.5h6c0-1 .3-1.7 1-2.5A6 6 0 0012 3z"/>',
    leaf: '<path d="M4 20c0-8 6-14 16-14 0 10-6 16-16 14z"/><path d="M9 15c2-3 5-5 8-6"/>',
    speaker: '<path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M17 9a3 3 0 010 6"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
    dashboard: '<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4M7 12l3-3 2.5 2.5L17 7"/>',
    ticket: '<path d="M4 7a2 2 0 012-2h12a2 2 0 012 2v3a2 2 0 000 4v3a2 2 0 01-2 2H6a2 2 0 01-2-2v-3a2 2 0 000-4V7z"/><path d="M12 7v10" stroke-dasharray="2 2"/>',
    chat: '<path d="M4 5h16v11H9l-4 3V5z"/><path d="M8 10h8M8 13h5"/>',
  };
  return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (p[name] || p.grid) + '</svg>';
}

/* ---------- State & Render ---------- */
let curFungsi = "all";
let curSegmen = "all";

function cardHTML(prod) {
  const segBadges = prod.segmen.map(s =>
    '<span class="text-[10.5px] font-medium text-ink/55 bg-line/60 rounded-full px-2 py-0.5">' + LABEL_SEGMEN[s] + '</span>'
  ).join("");
  return (
    '<article class="card-lift group rounded-3xl bg-white border border-line hover:border-teal/40 p-7 flex flex-col">' +
      '<div class="flex items-start justify-between mb-5">' +
        '<span class="grid place-items-center w-12 h-12 rounded-2xl bg-ink text-teal group-hover:bg-teal group-hover:text-white transition-colors">' + svgIcon(prod.ikon) + '</span>' +
        '<span class="text-[10.5px] uppercase tracking-wide font-semibold text-tealdk bg-tealdk/10 border border-tealdk/20 rounded-full px-2.5 py-1">' + LABEL_FUNGSI[prod.fungsi] + '</span>' +
      '</div>' +
      '<h3 class="font-display text-lg text-ink leading-snug">' + prod.judul + '</h3>' +
      '<p class="mt-2 text-sm text-ink/55 leading-relaxed flex-1">' + prod.desc + '</p>' +
      '<div class="mt-5 pt-4 border-t border-line flex flex-wrap gap-1.5">' + segBadges + '</div>' +
    '</article>'
  );
}

function render() {
  const grid = document.getElementById("grid");
  const empty = document.getElementById("empty");
  const count = document.getElementById("count");

  const items = PRODUK.filter(p =>
    (curFungsi === "all" || p.fungsi === curFungsi) &&
    (curSegmen === "all" || p.segmen.includes(curSegmen))
  );

  grid.innerHTML = items.map(cardHTML).join("");
  count.textContent = items.length;
  empty.classList.toggle("hidden", items.length !== 0);
}

/* ---------- Tombol filter ---------- */
function wire(groupId, attr, setter) {
  const group = document.getElementById(groupId);
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
  wire("filter-segmen", "data-seg", v => (curSegmen = v));
  render();
});
