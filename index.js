const openMenu = document.querySelector(".open-menu");
const sideBar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");
openMenu.addEventListener("click", () => {
    sideBar.classList.add("open");
    overlay.classList.add("open");
})