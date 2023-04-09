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
    postContentDiv.classList.add("clicked");
    postContainer.appendChild(postContentDiv);
}

//build elements off of post data
function buildElement(el) {
    switch (el.elementType){
        case "heading":
            return buildHeading(el);
        case "paragraph":
            return buildParagraph(el);
        case "code":
            return buildCode(el);
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

//build code
function buildCode(el) {
    let codeContainer = document.createElement("div");
    codeContainer.classList.add("code-container");
    for(let i = 0; i < el.content.length; i++){
        if(el.content[i].type == "newLine"){
            console.log("new line!")
            codeContainer.appendChild(document.createElement("br"));
        } 
        else if(el.content[i].type == "indentation"){
            let indentSpan = document.createElement("span");
            indentSpan.classList.add("indent-span");
            codeContainer.appendChild(indentSpan);
        }
        else{
            let s = document.createElement("span");
            s.textContent = el.content[i].content;
            s.classList.add(el.content[i].type);
            codeContainer.appendChild(s);
        }
    }
    return codeContainer;
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