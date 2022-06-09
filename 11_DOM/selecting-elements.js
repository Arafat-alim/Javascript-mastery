//! HTML DOM  - HTML DOM is a tree of nested html elements is defined while designing HTML page.
//! Accessing DOM element
//! ids
let head = document.getElementById("heading");
console.log("ID: ", head);

//! tagname - return array
let tagName = document.getElementsByTagName("h1");
console.log("TagName: ", tagName);

//! className - return array
let className = document.getElementsByClassName("small");
console.log("className: ", className);

//! QuerySelector - single seleted at a time
let querySelectorId = document.querySelector("#heading");
console.log("QS Id: ", querySelectorId);
let querySelectorClassName = document.querySelector(".small");
console.log("QS className: ", querySelectorClassName);
let querySelectorTag = document.querySelector("h2");
console.log("QS Tag: ", querySelectorTag);

//! QuerySelectorALl - Multiple elements selected at a time, it return nodelIst array
let querySelectorAllClass = document.querySelectorAll(".heading");
console.log("QS ALL Class Name: ", querySelectorAllClass);
let querySelectorAllTag = document.querySelectorAll("h2");
console.log("QS ALL Tag: ", querySelectorAllTag);
