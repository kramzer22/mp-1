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
