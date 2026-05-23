# MAHENORA — Website (Siap Deploy)

Website statis MAHENORA. Tailwind CSS sudah **di-compile** (bukan CDN), jadi
tidak ada lagi peringatan `cdn.tailwindcss.com should not be used in production`.

---

## 📦 Isi Paket

```
mahenora-deploy/
├── dist/                      ← FOLDER YANG DI-UPLOAD KE HOSTING
│   ├── index.html
│   ├── katalog.html           (halaman katalog lengkap + filter)
│   ├── robots.txt
│   ├── .htaccess              (caching & kompresi — untuk Apache/cPanel/aaPanel)
│   └── assets/
│       ├── styles.css         (Tailwind hasil compile, sudah minify ~24 KB)
│       ├── main.js            (animasi nav & reveal)
│       └── img/               (7 foto: hero + 6 produk)
│
├── src/
│   └── input.css              (sumber CSS — untuk rebuild)
├── tailwind.config.js         (konfigurasi warna/font)
├── package.json
└── README.md                  (file ini)
```

> **Untuk go-live, cukup upload SELURUH ISI folder `dist/`** ke direktori web
> Anda (mis. `public_html`). Folder `src/`, `tailwind.config.js`, dan
> `package.json` **tidak perlu** di-upload — itu hanya untuk rebuild di lokal.

---

## 🚀 Cara Deploy

### A. cPanel / aaPanel (paling umum)
1. Login ke File Manager.
2. Masuk ke `public_html` (atau folder domain Anda).
3. Upload **seluruh isi** folder `dist/` (termasuk folder `assets/` dan file `.htaccess`).
4. Selesai. Buka domain Anda di browser.

> Catatan: file `.htaccess` kadang tersembunyi. Aktifkan "Show Hidden Files"
> di File Manager agar ikut ter-upload.

### B. Nginx (mis. di Proxmox/VPS sendiri)
- Arahkan `root` server block ke folder `dist/`.
- `.htaccess` TIDAK berlaku di Nginx — gunakan blok caching Nginx jika perlu
  (lihat bagian "Caching Nginx" di bawah).

---

## 🛠️ Cara Rebuild CSS (kalau mengubah desain)

Butuh Node.js (v18+). Sekali saja:

```bash
npm install
```

Lalu setiap kali selesai mengedit kelas Tailwind di `dist/index.html`:

```bash
npm run build      # compile sekali (minify)
# atau
npm run watch      # auto-compile setiap ada perubahan
```

Hasilnya otomatis ter-update di `dist/assets/styles.css`.

> ⚠️ Jika Anda menambah kelas Tailwind lewat **JavaScript** (bukan di HTML),
> tambahkan kelas itu ke `safelist` di `tailwind.config.js` supaya tidak
> terhapus saat build.

---

## 🗂️ Menambah / Mengubah Produk di Katalog

Semua produk katalog disimpan sebagai data di **`dist/assets/katalog.js`**
(array `PRODUK` di bagian atas file). Untuk menambah produk, salin satu blok
dan ubah isinya:

```js
{
  judul: "Nama Solusi Baru",
  desc: "Deskripsi singkat 1-2 kalimat.",
  fungsi: "monitoring",        // keamanan | monitoring | tracking | otomasi | aplikasi
  segmen: ["sekolah", "gov"],  // gabungan: sekolah | gov | umum
  ikon: "temp",                // lihat daftar ikon di fungsi svgIcon()
},
```

Simpan file — selesai. Tidak perlu rebuild CSS untuk perubahan data produk
(CSS hanya perlu di-rebuild jika Anda menambah **kelas Tailwind baru**).

---

## ✅ Yang Masih Perlu Anda Ganti

1. **Nomor WhatsApp** — saat ini placeholder `6280000000000`
   (muncul 2× di `index.html`). Ganti dengan nomor asli, format internasional
   tanpa tanda `+` (contoh: `628123456789`).

2. **Foto produk** — 7 foto di `assets/img/` saat ini foto stok (Unsplash,
   lisensi bebas). Untuk hasil paling meyakinkan, ganti dengan **foto asli
   perangkat & instalasi MAHENORA** (RFID gate, bus, sensor data center, dll).
   Cukup timpa file dengan nama yang sama:
   - `hero-office.jpg` (hero)
   - `edu-rfid.jpg`, `edu-bus.jpg`, `edu-lab.jpg` (Smart School)
   - `gov-fleet.jpg`, `gov-datacenter.jpg`, `gov-esurat.jpg` (Smart Gov)

3. **(Opsional) Domain & favicon** — tambahkan favicon dan isi meta Open Graph
   `og:image`/`og:url` di `<head>` untuk tampilan share yang rapi.

---

## ⚡ Caching Nginx (opsional, jika pakai Nginx)

```nginx
location ~* \.(css|js|jpg|jpeg|png|svg)$ {
    expires 6M;
    add_header Cache-Control "public";
}
```

---

© 2025 MAHENORA. Self-Hosted · No Vendor Lock-In · SLA Lokal 4 Jam.
