let mainBody = document.getElementsByTagName("main")[0];

//loadPostHeaders
export function buildHeader(postIndex, postData) {
    addPostContainers(postIndex, postData);
    addTitle(postIndex, postData);
    addTags(postIndex, postData);
    addDate(postIndex, postData);
    setMaxHeight(postIndex);
}

//add container div's
function addPostContainers(postIndex, postData) {
    let postDiv = document.createElement("div");
    let postTitleDiv = document.createElement("div");
    postDiv.classList.add("post");
    postDiv.setAttribute("id", "post" + postIndex);
    postTitleDiv.classList.add("post-title-card");
    postTitleDiv.postIndex = postIndex;
    postTitleDiv.postData = postData;
    postTitleDiv.opened = false;
    postTitleDiv.setAttribute("id", "postTitleCard" + postIndex);
    postDiv.appendChild(postTitleDiv);
    mainBody.appendChild(postDiv);
}

//add title to post
function addTitle(postIndex, postData) {
    let targetPostTitleCard = document.querySelector("#postTitleCard" + postIndex);
    let postTitle = document.createElement("div");
    postTitle.classList.add("post-title");
    postTitle.textContent = postData.postTitle;
    targetPostTitleCard.appendChild(postTitle);
}

//add topic tags to post
function addTags(postIndex, postData) {
    let targetPostTitleCard = document.querySelector("#postTitleCard" + postIndex);
    let postTags = document.createElement("div");
    postTags.classList.add("post-tags");
    for (let i = 0; i < postData.postTags.length; i++){
        let s = document.createElement("div");
        s.classList.add("post-tag");
        s.textContent = postData.postTags[i];
        postTags.appendChild(s);
    }
    targetPostTitleCard.appendChild(postTags);
}

//add date to post card
function addDate(postIndex, postData) {
    let targetPostTitleCard = document.querySelector("#postTitleCard" + postIndex);
    let postDate = document.createElement("div");
    postDate.classList.add("post-date");
    postDate.textContent = postData.postDate;
    targetPostTitleCard.appendChild(postDate);
}

//set max height for open / close
function setMaxHeight(postIndex) {
    let p = document.querySelector("#post" + postIndex);
    p.style.maxHeight = p.offsetHeight + "px";
}