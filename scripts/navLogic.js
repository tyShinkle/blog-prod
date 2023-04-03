let navContainer = document.querySelector("#nav-container");
let navBar = document.querySelector("#nav-bar");
let navButton = document.querySelector("#nav-button");
let menuContent;
let searchBar;

export function empowerNav() {
    navContainer.style.maxHeight = navBar.offsetHeight + "px";
    navButton.addEventListener("click", toggleNav, false);
    navContainer.opened = false;
    navContainer.filled = false;
}

function toggleNav() {
    if(!navContainer.opened){
        if(!navContainer.filled){
            addNavElements();
            navContainer.filled = true;
        }
        navContainer.style.maxHeight = navBar.offsetHeight + menuContent.offsetHeight + "px";
        navContainer.opened = true;
        navButton.textContent = "-"
    }
    else {
        navContainer.style.maxHeight = navBar.offsetHeight + "px";
        navContainer.opened = false;
        navButton.textContent = "+"
    }
}

function addNavElements() {
    menuContent = document.createElement("div");
    menuContent.setAttribute("id", "menu-content");
    addSearchBar();
    navContainer.appendChild(menuContent);
}

function addSearchBar() {
    searchBar = document.createElement("input");
    searchBar.setAttribute("id", "search-bar");
    searchBar.placeholder = "search...";
    menuContent.appendChild(searchBar);
}