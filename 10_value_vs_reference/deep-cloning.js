console.log("deep-cloning.js");

//! Deep cloninig - Destroying all the references.

//! example what we are facing the problem with shallow copying

let obj1 = {
  name: "Arafat",
  car: {
    brand: "BMW",
    color: "Red",
  },
};

//! using spread operator
let obj2 = { ...obj1 };
obj2.name = "Sammy";
obj2.car.color = "Blue";
console.log(obj1);
console.log(obj2);
/*
Object { name: "Arafat", car: {…} }
car: Object { brand: "BMW", color: "Blue" }
brand: "BMW"
color: "Blue"
name: "Arafat"

Object { name: "Sammy", car: {…} }
car: Object { brand: "BMW", color: "Blue" }
brand: "BMW"
color: "Blue"
​name: "Sammy"
*/

//! Here in the above program i have a problem my car color has been updated both in obj1 and obj2.

//! Then we can fix this using spread like this
let obj3 = { ...obj1, car: { ...obj1.car } };
obj3.name = "Asif";
obj3.car.color = "Pink";
console.log(obj3);
/*
Object { name: "Asif", car: {…} }
car: Object { brand: "BMW", color: "Pink" }
brand: "BMW"​​
color: "Pink"
name: "Asif"
*/

//! but here we cant do this if more nested object is present, then we have a solution
//! JSON.stringify() and JSON.parse() - DEEP CLONING

let obj4 = JSON.parse(JSON.stringify(obj1));
obj4.name = "Mohammad";
obj4.car.color = "Grey";
console.log(obj4);
/*
Object { name: "Mohammad", car: {…} }
car: Object { brand: "BMW", color: "Grey" }
brand: "BMW"
color: "Grey"
name: "Mohammad"
*/
