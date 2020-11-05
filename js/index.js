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
const topLink = document.querySelector(".goto-top");
window.addEventListener("scroll", () => {
  const navHeight = navBar.getBoundingClientRect().height;
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > navHeight) {
    navBar.classList.add("fix__nav");
  } else {
    navBar.classList.remove("fix__nav");
  }

  if (scrollHeight > 500) {
    topLink.classList.add("show");
  } else {
    topLink.classList.remove("show");
  }
});

// Smooth Scroll
const links = document.querySelectorAll(".scroll-link");
const linksContainer = document.querySelector(".nav__list");

links.forEach(link => {
  link.addEventListener("click", e => {
    // Prevent Default
    e.preventDefault();
    // Scroll to a specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const el = document.getElementById(id);

    const navHeight = navBar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixNav = navBar.classList.contains("fix__nav");
    let position = el.offsetTop - navHeight;

    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });

    navContainer.style.height = "0";
  });
});

// AOS
AOS.init();

// Typo
new TypeIt("#type1", {
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

new TypeIt("#type2", {
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

// Glidejs
const slider1 = document.querySelector(".glide");

if (slider1) {
  new Glide(slider1, {
    type: "carousel",
    startAt: 0,
    autoplay: 3000,
    hoverpause: true,
    perView: 2,
    animationDuration: 800,
    animationTimingFunc: "linear",
    breakpoints: {
      996: {
        perView: 1,
      },
    },
  }).mount();
}
