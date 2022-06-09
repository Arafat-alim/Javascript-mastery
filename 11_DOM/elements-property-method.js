//! Elements Properies
const el = document.getElementById("heading");
console.log(el.classList); //DOMTokenList(3) [ "text", "class1", "texting" ]

console.log(el.className); //text class1 texting

console.log(el.innerHTML); // Test

console.log(el.id); // heading

//! Elements Methods
const el1 = document.querySelector("h1");
el1.addEventListener("click", () => {
  alert("You Clicked Me!");
});

const button = document.querySelector("button");
button.addEventListener("click", () => {
  alert("button Is Clicked");
});
console.log(button.getBoundingClientRect());
/*
DOMRect { x: 8, y: 176.6999969482422, width: 52, height: 22, top: 176.6999969482422, right: 60, bottom: 198.6999969482422, left: 8 }
*/
console.log(button.hasAttribute("type")); //true
console.log(button.removeAttribute("type")); //undefined
console.log(button.hasAttribute("type")); //false
