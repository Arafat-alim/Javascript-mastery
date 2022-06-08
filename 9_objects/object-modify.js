console.log("object-modify.js");

const person = {
  firstName: "Asif",
  age: 27,
  lastName: "Ahmed",
  "This-is-the-slashes": true,
  "this is a space sentence": true,
};
//! let add an extra object in the person
person.car = {
  color: "Red",
  brand: "Ford",
};

console.log(person); // Object { firstName: "Asif", age: 27, lastName: "Ahmed", "This-is-the-slashes": true, "this is a space sentence": true, car: {…} }

//! Dot notation  -- Accessing the specific key
console.log(person.firstName); // Asif

let property = "age";
//! Bracket Notation
console.log(person["firstName"]); //Asif
console.log(person["age"]); //27

//! we can access the slashes and space word keys only by using - bracket notation

console.log(person["This-is-the-slashes"]); //true
console.log(person["this is a space sentence"]); //true
