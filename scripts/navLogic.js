let navButton = document.querySelector("#nav-button");
let navSymbol = document.querySelector("#nav-button-symbol");
let menuContainer = document.querySelector("#menu");
let menuContent = document.querySelector("#menu-content");
let filterBar = document.querySelector("#filter-bar");
let filterIndicator = document.querySelector("#filter-indicator");

export function empowerNav() {
    navButton.addEventListener("click", toggleNav, false);
    filterBar.addEventListener("click", depress, false);
    menuContainer.opened = false;
    filterBar.opened = false;
}

function toggleNav() {
    if(!menuContainer.opened){
        menuContainer.style.maxHeight = menuContent.offsetHeight + 20 + "px";
        menuContainer.opened = true;
        navButton.classList.add("shadows-clicked");
        navSymbol.textContent = "-"
    }
    else{
        menuContainer.style.maxHeight = "0px";
        menuContainer.opened = false;
        navButton.classList.remove("shadows-clicked");
        navSymbol.textContent = "+"
    }
}

function depress() {
    if(!filterBar.opened) {
        filterBar.classList.add("shadows-clicked");
        filterIndicator.textContent = "-";
        filterBar.opened = true;
    } else {
        filterBar.classList.remove("shadows-clicked");
        filterIndicator.textContent = "+";
        filterBar.opened = false;
    }
}
