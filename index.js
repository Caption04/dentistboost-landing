const openMenu = document.querySelector(".open-menu");
const sideBar = document.querySelector(".sidebar")
openMenu.addEventListener("click", () => {
    sideBar.classList.add("open");
})