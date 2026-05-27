// MAHENORA — interaksi ringan (nav scroll + reveal on scroll)
(function () {
  var nav = document.getElementById('nav');
  function onScroll() {
    if (!nav) return;
    if (window.scrollY > 30) {
      nav.classList.add('bg-white/85', 'backdrop-blur-md', 'border-b', 'border-line', 'shadow-sm');
    } else {
      nav.classList.remove('bg-white/85', 'backdrop-blur-md', 'border-b', 'border-line', 'shadow-sm');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
})();
