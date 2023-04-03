//open and close post
export function togglePost(e) {
    let targetIndex = e.currentTarget.postIndex;
    let postParent = document.querySelector("#post" + targetIndex);
    let activeButton = document.querySelector("#postButton" + targetIndex);
    if (!e.currentTarget.open) {
        if (e.currentTarget.fill) {
            postParent.appendChild(fillPost(targetIndex, e.currentTarget.postBody));
            e.currentTarget.fill = false;
        }
        postParent.style.maxHeight = postParent.offsetHeight + document.querySelector("#postContentDiv" + targetIndex).offsetHeight + "px";
        activeButton.innerText = "-";
        e.currentTarget.open = true;
    }
    else {
        postParent.style.maxHeight = document.querySelector("#postTitleCard" + targetIndex).offsetHeight + "px";
        activeButton.innerText = "+";
        e.currentTarget.open = false;
    }
}

//create post body 
function fillPost(postIndex, postBody) {
    let postContentDiv = document.createElement("div");
    postContentDiv.classList.add("post-content");
    postContentDiv.setAttribute("id", "postContentDiv" + postIndex);
    for (let i = 0; i < postBody.length; i++) {
        let childToBe = buildElement(postBody[i]);
        postContentDiv.appendChild(childToBe);
    }
    return postContentDiv;
}

//build elements off of post data
function buildElement(el) {
    switch (el.elementType) {
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