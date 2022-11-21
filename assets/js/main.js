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


// Submenu arrows
var arrowDown = document.querySelector(".nav__arrow--down");
var arrowDowns = document.querySelector(".nav__arrow--downs");

var subList = document.querySelector(".nav__ul--son");
var companyList = document.querySelector(".nav__ul--company");

var arrowUp = document.querySelector(".nav__arrow--up");
var arrowUps = document.querySelector(".nav__arrow--ups");

// Primeiro submenu
arrowDown.addEventListener("click", arrowOpen);
function arrowOpen () {
    subList.style.display = "block";
    arrowUp.style.display = "block";
    arrowDown.style.display = "none";
}


arrowUp.addEventListener("click", arrowClose);
function arrowClose () {
    subList.style.display = "none";
    arrowUp.style.display = "none";
    arrowDown.style.display = "inline";
}


// Segundo submenu
arrowDowns.addEventListener("click", arrowTop);
function arrowTop () {
    companyList.style.display = "block";
    arrowUps.style.display = "block";
    arrowDowns.style.display = "none";
}


arrowUps.addEventListener("click", arrowbottom)
function arrowbottom () {
    companyList.style.display = "none";
    arrowUps.style.display = "none";
    arrowDowns.style.display = "inline";
}