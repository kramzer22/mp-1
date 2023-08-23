const menuSwitch = document.getElementById("menuSwitch");
const dropMenu = document.getElementById("dropMenu");
const dropMenuSpacer = document.getElementById("dropMenuSpacer");

const menuItem = document.querySelectorAll(".menu-item");
const returnTop = document.getElementById("returnTop");
menuSwitch.addEventListener("click", () => {
  if (dropMenu.style.right === "0") {
    // dropMenu.style.display = "flex";
    dropMenu.style.right = "-100vw";
    returnTop.style.display = "flex";

    console.log("drop menu display flex");
  } else {
    // dropMenu.style.display = "none";
    dropMenu.style.right = "0";
    returnTop.style.display = "none";

    console.log("drop menu display none");
  }
});

dropMenuSpacer.addEventListener("click", () => {
  dropMenu.style.right = "-100vw";
  returnTop.style.display = "flex";
  console.log("drop menu display none");
});

menuItem.forEach((item) => {
  item.addEventListener("click", () => {
    dropMenu.style.right = "-100vw";
    returnTop.style.display = "flex";
    console.log("drop menu display none");
  });
});
