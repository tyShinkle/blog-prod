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
    postTags.textContent = buildTagString(postIndex);
    targetPostTitleCard.appendChild(postTags);
}

//construct string out of postTags array
function buildTagString(postIndex) {
    let baseString = "";
    for(let i=0; i < posts[postIndex].postTags.length; i++){
        baseString += posts[postIndex].postTags[i]+ " ";
    }
    return baseString;
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
    postButton.setAttribute("id", "postButton" + postIndex);
    postButton.textContent = "+";
    postButton.addEventListener("click", openPost, false);
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

//open post / add content
function openPost(e) {
    let targetIndex = e.currentTarget.postIndex;
    let postParent = document.getElementsByClassName("post")[targetIndex];
    if(!e.currentTarget.open){
        if(e.currentTarget.fill){
            let postContentDiv = document.createElement("div");
            postContentDiv.classList.add("post-content");
            postContentDiv.setAttribute("id", "postContentDiv" + targetIndex);
            for(let i = 0; i < posts[targetIndex].postBody.length; i++){
                let childToBe = buildElement(posts[targetIndex].postBody[i]);
                postContentDiv.appendChild(childToBe);
            }
            postParent.appendChild(postContentDiv);
            e.currentTarget.fill = false;
        }
        postParent.style.maxHeight = postParent.offsetHeight + document.getElementById("postContentDiv" + targetIndex).offsetHeight + "px";
        e.currentTarget.open = true;
    }
    else {
        postParent.style.maxHeight = document.getElementById("postTitleCard" + e.currentTarget.postIndex).offsetHeight + 30 + "px";
        e.currentTarget.open = false;
    }
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
