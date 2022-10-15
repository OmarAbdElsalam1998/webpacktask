/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/style.min.css":
/*!*******************************!*\
  !*** ./src/css/style.min.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpach-task/./src/css/style.min.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/functions */ \"./src/js/functions.js\");\n/* harmony import */ var _css_style_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/style.min.css */ \"./src/css/style.min.css\");\n\r\n\r\n\r\n\r\nvar imagesCollection=document.querySelectorAll(\".image-opacity .img img\");\r\nfor(let i=0;i<imagesCollection.length;i++){\r\n    imagesCollection[i].addEventListener('mouseover',function(){\r\n            (0,_js_functions__WEBPACK_IMPORTED_MODULE_0__.over)(this);\r\n          \r\n    \r\n    });\r\n    imagesCollection[i].addEventListener('mouseout',function(){\r\n        (0,_js_functions__WEBPACK_IMPORTED_MODULE_0__.out)(this);\r\n    \r\n    });\r\n}\r\n\r\n\r\n\r\n//Start Question 2 change span color and background Randomly\r\n\r\n\r\n//Array Of Colors\r\nvar colors=[\"red\",\"green\",\"blue\",\"orange\",\"black\",\"brown\",\r\n\"dodgerblue\",\"gray\",\"yellow\",\"#526e2d\"];\r\n\r\nvar spanCollection=document.querySelectorAll(\".question2 span\");\r\nconsole.log(spanCollection);\r\nvar changeColorBtn=document.getElementById(\"changeColorBtn\");\r\n//On ChangeColor Button Click event\r\nchangeColorBtn.addEventListener('click',function(){\r\n    var colorsCopy=Array(...colors);\r\n    var colorsCopy2=Array(...colors);\r\n    for(let i=0;i<spanCollection.length;i++){\r\n        var randomnum=(0,_js_functions__WEBPACK_IMPORTED_MODULE_0__.getRandomNumber)(0,colorsCopy.length);\r\n        console.log(randomnum);\r\n        spanCollection[i].style.backgroundColor=colorsCopy[randomnum];\r\n         colorsCopy.splice(randomnum,1);\r\n        var randomnum2=(0,_js_functions__WEBPACK_IMPORTED_MODULE_0__.getRandomNumber)(0,colorsCopy2.length);\r\n        spanCollection[i].style.color=colorsCopy2[randomnum2];\r\n        colorsCopy2.splice(randomnum2,1);\r\n\r\n\r\n    }\r\n});\r\n\r\n\r\n//\r\n\r\nvar showHidePasswordButton=document.getElementById(\"showHidePassword\");\r\nvar eye=document.getElementsByClassName(\"fa-solid\")[0];\r\nvar password=document.querySelector(\"input[type='password']\");\r\nshowHidePasswordButton.addEventListener('click',function(){\r\n    if(eye.classList.contains('fa-eye-slash')){\r\n        (0,_js_functions__WEBPACK_IMPORTED_MODULE_0__.toggleClass)(eye);\r\n        password.setAttribute('type','text')\r\n\r\n    }\r\n    else{\r\n        (0,_js_functions__WEBPACK_IMPORTED_MODULE_0__.toggleClass)(eye);\r\n        password.setAttribute('type','password');\r\n    }\r\n});\r\n\r\n\r\n\r\n//Question 4\r\nvar question=[\"Where is a good dentist?\",\"Where is the fireman?\",\r\n\"Who is a good lawyer?\",\"Who is a plumber?\",\"Who are the firemen?\",\r\n\"Why is he a good teacher?\",\"Why is he a good teacher?\",\r\n\"What are badger reporters what are good teachers?\",\r\n\"How are the classes?\",\"Why is he a good teacher?\"\r\n];\r\n\r\nvar questionDisplayField=document.getElementById(\"question\");\r\nvar nextBtn=document.getElementById(\"next\");\r\nvar prevBtn=document.getElementById(\"prev\");\r\nvar counter=0;\r\nquestionDisplayField.innerHTML=question[0];\r\nnextBtn.addEventListener(\"click\",function(){\r\n    if(counter<question.length-1){\r\n        counter++;\r\n        questionDisplayField.innerHTML=question[counter];\r\n        \r\n    }\r\n    else{\r\n        alert(\"no Next Question\");\r\n    }\r\n});\r\nprevBtn.addEventListener(\"click\",function(){\r\n    if(counter>0){\r\n        counter--;\r\n        questionDisplayField.innerHTML=question[counter];\r\n        \r\n    }\r\n    else{\r\n        alert(\"no prev Question\");\r\n    }\r\n});\r\n\r\n\r\n\r\n//Question 5\r\nvar resultBtn=document.querySelector(\".calculator #result\");\r\nvar clearBtn=document.getElementById(\"clear\");\r\nvar calculatorbtns=document.querySelectorAll(\".calculator > div:not(:first-of-type) #cal\");\r\nconsole.log(calculatorbtns);\r\nvar textField=\"\";\r\nfor(let i=0;i<calculatorbtns.length;i++){\r\n    \r\n    calculatorbtns[i].addEventListener('click',function(){\r\n        textField+=this.innerText;\r\n        document.getElementById(\"claculatorField\").value=textField;\r\n    });\r\n  \r\n}\r\nresultBtn.addEventListener(\"click\",function(){\r\n    var result=eval(document.getElementById(\"claculatorField\").value);\r\n    document.getElementById(\"claculatorField\").value=result;\r\n});\r\n\r\nclearBtn.addEventListener(\"click\",function(){\r\n    document.getElementById(\"claculatorField\").value=\"\";\r\n    textField=\"\";\r\n});\r\n\n\n//# sourceURL=webpack://webpach-task/./src/index.js?");

/***/ }),

/***/ "./src/js/functions.js":
/*!*****************************!*\
  !*** ./src/js/functions.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getRandomNumber\": () => (/* binding */ getRandomNumber),\n/* harmony export */   \"out\": () => (/* binding */ out),\n/* harmony export */   \"over\": () => (/* binding */ over),\n/* harmony export */   \"toggleClass\": () => (/* binding */ toggleClass)\n/* harmony export */ });\n// Question 1 Change images Opacity When Mouse Over It\r\n//when mouse over on image function\r\n function over(e){\r\n    var opacity=1;\r\n    var interval=setInterval(function(){\r\n        if(opacity>0.3){\r\n        e.style.opacity=opacity;\r\n        opacity=opacity-0.1;\r\n        }\r\n        else{\r\n            clearInterval(interval);\r\n        }\r\n    },100);\r\n}\r\n//when mouse out from image function\r\n\r\nfunction out(e){\r\n    var opacity=0.3;\r\n   var int=setInterval(function(){\r\n        if(opacity<=1){\r\n        e.style.opacity=opacity;\r\n        opacity=opacity+0.1;\r\n        }\r\n        else{\r\n        clearInterval(int);\r\n\r\n        }\r\n    },100);\r\n}\r\n//get RandomNumber in given range{x,y}\r\nfunction getRandomNumber(min,max){\r\n    return Math.floor(Math.random() * (max - min)) + min;\r\n}\r\nfunction toggleClass(x) {\r\n    if (x.classList.contains('fa-eye-slash')) {\r\n      x.classList.remove('fa-eye-slash');\r\n      x.classList.add('fa-eye');\r\n\r\n    } else {\r\n        x.classList.add('fa-eye-slash');\r\n        x.classList.remove('fa-eye');\r\n    }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://webpach-task/./src/js/functions.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;