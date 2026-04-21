console.log("Portfolio loaded");

/* =========================
   CUSTOM CURSOR
   ========================= */
const cursor     = document.getElementById('cursor');
const cursorRing = document.getElementById('cursor-ring');

let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top  = my + 'px';
});

(function animateRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  cursorRing.style.left = rx + 'px';
  cursorRing.style.top  = ry + 'px';
  requestAnimationFrame(animateRing);
})();

document.querySelectorAll('a, button, .skill-tile, .copy-btn').forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
});

/* =========================
   NAVBAR SCROLL STATE
   ========================= */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* =========================
   SCROLL REVEAL
   ========================= */
const revealEls = document.querySelectorAll('.reveal');
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => revealObs.observe(el));

/* =========================
   COPY EMAIL BUTTONS
   ========================= */
document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const id     = btn.getAttribute('data-copy');
    const target = document.getElementById(id);
    if (!target) return;
    const text = target.textContent.trim();
    if (!navigator.clipboard) { console.warn('Clipboard API not available'); return; }
    navigator.clipboard.writeText(text).then(() => {
      const original = btn.textContent;
      btn.textContent = '✔ copied';
      setTimeout(() => (btn.textContent = original), 1200);
    });
  });
});

/* =========================
   HERO CODE TABS
   ========================= */
const codeTabs   = document.querySelectorAll('.code-tab');
const codeBlocks = document.querySelectorAll('.code-block');

codeTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const lang     = tab.dataset.lang;
    const targetId = `code-${lang}`;
    codeTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    codeBlocks.forEach(block => {
      block.classList.toggle('active', block.id === targetId);
    });
  });
});

/* =========================
   CONTACT FORM (DEMO)
   ========================= */
function handleSubmit(event) {
  event.preventDefault();
  const status = document.getElementById('form-status');
  if (status) {
    status.textContent = '✔ Thanks for reaching out! This demo form doesn\'t send emails yet.';
  }
}
