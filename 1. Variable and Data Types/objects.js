console.log("6. object");
//Very important

const person = {
  name: "Arafat",
  age: 27,
};

console.log(person);
console.log(typeof person); //object
//Accessing the object via
//dot notation
console.log(person.name); //Arafat
console.log(person.age); // 27
console.log(typeof person.name); // number
console.log(typeof person.age); //string

//Array is also called Object type in JS

const arr = [1, 2, 3, 64, 7];
console.log(arr);
console.log(typeof arr); //object

//Date is also called object type in JS
let date = new Date();
console.log(date);
console.log(typeof date); // object
