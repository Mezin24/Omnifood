const btnMenu = document.querySelector(".btn-mobile-nav");
const header = document.querySelector("header");

btnMenu.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});
