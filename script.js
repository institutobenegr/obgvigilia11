(function () {
  'use strict';
  const config = window.VIGILIA_OBRIGADO;
  const destinations = {group:config.groupUrl,checkout:config.checkoutUrl,support:config.supportUrl};
  document.querySelectorAll('[data-link]').forEach(link => {
    const destination = destinations[link.dataset.link];
    try {
      const url = new URL(destination);
      if (url.protocol === 'https:') link.href = url.href;
    } catch (_) { /* Keep the working HTML link if config is invalid. */ }
  });
  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduceMotion && 'IntersectionObserver' in window) {
    const elements = document.querySelectorAll('[data-reveal]');
    const observer = new window.IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {threshold:0.06});
    document.documentElement.classList.add('motion');
    elements.forEach(element => observer.observe(element));
  }
  // No countdown, automatic charge, payment confirmation or forced redirect.
})();
