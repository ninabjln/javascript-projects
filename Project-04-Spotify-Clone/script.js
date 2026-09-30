/* ====== Mobile Menu ====== */

const mobileMenu = document.querySelector(".mobile-menu-js");
const menuToggle = document.querySelector(".menu-toggle-js");
closeMenu = document.querySelector(".menu-close-js");

menuToggle.addEventListener("click", showMenu);
closeMenu.addEventListener("click", hideMenu);

function showMenu() {
  mobileMenu.style.display = "flex";
}
function hideMenu() {
  mobileMenu.style.display = "none";
}
