// Navbar color change effect logic
const navbar = document.querySelector(".navbar");
document.addEventListener("scroll", () => {
  if (window.scrollY >= 700) {
    navbar.classList.add("navbar-color");
  } else {
    navbar.classList.remove("navbar-color");
  }
});

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

let position;
// Next and previous toggle buttons for the slider
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
        break;
    }
  });
});

const prevBtn = document.querySelector(".prev");
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
