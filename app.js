document.getElementById('year').textContent = new Date().getFullYear();
const buttons = [...document.querySelectorAll('[data-case]')];
const panels = [...document.querySelectorAll('[data-panel]')];
buttons.forEach(button => button.addEventListener('click', () => {
  buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  panels.forEach(panel => { panel.hidden = panel.dataset.panel !== button.dataset.case; });
}));
// Reveal sections as they enter the viewport; retain static content when motion is reduced.
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const reveals = document.querySelectorAll('[data-reveal]');
  document.documentElement.classList.add('motion-ready');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    });
  }, { threshold: .1, rootMargin: '0px 0px 30px 0px' });
  reveals.forEach(el => observer.observe(el));
}
