/* Minimal standalone script for the embedded main-site nav (see nav-embed.css).
   Only handles the mobile hamburger toggle — no dependency on page-specific
   elements like newsletter forms or a back-to-top button. */
(function(){
  var hamburgerBtn = document.getElementById('bhHamburgerBtn');
  var mobileMenu = document.getElementById('bhMobileMenu');
  if(!hamburgerBtn || !mobileMenu) return;
  hamburgerBtn.addEventListener('click', function(){
    mobileMenu.classList.toggle('open');
    hamburgerBtn.classList.toggle('open');
  });
  mobileMenu.addEventListener('click', function(e){
    if(e.target.tagName === 'A') mobileMenu.classList.remove('open');
  });
})();
