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

// AOS
AOS.init();
