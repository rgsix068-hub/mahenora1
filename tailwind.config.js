/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.html", "./src/**/*.html", "./dist/**/*.js"],
  // Kelas yang ditambahkan secara dinamis lewat JavaScript (main.js)
  // harus di-safelist agar tidak terhapus saat build minify.
  safelist: [
    "bg-white/85", "backdrop-blur-md", "border-b", "border-line", "shadow-sm",
    // kelas kartu katalog yang dibangun dinamis di assets/katalog.js
    "card-lift", "group", "rounded-3xl", "rounded-2xl", "rounded-full",
    "bg-white", "bg-ink", "bg-tealdk/10", "bg-line/60",
    "text-teal", "text-tealdk", "text-white", "text-ink", "text-ink/55",
    "border", "border-tealdk/20", "hover:border-teal/40",
    "group-hover:bg-teal", "group-hover:text-white", "transition-colors",
    "uppercase", "tracking-wide", "font-semibold", "font-medium", "font-display",
    "flex", "flex-col", "flex-1", "flex-wrap", "items-start", "justify-between",
    "grid", "place-items-center", "leading-snug", "leading-relaxed",
    "w-12", "h-12", "px-2.5", "px-2", "py-1", "py-0.5", "mb-5", "mt-2", "mt-5", "pt-4", "gap-1.5",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fraunces', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        ink:    '#0C2034',
        navy:   '#103754',
        deep:   '#0E4D70',
        steel:  '#2C7DA8',
        teal:   '#0FA3A0',
        tealdk: '#0B807E',
        sky:    '#EAF4F7',
        paper:  '#FBFDFE',
        line:   '#E4EDF1',
        gold:   '#D49B3E',
        mist:   '#E9F2F6',
      },
      letterSpacing: { tightish: '-0.025em', wide2: '0.2em' },
      boxShadow: {
        soft:  '0 28px 70px -34px rgba(16,55,84,.30)',
        card:  '0 14px 44px -26px rgba(16,55,84,.28)',
        photo: '0 30px 60px -28px rgba(16,55,84,.40)',
      },
    },
  },
  plugins: [],
};
