//! creating an element
let heading = document.createElement("h1");
//! selecting body for appeding a new created element
let body = document.querySelector("body");
//! APpedning a newly created element inside a body
body.appendChild(heading);

//! adding a inner Text into an heading
heading.innerText = "Hello! World";

//! Travelling element
let subjects = document.querySelector(".subject");
console.log(subjects);
console.log(subjects.firstElementChild);
console.log(subjects.lastElementChild);

const favSub = document.querySelector(".fav-subject");
console.log(favSub.previousElementSibling);
console.log(favSub.nextElementSibling);
console.log(favSub.parentElement);
console.log(favSub.remove());
