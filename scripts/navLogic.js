let navButton = document.querySelector("#nav-button");
let menuContainer = document.querySelector("#menu");
let menuContent = document.querySelector("#menu-content");

export function empowerNav() {
    navButton.addEventListener("click", toggleNav, false);
    menuContainer.opened = false;
}

function toggleNav() {
    if(!menuContainer.opened){
        menuContainer.style.maxHeight = menuContent.offsetHeight + "px";
        menuContainer.opened = true;
        navButton.textContent = "-";
        navButton.classList.add("button-clicked");
    }
    else{
        menuContainer.style.maxHeight = "0px";
        menuContainer.opened = false;
        navButton.textContent = "+";
        navButton.classList.remove("button-clicked");
    }
}

