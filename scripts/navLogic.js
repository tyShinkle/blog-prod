let navButton = document.querySelector("#nav-button");
let menuContainer = document.querySelector("#menu");
let menuContent;
let searchBar;
let filterBar;
let filterHeader;
let filterContent;

export function empowerNav() {
    navButton.addEventListener("click", toggleNav, false);
    menuContainer.opened = false;
    menuContainer.filled = false;
}

function toggleNav() {
    if(!menuContainer.opened){
        if(!menuContainer.filled){
            addNavElements();
            menuContainer.filled = true;
        }
        menuContainer.style.maxHeight = menuContent.offsetHeight + 20 + "px";
        menuContainer.opened = true;
        navButton.textContent = "-"
    }
    else {
        menuContainer.style.maxHeight = "0px";
        menuContainer.opened = false;
        navButton.textContent = "+"
    }
}

function addNavElements() {
    menuContent = document.createElement("div");
    menuContent.setAttribute("id", "menu-content");
    addSearchBar();
    addFilterBar();
    menuContainer.appendChild(menuContent);
}

function addSearchBar() {
    searchBar = document.createElement("input");
    searchBar.setAttribute("id", "search-bar");
    searchBar.placeholder = "\u2315 search...";
    menuContent.appendChild(searchBar);
}

function addFilterBar() {
    filterBar = document.createElement("div");
    filterHeader = document.createElement("div");
    filterContent = document.createElement("div");
    filterBar.setAttribute("id", "filter-bar");
    filterHeader.setAttribute("id", "filter-header");
    filterContent.setAttribute("id", "filter-content");
    filterHeader.textContent = "# Filter";
    filterBar.addEventListener("click", toggleFilter, false)
    filterBar.appendChild(filterHeader);
    menuContent.appendChild(filterBar);
}

function toggleFilter() {
    fillFilter();
    //expand filter bar
}

function fillFilter() {
    //add tags to flex container
    console.log("test");
}