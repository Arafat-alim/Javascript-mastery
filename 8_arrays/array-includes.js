console.log("Array Includes");

const number = [1, 2, 3];
console.log(number.includes(3)); //true

const pets = ["cat", "rat", "dog"];
console.log(pets.includes("cat")); //true
console.log(pets.includes("at")); //false
console.log(pets.includes("c")); //false

//! Q. Bookshelf
const Bookshelf = ["Harry Potter", "The Hills of fire", "Radiant Reader"];

if (Bookshelf.includes("Harry Potter")) {
  console.log("The book is here, here we go");
} else {
  console.log("OOPs!!");
}
//!  The book is here, here we go
