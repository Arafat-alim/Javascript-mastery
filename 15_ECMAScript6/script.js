console.log("let_const.js");
//! ECMAScript 6 - it is a standardization of JS, It contains lot of features
//! It is an updation of core/Vanilla JS
//! ECMA Script 6 Features are
//1. let and const
//2. Arrow Function
//3. Default Parameter
//4. Template Strings
//5. Promises

//! let and const
//1 let, const
// var age = 28;
// console.log(age);
// var age = 30;
// console.log(age);
//the above code blocks can easily run
// now using let
let age = 24;
console.log(age);
// let age = 80; //redeclaration is not possible
age = 80;
console.log(age);

//now using const
const password = "1456";
//password = "741"; //invalud assingment to the const variable
console.log(password); //1456

//
//! 2. Arrow Function
const mul = (a, b) => console.log(a * b);
mul(9, 9); //

//! 3. Default Parameter
const add = (a = 0, b = 0, c = 0) => console.log(a + b + c);
add(1, 2); // 3

//! 4. Template Literals
const person = {
  name: "Arafat",
  earn: 270000,
};
console.log(`Hello ${person.name}, You earned Rs.${person.earn}!!`); //Hello Arafat, You earned Rs.270000!!

//! 5. Promise
const user = true;
const promise = new Promise((resolve, reject) => {
  if (user) {
    resolve("Welcome User");
  } else {
    reject("sorry");
  }
});
//calling promise
promise.then((msg) => console.log(msg)).then((err) => console.log(err)); //welcome user
