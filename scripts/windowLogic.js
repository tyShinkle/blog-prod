let posts = document.getElementsByClassName("post"); 
let postHeaders = document.getElementsByClassName("post-title-card");
let postBodies = document.getElementsByClassName("post-content");

export let empowerWindow = function(){
    window.addEventListener("resize", resetSizes, false);
}

let resetSizes = function() {
    for(let i = 0; i < posts.length; i++){
        if(posts[i].opened){
            posts[i].style.maxHeight = postHeaders[i].offsetHeight + postBodies[i].offsetHeight + 30 + "px";
        }
        else{
            posts[i].style.maxHeight = postHeaders[i].offsetHeight + 20 + "px";
        }
    }
} 