console.log("shallow-cloning.js");
//! Array -- Spread operator (shallow Copying)
//! used to copy array to another variable as shallow copying

let array1 = [1, 2, 3, 4];
let array2 = [...array1];
console.log(array1); //Array(4) [ 1, 2, 3, 4 ]
console.log(array2); //Array(4) [ 1, 2, 3, 4 ]
console.log(array1 === array2); //false

//! Array - slice() (shallow copying)

let array3 = array2.slice(0);
console.log(array3); //Array(4) [ 1, 2, 3, 4 ]
console.log(array2 === array3);

//!Object -- spread operator (shallow Copying)
let obj1 = { name: "Arafat", age: 24 };
let obj2 = { ...obj1 };

console.log(obj1); //Object { name: "Arafat", age: 24 }
console.log(obj2); //Object { name: "Arafat", age: 24 }
console.log(obj1 === obj1); //false

//! Object -- Object.assign({}, objName) (shallow Copying)

let obj3 = Object.assign({}, obj2);
console.log(obj2); //Object { name: "Arafat", age: 24 }
console.log(obj3); //Object { name: "Arafat", age: 24 }
console.log(obj2 === obj3); //false
