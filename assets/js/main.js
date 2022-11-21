var openMobile = document.querySelector(".nav__open");
var closeMobile = document.querySelector(".nav__close");
var subMenu = document.querySelector(".nav__submenu");

openMobile.addEventListener("click", openMenu);
closeMobile.addEventListener("click", closeMenu);

function openMenu () {
    closeMobile.style.display = "flex";
    subMenu.style.display = "inline";
}

function closeMenu () {
    closeMobile.style.display = "none";
    subMenu.style.display = "none";
}