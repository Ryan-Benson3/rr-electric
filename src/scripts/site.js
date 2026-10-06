(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduced) {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      }),
      { threshold: 0.15 }
    );
    revealEls.forEach((el) => io.observe(el));
    // Safety net: if anything is still hidden after 2.5s, show it
    setTimeout(() => revealEls.forEach((el) => el.classList.add('in')), 2500);
  } else {
    revealEls.forEach((el) => el.classList.add('in'));
  }

  /* ---------- Footer year ---------- */
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
