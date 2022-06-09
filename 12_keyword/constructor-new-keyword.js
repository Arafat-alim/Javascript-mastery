console.log("constructor-new-keyword.js");
//! New keyword
//! we use new keyword to create an empty object

//! Object constructor
let obj1 = new Object();
obj1.name = "Arafat";
//! Object literal
let obj2 = {};
obj2.name = "Arafat";
console.log(obj1); //Object { name: "Arafat" }
console.log(obj2); //Object { name: "Arafat" }

//! Array Constructor
let arr1 = new Array(1, 2, 3);
//! Array Literals
let arr2 = [1, 2, 3];
console.log(arr1); //[1, 2, 3]
console.log(arr2); //[1, 2, 3]

//! Date Constructor
let mydate = new Date("April 29, 2025");
console.log(mydate.getFullYear()); //2025

//! Object is the building blocks of js
//! so we can also create any datatypes using constructor
//! Number constructor
let number = new Number(100.4569);
console.log(number.toFixed(0)); //100

//! String constructor
let string = new String();
console.log((string = "Arafat")); //arafat
console.log(string.length); //6

//! Boolean constructor
let bool = new Boolean();
console.log((bool = true)); //true

//! different of using literal and constructor is - shorthand syntax (literal)
