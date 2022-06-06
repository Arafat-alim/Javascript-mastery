console.log("gettingSubstr.js");
//! slice() method reutrn the substring of a string
let exampleString = "Hotdog";

const hotdog = exampleString.slice(0); //Hotdog
console.log(hotdog);
const hot = exampleString.slice(0, 3); //Hot - please include last one
console.log(hot);
const dog = exampleString.slice(3); //dog
console.log(dog);

//! split the word into character array
//! or convert the string into array
//split() method is the option for it

let examStr1 = "hotdog";
const letters = examStr1.split("");
console.log(letters); // ["h", "o", "t", "d", "o", "g"]

let examStr2 = "This is my first Blog";
const words = examStr2.split(" ");
console.log(words); //[ "This", "is", "my", "first", "Blog" ]
