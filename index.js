const openMenu = document.querySelector(".open-menu");
const sideBar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");
openMenu.addEventListener("click", () => {
    sideBar.classList.add("open");
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
})

const closemenu = document.querySelector(".close-menu");
closemenu.addEventListener("click", () => {
    sideBar.classList.remove("open");
    overlay.classList.remove("open");
    document.body.style.overflow = "auto";
})