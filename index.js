const openMenu = document.querySelector(".open-menu");
const sideBar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");
const closeMenu = document.querySelector(".close-menu");
openMenu.addEventListener("click", () => {
  sideBar.classList.add("open");
  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
  document.documentElement.style.overflow = "hidden"; // add this
});

closemenu.addEventListener("click", () => {
  sideBar.classList.remove("open");
  overlay.classList.remove("open");
  document.body.style.overflow = "auto";
  document.documentElement.style.overflow = "auto"; // add this
});