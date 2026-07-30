/* Shared behavior for the single-page scrolling site.
   Reads from window.SITE_CONFIG (config.js), which must load before this file. */

(function () {
  const cfg = window.SITE_CONFIG || {};

  // ---------- background petals ----------
  function buildPetals() {
    const wrap = document.getElementById('petals');
    if (!wrap) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const count = window.innerWidth < 600 ? 10 : 18;
    for (let i = 0; i < count; i++) {
      const el = document.createElement('div');
      el.className = 'petal';
      const isBloom = Math.random() > 0.35;
      const size = isBloom ? 4 + Math.random() * 4 : 6 + Math.random() * 6;
      el.style.width = size + 'px';
      el.style.height = size + 'px';
      el.style.left = Math.random() * 100 + 'vw';
      el.style.background = isBloom ? 'rgba(251,247,240,0.55)' : 'rgba(140,28,43,0.4)';
      el.style.setProperty('--drift', (Math.random() * 80 - 40) + 'px');
      el.style.animationDuration = (14 + Math.random() * 14) + 's';
      el.style.animationDelay = (Math.random() * -20) + 's';
      wrap.appendChild(el);
    }
  }

  // ---------- scroll reveal ----------
  function initReveal() {
    const els = document.querySelectorAll('.reveal');
    if (!els.length) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in-view'); });
    }, { threshold: 0.25 });
    els.forEach(el => io.observe(el));
  }

  // ---------- passive progress dots ----------
  function initProgressDots() {
    const mount = document.getElementById('progressDots');
    const chapters = document.querySelectorAll('.chapter[id]');
    if (!mount || !chapters.length) return;
    chapters.forEach(ch => {
      const dot = document.createElement('div');
      dot.className = 'dot';
      dot.dataset.for = ch.id;
      mount.appendChild(dot);
    });
    const dots = mount.querySelectorAll('.dot');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          dots.forEach(d => d.classList.toggle('active', d.dataset.for === e.target.id));
        }
      });
    }, { threshold: 0.5 });
    chapters.forEach(ch => io.observe(ch));
  }

  // ---------- fill simple text bindings: <span data-bind="herName"> ----------
  function bindText() {
    document.querySelectorAll('[data-bind]').forEach(el => {
      const key = el.getAttribute('data-bind');
      if (cfg[key] !== undefined) el.textContent = cfg[key];
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    buildPetals();
    bindText();
    initReveal();
    initProgressDots();
  });

  window.__reinitReveal = initReveal;
})();
