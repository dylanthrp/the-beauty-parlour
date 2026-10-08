/* ============================================================
   THE BEAUTY PARLOUR — site.js
   Minimal client-side logic. No frameworks.
   - Footer year
   - Book button placeholder (until Fresha/Square is wired up)
   - Hash nav active state
   ============================================================ */

(function () {
  'use strict';

  // ---- 1) Current year in footer  ----
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ---- 2) Book-now button: placeholder behavior  ----
  // When the booking system is wired up (Fresha, Square Appointments,
  // Cal.com, or a custom calendar), replace this with a redirect.
  // Until then, the button shows a notice and the user can call instead.
  const bookBtn = document.getElementById('bookNowBtn');
  if (bookBtn) {
    bookBtn.addEventListener('click', function (e) {
      e.preventDefault();
      // Replace this with your real booking URL when ready, e.g.:
      //   window.open('https://thebeautyparlour.fresha.com', '_blank');
      const card = bookBtn.closest('.book-card');
      const note = card ? card.querySelector('.book-note') : null;
      if (note) {
        const orig = note.innerHTML;
        note.innerHTML = '<strong>Booking system coming soon.</strong> For now, please call <a href="tel:+13134258000" style="color:var(--c-rose-dark); font-weight:600;">(313) 425-8000</a> to book. We\'ll be online for booking shortly.';
        note.style.color = 'var(--c-ink)';
        // Restore after a few seconds so the user can re-click
        setTimeout(function () {
          note.innerHTML = orig;
          note.style.color = '';
        }, 8000);
      }
    });
  }

  // ---- 3) Section nav active state  ----
  const navLinks = document.querySelectorAll('.topnav a[href^="#"]');
  if (navLinks.length) {
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.forEach(function (l) { l.removeAttribute('aria-current'); });
        link.setAttribute('aria-current', 'page');
      });
    });
    if (location.hash) {
      const initial = document.querySelector('.topnav a[href="' + location.hash + '"]');
      if (initial) initial.setAttribute('aria-current', 'page');
    }
  }
})();
