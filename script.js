//tyShinkle.blog
let post = document.getElementsByClassName("post")[0];
let postTitle = document.getElementsByClassName("post-title-card")[0];
let postContent = document.getElementsByClassName("post-content")[0];
let postOpenButton = document.getElementsByClassName("post-open-button")[0];
let open = false;

postOpenButton.addEventListener("click", testFunction, false);
post.style.maxHeight = post.offsetHeight + "px";


function testFunction(){
    if(!open) {
        let el = document.createElement("h3");
        el.textContent = "HELLO!";
        postContent.appendChild(el);
        post.style.maxHeight = post.offsetHeight + postContent.offsetHeight + "px";
        open = true;
    }else {
        post.style.maxHeight = postTitle.offsetHeight + 30 + "px";
        open = false;
    }
}
//AUTHOR: Ty Shinkle
