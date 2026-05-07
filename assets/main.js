/* ===== Mobile Navigation Toggle + UX helpers ===== */
(function () {
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('navMenu');
  const cta = document.getElementById('navCta');
  if (!toggle || !menu) return;

  function setOpen(next) {
    menu.classList.toggle('open', next);
    if (cta) cta.classList.toggle('open', next);
    toggle.setAttribute('aria-expanded', String(next));
    toggle.setAttribute('aria-label', next ? 'Menü schließen' : 'Menü öffnen');
  }

  toggle.addEventListener('click', function () {
    setOpen(!menu.classList.contains('open'));
  });

  menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      setOpen(false);
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setOpen(false);
  });

  document.addEventListener('click', function (e) {
    if (!menu.classList.contains('open')) return;
    const target = e.target;
    if (!(target instanceof Element)) return;
    if (target.closest('#navMenu') || target.closest('#navToggle') || target.closest('#navCta')) return;
    setOpen(false);
  });
})();

/* ===== Active link highlighting ===== */
(function () {
  const nav = document.getElementById('navMenu');
  if (!nav) return;

  const currentPath = (location.pathname || '').split('/').pop() || 'index.html';

  nav.querySelectorAll('a[href]').forEach(function (a) {
    const href = a.getAttribute('href') || '';

    // In-page anchors should not be marked as current on sub-pages.
    if (href.startsWith('#')) return;

    const target = href.split('/').pop();
    if (!target) return;

    const isHome = (currentPath === '' || currentPath === 'index.html') && (target === '' || target === 'index.html');
    const isMatch = isHome || target === currentPath;

    if (isMatch) a.setAttribute('aria-current', 'page');
    else a.removeAttribute('aria-current');
  });
})();

/* ===== Highlight today's opening hours (optional on pages that have it) ===== */
(function () {
  const list = document.getElementById('hoursList');
  if (!list) return;
  const today = new Date().getDay();
  const todayItem = list.querySelector('li[data-day="' + today + '"]');
  if (todayItem) todayItem.classList.add('today');
})();

/* ===== Intersection Observer for reveal animations ===== */
(function () {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('visible'); });
    return;
  }
  const obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
  document.querySelectorAll('.reveal').forEach(function (el) { obs.observe(el); });
})();
