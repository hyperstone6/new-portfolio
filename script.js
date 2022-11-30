// Navbar color change effect logic
const navbar = document.querySelector(".navbar");
document.addEventListener("scroll", () => {
  if (window.scrollY >= 700) {
    navbar.classList.add("navbar-color");
  } else {
    navbar.classList.remove("navbar-color");
  }
});

const hamburgerBtn = document.querySelector(".hamburger-button");

const toggleMenu = (e) => {
  if (e.target.checked) {
    e.target.parentElement.children[4].classList.remove("nav-links-container");
    e.target.parentElement.children[4].classList.add("nav-links-active");
  } else {
    e.target.parentElement.children[4].classList.add("nav-links-container");
    e.target.parentElement.children[4].classList.remove("nav-links-active");
  }
};

function closeMenu(e) {
  let containsActiveClass = false;
  let reviewNode = e.target;
  while (reviewNode.nodeName !== 'BODY') {
    if (reviewNode.classList.contains('hamburger-button')) {
      containsActiveClass = true;
      break;
    } 
    reviewNode = reviewNode.parentNode;
  } 
  if (containsActiveClass === false) {
    hamburgerBtn.parentElement.children[4].classList.remove("nav-links-active");
    hamburgerBtn.parentElement.children[4].classList.add("nav-links-container");
    hamburgerBtn.checked = false
  }
}
document.body.addEventListener('click', closeMenu, false);

hamburgerBtn.addEventListener("click", toggleMenu);

// Automatic typing effect logic
document.addEventListener("DOMContentLoaded", () => {
  new TypeIt("#element", {
    speed: 120,
    loop: true,
    strings: [
      "Front-end Developer...",
      "Account Manager...",
      "Problem solver...",
      "Polyglot...",
      "Chronic learner...",
      "Team player...",
      "Communicator...",
      "Technophile...",
      "Coffeeholic...",
    ],
    breakLines: false,
  }).go();
});

// Next and previous toggle buttons for the slider
let position;
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

const projects = Array.from(document.querySelectorAll(".project"));
nextBtn.addEventListener("click", () => {
  projects.forEach((project) => {
    position = project.style;
    switch (position.transform) {
      case "":
        position.transform = "translateX(-100%)";
        break;
      case "translateX(-100%)":
        position.transform = "translateX(-200%)";
        break;
      case "translateX(-200%)":
        position.transform = "translateX(-300%)";
        break;
      case "translateX(-300%)":
        position.transform = "translateX(-400%)";
        // nextBtn.style.backgroundColor = 
        break;
    }
  });
});

prevBtn.addEventListener("click", () => {
  projects.forEach((project) => {
    position = project.style;
    switch (position.transform) {
      case "translateX(-400%)":
        position.transform = "translateX(-300%)";
        break;
      case "translateX(-300%)":
        position.transform = "translateX(-200%)";
        break;
      case "translateX(-200%)":
        position.transform = "translateX(-100%)";
        break;
      case "translateX(-100%)":
        position.transform = "";
        break;
    }
  });
});
