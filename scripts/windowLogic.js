
export let empowerWindow = function(){
    window.addEventListener("resize", resetSizes, false);
}

let resetSizes = function() {
    alert("resize ocurred");
} 