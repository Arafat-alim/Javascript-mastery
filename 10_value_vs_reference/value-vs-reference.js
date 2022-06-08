console.log("Value vs Reference Type");
/* Javascript data types divided into categories:
1.	Primitive Datatypes – Boolean, Strings, Numbers …
2.	Complex Data types – Arrays and Objects
Primitive Data Types – It related to Value type.
Complex Data Types – It related to Reference Type.
*/

//! Primitive - Example 1
let num1 = 4;
let num2 = num1;

num1 = 7;

console.log(num1); // 7
console.log(num2); // 4
//! Because copy the data and makes identical in primitive data types

//! Primitive - Example 1
let firstName = "Arafat";
let lastName = firstName;

firstName = "Alim";
console.log(firstName); //Alim
console.log(lastName); //Arafat

//! 2. Complex Type - Reference copy to the new varible so it wont make identical it makes it dependent to eachother

//!Example

const arrayNum = [1, 2, 3, 4];
const arrayNew = arrayNum;

arrayNum.push(5); //[1, 2, 3, 4, 5];
console.log(arrayNum); //[1, 2, 3, 4, 5];
console.log(arrayNew); //[1, 2, 3, 4, 5];

//!Example
const obj1 = { name: "Arafat", lastname: "Alim" };
const obj2 = obj1;

obj1.name = "Aquib";
obj1.lastname = "Ahmed";
obj2.lastname = "Bablu";
console.log(obj1); //Object { name: "Aquib", lastname: "Bablu" }
console.log(obj2); //Object { name: "Aquib", lastname: "Bablu" }
