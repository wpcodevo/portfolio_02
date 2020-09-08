/*
=========================
Navigation
=========================
*/
const navOpen = document.querySelector(".hamburger");
const navContainer = document.querySelector(".nav__menu");
const navList = document.querySelector(".nav__list");

// Open and Close Navbar
navOpen.addEventListener("click", () => {
  const listHeight = navList.getBoundingClientRect().height;
  const containerHeight = navContainer.getBoundingClientRect().height;
  if (containerHeight === 0) {
    navContainer.style.height = `${listHeight}px`;
  } else {
    navContainer.style.height = "0px";
  }
});

// Fix Navbar
const navBar = document.querySelector(".navigation");
window.addEventListener("scroll", () => {
  const navHeight = navBar.getBoundingClientRect().height;
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > navHeight) {
    navBar.classList.add("fix__nav");
  } else {
    navBar.classList.remove("fix__nav");
  }
});

// Color Switch
const root = document.documentElement;
const colorSwitch = document.querySelector(".color__switch");
const widget = document.querySelector(".color__widget");

widget.addEventListener("click", e => {
  const switchWidth = colorSwitch.getBoundingClientRect().left;
  if (switchWidth < 0) {
    colorSwitch.style.left = "0";
  } else {
    colorSwitch.style.left = "-7rem";
  }
});

// function targetClick(target) {
//   const el = document.querySelector(target);
//   el.addEventListener("click", () => {
//     changeColor("--default", "#e04949", "--default2", "#e61616");
//     changeColor("--default", "#2d84fb", "--default2", "#2706df");
//     changeColor("--default", "#67c56e", "--default2", "#08aa12");
//     changeColor("--default", "#662e9b", "--default2", "#4c0094");
//     changeColor("--default", "#f89d36", "--default2", "#db7807");
//   });
// }

// targetClick(".default");
// targetClick(".blue");
// targetClick(".light-green");
// targetClick(".purple");
// targetClick(".yellow");

// function changeColor(default1, default2, default3, default4) {
//   root.style.setProperty(default1, default2);
//   root.style.setProperty(default3, default4);
// }

// AOS
// AOS.init();

// Typo
new TypeIt("#simpleType", {
  speed: 120,
  loop: true,
  waitUntilVisible: true,
})
  .type("Designer", { delay: 400 })
  .pause(500)
  .delete(9)
  .type("Developer", { delay: 400 })
  .pause(500)
  .delete(9)
  .go();
