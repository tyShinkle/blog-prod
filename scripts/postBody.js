//open and close post
export function togglePost(e) {
    let targetIndex = e.currentTarget.postIndex;
    let postParent = document.querySelector("#post" + targetIndex);
    let activeButton = document.querySelector("#postButton" + targetIndex);
    if (!e.currentTarget.opened) {
        if (!e.currentTarget.filled) {
            postParent.appendChild(fillPost(targetIndex, e.currentTarget.postData.postBody));
            e.currentTarget.filled = true;
        }
        postParent.style.maxHeight = postParent.offsetHeight + document.querySelector("#postContentDiv" + targetIndex).offsetHeight + "px";
        e.currentTarget.opened = true;
    }
    else {
        postParent.style.maxHeight = document.querySelector("#postTitleCard" + targetIndex).offsetHeight + 20 + "px";
        e.currentTarget.opened = false;
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


/*
EVENT BUBBLING

el.onclick = function(event) {
    setTimeout(() => {
        if(event.target.tagName = "span"){
            alert("tag clicked");
            // do stuff
        }else {
            alert("body clicked");
            //do stuff
        }
    }
};
*/