// 全站共用：行動版漢堡選單開合
(function () {
  var hamburger = document.getElementById('navHamburger');
  var navLinks = document.getElementById('navLinks');
  if (!hamburger || !navLinks) return;
  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
})();
