//tyShinkle.blog
let post = document.getElementsByClassName("post")[0];
let postTitle = document.getElementsByClassName("post-title-card")[0];
let postContent = document.getElementsByClassName("post-content")[0];
let postOpenButton = document.getElementsByClassName("post-open-button")[0];
let open = false;
let fill = true;

postOpenButton.addEventListener("click", testFunction, false);
post.style.maxHeight = post.offsetHeight + "px";


function testFunction(){
    if(!open) {
        if (fill) {
            let el = document.createElement("h3");
            el.textContent = "Step One: Create a DynamoDB Table";
            postContent.appendChild(el);
            let para = document.createElement("p");
            para.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
            postContent.appendChild(para);
            fill = false;
        }
        post.style.maxHeight = post.offsetHeight + postContent.offsetHeight + "px";
        open = true;
    }else {
        post.style.maxHeight = postTitle.offsetHeight + 30 + "px";
        open = false;
    }
}
//AUTHOR: Ty Shinkle

// CLEAN
// finalize css with classes / id's ?
// resize and calc when rotated
// CLEAN
// minimize content width
// turn + into -
// CLEAN
// generalize for all posts / JSON
// CLEAN
// build backend
// test with JSON RESPONSES