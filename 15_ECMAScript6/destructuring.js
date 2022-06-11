//! Object Destructuring
const person = {
  firstName: "Rahul",
  lastName: "Mehta",
  car: {
    brand: "BMW",
    color: "blue",
  },
  animals: {
    dog: {
      name: "Brunno",
      age: 3,
    },
    cat: {
      name: "kitty",
      age: 3,
    },
  },
};

//DRY - DONT REPEAT YOURSELF
/*
console.log(person.firstName);
console.log(person.lastName);
console.log(person.car.brand);
console.log(person.car.color);
console.log(person.animals.dog.name);
console.log(person.animals.dog.age);
console.log(person.animals.cat.name);
console.log(person.animals.cat.age);
console.log("------------------------");
*/

//using desturcturing
const {
  firstName,
  lastName,
  car: { brand, color },
  animals: { dog, cat },
} = person;
console.log(firstName);
console.log(lastName);
console.log(brand);
console.log(color);
console.log(dog.name);
console.log(dog.age);
console.log(cat.name);
console.log(cat.age);

//! Array Destructuring
let sentence = ["Hello", "I", "AM", "Arafat"];
// console.log(sentence[0] + " " + sentence[3]);
//using destructuring
const [Hello, , , Arafat] = sentence;
console.log(Hello + " " + Arafat);
