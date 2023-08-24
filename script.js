const menuSwitch = document.getElementById("menuSwitch");
const dropMenu = document.getElementById("dropMenu");
const dropMenuSpacer = document.getElementById("dropMenuSpacer");

const menuItem = document.querySelectorAll(".menu-item");
const returnTop = document.getElementById("returnTop");

var scrollPositionY;

menuSwitch.addEventListener("click", () => {
  if (dropMenu.style.right === "0px") {
    dropMenu.style.right = "-100vw";
    returnTop.style.display = "flex";
  } else {
    dropMenu.style.right = "0px";
    returnTop.style.display = "none";
  }
});

dropMenuSpacer.addEventListener("click", () => {
  dropMenu.style.right = "-100vw";
  returnTop.style.display = "flex";
});

menuItem.forEach((item) => {
  item.addEventListener("click", () => {
    dropMenu.style.right = "-100vw";
    returnTop.style.display = "flex";
  });
});

window.addEventListener("scroll", () => {
  if (dropMenu.style.right === "0px") {
    dropMenu.style.right = "-100vw";
    returnTop.style.display = "flex";
  }
});

/* Introduction appearance */
const displayIntro = false;
const introduction = document.getElementById("introduction");
let introFinish = false;
const introductionHeader = document.getElementById("introduction_header");
let headIndex = 0;
const introduction1 = document.getElementById("introduction_1");
let bodyIndex = 0;

function introType() {
  var textIntroduction = "Hello World!";

  var textIntro1 =
    "This is Mark David Panganiban and this is my first KodeGo project MP1.";
  if (displayIntro === true) {
    if (headIndex < textIntroduction.length) {
      introductionHeader.textContent += textIntroduction.charAt(headIndex);
      headIndex++;
      setTimeout(introType, 150);
    } else {
      if (bodyIndex < textIntro1.length) {
        introduction1.textContent += textIntro1.charAt(bodyIndex);
        bodyIndex++;
        setTimeout(introType, 100);
      } else if (introFinish === false) {
        introduction.style.opacity = 0;
        introFinish = true;
        setTimeout(introType, 700);
      } else {
        introduction.style.display = "none";
        console.log("intro finish");
      }
    }
  } else {
    introduction.style.display = "none";
    console.log("skip intro");
  }

  // for (let i = 0; i < textIntroduction.length; i++) {
  //   setTimeout(() => {
  //     introductionHeader.textContent += textIntroduction.charAt(i);
  //   }, i * 200);
  // }

  // setTimeout(() => {
  //   for (let i = 0; i < textIntro1.length; i++) {
  //     setTimeout(() => {
  //       introduction1.textContent += textIntro1.charAt(i);
  //     }, i * 100);
  //   }

  //   setTimeout(() => {
  //     introduction.style.transition = "opacity 0.5s ease-in-out";
  //     introduction.style.opacity = 0;
  //   }, textIntro1.length * 110);
  // }, textIntroduction.length * 200);
}

introType();

/* Carousel */

const carousel = document.querySelector(".carousel-skill-view");
let currentIndex = 0;
const slides = carousel.querySelectorAll(".carousel-skill-slide");
const numDivs = slides.length;
let slideInterval;

function changeSlide(index) {
  currentIndex = (index + numDivs) % numDivs;
  updateCarousel();
}

function updateCarousel() {
  const offset = -currentIndex * 100; // Each slide is 100% wide
  carousel.style.transform = `translateX(${offset}%)`;
}

function startCarousel() {
  slideInterval = setInterval(() => {
    changeSlide(currentIndex + 1);
  }, 3000); // Slide every 3 seconds
}

startCarousel();
