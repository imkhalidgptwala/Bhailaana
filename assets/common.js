/* ============ ACTIVE NAV LINK ============ */
(function highlightActiveNav(){
  const path = window.location.pathname.replace(/\/index\.html$/, '/');
  document.querySelectorAll('.nav-links a[data-page], .mobile-menu a[data-page]').forEach(a=>{
    const page = a.getAttribute('data-page');
    const isHome = page === 'home' && (path === '/' || path === '');
    const isMatch = page !== 'home' && page !== 'contact' && path.startsWith('/' + page);
    a.classList.toggle('active', isHome || isMatch);
  });
})();

/* ============ MOBILE MENU ============ */
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
hamburgerBtn.addEventListener('click', ()=>{
  mobileMenu.classList.toggle('open');
  hamburgerBtn.classList.toggle('open');
});
mobileMenu.addEventListener('click', e=>{
  if(e.target.tagName === 'A') mobileMenu.classList.remove('open');
});

/* ============ NEWSLETTER ============ */
document.getElementById('newsletterForm').addEventListener('submit', e=>{
  e.preventDefault();
  const btn = e.target.querySelector('button');
  const original = btn.textContent;
  btn.textContent = 'Subscribed ✓';
  document.getElementById('newsletterEmail').value = '';
  setTimeout(()=>{ btn.textContent = original; }, 2200);
});

/* ============ BACK TO TOP ============ */
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', ()=>{
  backToTop.classList.toggle('show', window.scrollY > 600);
});
backToTop.addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}));

/* ============ SCROLL REVEAL ============ */
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){ entry.target.classList.add('in'); io.unobserve(entry.target); }
  });
}, {threshold:0.12});
revealEls.forEach(el=>io.observe(el));
