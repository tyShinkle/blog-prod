import {postData} from "./postData.js";
const posts = JSON.parse(postData);
let mainBody = document.getElementsByTagName("main")[0];

function createPostCards() {
    for(let i = 0; i < posts.length; i++){
        addPost(i);
        addTitle(i);
        addTags(i);
        addDate(i);
        addButton(i);
        setMaxHeight(i);
    }
}

//add container div's
function addPost(postIndex) {
    let postDiv = document.createElement("div");
    let postTitleDiv = document.createElement("div");
    postDiv.classList.add("post");
    postDiv.setAttribute("id", "post" + postIndex);
    postTitleDiv.classList.add("post-title-card");
    postTitleDiv.setAttribute("id", "postTitleCard" + postIndex);
    postDiv.appendChild(postTitleDiv);
    mainBody.appendChild(postDiv);
}

//add title to post
function addTitle(postIndex) {
    let targetPostTitleCard = document.querySelector("#postTitleCard" + postIndex); 
    let postTitle = document.createElement("div");
    postTitle.classList.add("post-title");
    postTitle.textContent = posts[postIndex].postTitle;
    targetPostTitleCard.appendChild(postTitle);
}

//add topic tags to post
function addTags(postIndex) {
    let targetPostTitleCard = document.querySelector("#postTitleCard" + postIndex);
    let postTags = document.createElement("div");
    postTags.classList.add("post-tags");
    for(let i = 0; i < posts[postIndex].postTags.length; i++){
        let s = document.createElement("span");
        s.classList.add("post-tag");
        s.textContent = posts[postIndex].postTags[i];
        postTags.appendChild(s);
    }
    targetPostTitleCard.appendChild(postTags);
}

//add date to post card
function addDate(postIndex) {
    let targetPostTitleCard = document.querySelector("#postTitleCard" + postIndex);
    let postDate = document.createElement("div");
    postDate.classList.add("post-date");
    postDate.textContent = posts[postIndex].postDate;
    targetPostTitleCard.appendChild(postDate);
}

//add button to each post card
function addButton(postIndex) {
    let targetPostTitleCard = document.querySelector("#postTitleCard" + postIndex);
    let postButton = document.createElement("div");
    postButton.classList.add("post-button");
    postButton.classList.add("toggleButton");
    postButton.setAttribute("id", "postButton" + postIndex);
    postButton.innerText = "+"
    postButton.addEventListener("click", togglePost, false);
    postButton.open = false;
    postButton.fill = true;
    postButton.postIndex = postIndex;
    targetPostTitleCard.appendChild(postButton);
}

//set max height for open / close
function setMaxHeight(postIndex) {
    let p = document.getElementsByClassName("post")[postIndex];
    p.style.maxHeight = p.offsetHeight + "px";
}

//open and close post
function togglePost(e) {
    let targetIndex = e.currentTarget.postIndex;
    let postParent = document.getElementsByClassName("post")[targetIndex];
    let activeButton = document.getElementById("postButton" + targetIndex);
    if(!e.currentTarget.open){
        if(e.currentTarget.fill){
            postParent.appendChild(fillPost(targetIndex));
            e.currentTarget.fill = false;
        }
        postParent.style.maxHeight = postParent.offsetHeight + document.getElementById("postContentDiv" + targetIndex).offsetHeight + "px";
        activeButton.innerText = "-";
        e.currentTarget.open = true;
    }
    else {
        postParent.style.maxHeight = document.getElementById("postTitleCard" + targetIndex).offsetHeight + "px";
        activeButton.innerText = "+";
        e.currentTarget.open = false;
    }
}

//create post body 
function fillPost(postIndex) {
    let postContentDiv = document.createElement("div");
    postContentDiv.classList.add("post-content");
    postContentDiv.setAttribute("id", "postContentDiv" + postIndex);
    for (let i = 0; i < posts[postIndex].postBody.length; i++) {
        let childToBe = buildElement(posts[postIndex].postBody[i]);
        postContentDiv.appendChild(childToBe);
    }
    return postContentDiv;
}

//build elements off of post data
function buildElement(el) {
    switch(el.elementType){
        case "heading":
            return buildHeading(el);
        case "paragraph":
            return buildParagraph(el);
        default:
            console.log("something went wrong!");
    }
}

//build heading
function buildHeading(el) {
    let elToReturn = document.createElement("h3");
    elToReturn.textContent = el.content;
    return elToReturn;
}

//build paragraph
function buildParagraph(el) {
    let elToReturn = document.createElement("p");
    elToReturn.textContent = el.content;
    return elToReturn;
}

//entry
createPostCards();

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
