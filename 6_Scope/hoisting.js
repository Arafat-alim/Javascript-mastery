//! HOISTING

console.log("hoisting lessons");
var nope;
nope = 13;
console.log(nope); //13

// ! function hoisting
hoist(); //text - due to hoisting
function hoist() {
  let meg = "text";
  console.log(meg);
}

//! now lets declare a variable using let and const
// console.log(mini);

// let mini = 13;

// console.log(mini); //Uncaught ReferenceError: can't access lexical declaration 'mini' before initialization

//! arrow function in hoisitng
// test();
// const test = () => {
//   var msg = "goku";
//   console.log(msg); //Uncaught ReferenceError: msg is not defined
// };
