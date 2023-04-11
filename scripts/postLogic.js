let postContainers = document.getElementsByClassName("post");
let postHeaders = document.getElementsByClassName("post-title-card");
let postContent = document.getElementsByClassName("post-content");

export let empowerPosts = function() {
    for(let i = 0; i < postContainers.length; i++){
        postHeaders[i].addEventListener("click", toggle, false);
        postHeaders[i].postIndex = i;
    }
}

function toggle(e){
    let targetIndex = e.currentTarget.postIndex;
    let opened = e.currentTarget.opened;
    if(!opened){
        postContainers[targetIndex].style.maxHeight = postHeaders[targetIndex].offsetHeight + postContent[targetIndex].offsetHeight + 30 + "px";
        postHeaders[targetIndex].classList.add("clicked");
        e.currentTarget.opened = true;
    }
    else{
        postContainers[targetIndex].style.maxHeight = postHeaders[targetIndex].offsetHeight + 10 + "px";
        postHeaders[targetIndex].classList.remove("clicked");
        e.currentTarget.opened = false;
    }
}

/*
HTML TEMPLATE
    <div class="post" id="test-post">
        <div class="post-title-card">
            <div class="post-title">Build a CRUD API with AWS Lambda, DynamoDB and API Gateway.</div>
            <div class="post-tags">#API #AWS #node</div>
            <div class="post-date">March 30 2023</div>
            <div class="post-button" id="test-button">+</div>
        </div>
        <div class="post-content"></div>
    </div>
*/