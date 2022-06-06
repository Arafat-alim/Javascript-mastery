let statement = "John is the best";
//find out the fist letter and second letter
let firstLetter = statement[0];
let lastLetter = statement[statement.length - 1];
console.log(firstLetter, lastLetter); // J t

//Change string case
let mixedCaseString = "This is the boss of all Programmer";
let smallCase = mixedCaseString.toLowerCase(); //return new strings, because strings are immuntable
console.log(smallCase); //this is the boss of all programmer
let capCase = mixedCaseString.toUpperCase();
console.log(capCase); //THIS IS THE BOSS OF ALL PROGRAMMER

//! Searching for a substring
//indexOf() - Returns the position of the first occurence of a substring,s earch starts from the beginning of a string

let sentence = "I love Javascript, My Betterhalf is Javascript";
const substr = sentence.indexOf("Javascript");
console.log(substr); // 7

//lastIndexOf() -> gives the substring from the last position

const substr2 = sentence.lastIndexOf("Javascript");
console.log(substr2);
36;

//***includes() -> it just return true or false, if the substring is present
const substr3 = sentence.includes("Javascript"); //true
console.log(substr3);

//startsWith() -> it also return true or false
const substr4 = sentence.startsWith("I love"); //true
console.log(substr4);

//endsWith() -> it also return true or false
const substr5 = sentence.endsWith("I love"); //false
console.log(substr5);
