//! “this” keyword – it is used to referencing the current object
//! Modern Javascript is moving into the approach of Functional Programming
//! In older javascript it is totally based on object Programming.

console.log(this); //global window object
// creating a car factory
function Car(brand, color, wheel) {
  this.color = color;
  this.brand = brand;
  this.wheel = wheel;
}

//creating an object using new keyword
let blueCar = new Car("BMW", "blue", 4);
console.log(blueCar); // Object { color: "blue", brand: "BMW", wheel: 4 }
let redCar = new Car("Ferrari", "red", 4);
console.log(redCar); //Object { color: "red", brand: "Ferrari", wheel: 4 }

//In object
let obj = {
  name: "Ahmed",
  getName() {
    console.log(this.name);
    console.log(this); //Object { name: "Ahmed", getName: getName() }
  },
};

console.log(obj.getName()); //Ahmed
