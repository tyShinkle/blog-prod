//create post body 
export let buildBody = function(postIndex, postBody) {
    let postContainer = document.querySelector("#post" + postIndex);
    let postContentDiv = document.createElement("div");
    postContentDiv.classList.add("post-content");
    postContentDiv.setAttribute("id", "postContentDiv" + postIndex);
    for (let i = 0; i < postBody.length; i++) {
        let childToBe = buildElement(postBody[i]);
        postContentDiv.appendChild(childToBe);
    }
    postContainer.appendChild(postContentDiv);
}

//build elements off of post data
function buildElement(el) {
    switch (el.elementType){
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