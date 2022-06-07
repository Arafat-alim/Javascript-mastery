//reverse a string
console.log("Reversed a string");
const stringVal = "Hello Everyone i am Arafat";
//first convert the string into an array using split method
const arrStr = stringVal.split(" ");
//second reversed an array using arr.reverse() method
const revMeth = arrStr.reverse();
//now convert the array into string using join method
const revStr = revMeth.join(" ");

console.log(revStr); //Arafat am i Everyone Hello

//! shorter way

const stringVal2 = "i will change the situation";
const reverse = stringVal2.split(" ").reverse().join(" ");
console.log(reverse);

//! trim method
let email = "          arafat@alim.com           ";
//removing extra space from the beginning and ending
console.log(email.trim()); //return the same string
