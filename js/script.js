/////////////////////////////////////////////
///////// MENU BUTTON

const btnMenu = document.querySelector(".btn-mobile-nav");
const header = document.querySelector("header");

btnMenu.addEventListener("click", function () {
  closeMobMenu();
});

function closeMobMenu() {
  header.classList.toggle("nav-open");
}
/////////////////////////////////////////////
///////// CURRENT YEAR

const yearEl = document.querySelector(".year");
yearEl.textContent = new Date().getFullYear();

/////////////////////////////////////////////
///////// SMOOTH SCROLLING ANIMATION

const links = document.querySelectorAll("a:link");
links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // goes up
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    const el = document.querySelector(href);
    // goes to section
    if (href !== "#" && href.startsWith("#")) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    // close mobile menu
    if (e.target.classList.contains("header-menu-item")) closeMobMenu();
  });
});

/////////////////////////////////////////////
///////// STICKY NAVIGATION
const sectionHeroEl = document.querySelector(".section-hero");
const observer = new IntersectionObserver(
  function (entries) {
    const [ent] = entries;
    if (!ent.isIntersecting) {
      document.querySelector(".header").classList.add("sticky");
    }
    if (ent.isIntersecting) {
      document.querySelector(".header").classList.remove("sticky");
    }
  },
  {
    // in the viewport
    root: null,
    threshold: 0,
    rootMargin: "-126px",
    // mean no el in the viewport, 0%. If 1, mean all el inside the viewport
  }
);
observer.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
