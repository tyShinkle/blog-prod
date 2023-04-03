import {postData} from "./postData.js";
import {loadPostHeaders} from "./postHeaders.js";
import { empowerNav } from "./navLogic.js";

const posts = JSON.parse(postData);

function entryPoint() {
    for(let i = 0; i < posts.length; i++){
        loadPostHeaders(i, posts[i]);
    }
    empowerNav();
}

entryPoint();

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
