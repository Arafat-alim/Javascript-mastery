console.log("object-one.js");

//! object is unordered collection of a related data in the form of key and value pairs.

//creating an object
let firstName = "Aquib";
const person = {
  firstName,
  lastName: "Alim",
  car: {
    brand: "Toyota",
  },
  age: 40,
  isCool: true,
};

console.log(person); //Object { firstName: "Aquib", lastName: "Alim", car: {…}, age: 40, isCool: true }
