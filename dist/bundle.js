/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://blog-test/./style.css?");

/***/ }),

/***/ "./scripts/app.js":
/*!************************!*\
  !*** ./scripts/app.js ***!
  \************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("//css\r\n__webpack_require__(/*! ../style.css */ \"./style.css\");\r\n//js\r\n__webpack_require__(/*! ./script.js */ \"./scripts/script.js\");\n\n//# sourceURL=webpack://blog-test/./scripts/app.js?");

/***/ }),

/***/ "./scripts/postLogic.js":
/*!******************************!*\
  !*** ./scripts/postLogic.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"empowerPosts\": () => (/* binding */ empowerPosts)\n/* harmony export */ });\nlet postContainers = document.getElementsByClassName(\"post\");\r\nlet postHeaders = document.getElementsByClassName(\"post-title-card\");\r\nlet postContent = document.getElementsByClassName(\"post-content\");\r\n\r\nlet empowerPosts = function() {\r\n    for(let i = 0; i < postContainers.length; i++){\r\n        postHeaders[i].addEventListener(\"click\", toggle, false);\r\n        postHeaders[i].postIndex = i;\r\n        setMaxHeight(i);\r\n    }\r\n}\r\n\r\nfunction toggle(e){\r\n    let targetIndex = e.currentTarget.postIndex;\r\n    let opened = e.currentTarget.opened;\r\n    if(!opened){\r\n        postContainers[targetIndex].style.maxHeight = postHeaders[targetIndex].offsetHeight + postContent[targetIndex].offsetHeight + 30 + \"px\";\r\n        postHeaders[targetIndex].classList.add(\"clicked\");\r\n        e.currentTarget.opened = true;\r\n    }\r\n    else{\r\n        postContainers[targetIndex].style.maxHeight = postHeaders[targetIndex].offsetHeight + 10 + \"px\";\r\n        postHeaders[targetIndex].classList.remove(\"clicked\");\r\n        e.currentTarget.opened = false;\r\n    }\r\n}\r\n\r\n//set max height for open / close\r\nfunction setMaxHeight(postIndex) {\r\n    let post = document.querySelector(\"#post\" + postIndex);\r\n    let postHeader = document.querySelector(\"#postTitleCard\" + postIndex);\r\n    post.style.maxHeight = postHeader.offsetHeight + 10 + \"px\";\r\n}\r\n\r\n/*\r\nHTML TEMPLATE\r\n    <div class=\"post\" id=\"test-post\">\r\n        <div class=\"post-title-card\">\r\n            <div class=\"post-title\">Build a CRUD API with AWS Lambda, DynamoDB and API Gateway.</div>\r\n            <div class=\"post-tags\">#API #AWS #node</div>\r\n            <div class=\"post-date\">March 30 2023</div>\r\n            <div class=\"post-button\" id=\"test-button\">+</div>\r\n        </div>\r\n        <div class=\"post-content\"></div>\r\n    </div>\r\n*/\n\n//# sourceURL=webpack://blog-test/./scripts/postLogic.js?");

/***/ }),

/***/ "./scripts/script.js":
/*!***************************!*\
  !*** ./scripts/script.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _postLogic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./postLogic.js */ \"./scripts/postLogic.js\");\n/* harmony import */ var _windowLogic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./windowLogic.js */ \"./scripts/windowLogic.js\");\n//import { buildPosts } from \"./buildPosts.js\";\r\n\r\n\r\n\r\n\r\n//buildPosts();\r\n(0,_postLogic_js__WEBPACK_IMPORTED_MODULE_0__.empowerPosts)();\r\n(0,_windowLogic_js__WEBPACK_IMPORTED_MODULE_1__.empowerWindow)();\r\n\r\n//console.log(\"Hello!\");\n\n//# sourceURL=webpack://blog-test/./scripts/script.js?");

/***/ }),

/***/ "./scripts/windowLogic.js":
/*!********************************!*\
  !*** ./scripts/windowLogic.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"empowerWindow\": () => (/* binding */ empowerWindow)\n/* harmony export */ });\nlet posts = document.getElementsByClassName(\"post\"); \r\nlet postHeaders = document.getElementsByClassName(\"post-title-card\");\r\nlet postBodies = document.getElementsByClassName(\"post-content\");\r\n\r\nlet empowerWindow = function(){\r\n    window.addEventListener(\"resize\", resetSizes, false);\r\n}\r\n\r\nlet resetSizes = function() {\r\n    for(let i = 0; i < posts.length; i++){\r\n        if(postHeaders[i].opened){\r\n            posts[i].style.maxHeight = postHeaders[i].offsetHeight + postBodies[i].offsetHeight + 30 + \"px\";\r\n        }\r\n        else{\r\n            posts[i].style.maxHeight = postHeaders[i].offsetHeight + 10 + \"px\";\r\n        }\r\n    }\r\n} \n\n//# sourceURL=webpack://blog-test/./scripts/windowLogic.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/app.js");
/******/ 	
/******/ })()
;