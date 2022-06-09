//! class -> It is a schema of an object
//! we can create an object using literal then why we create a class?
//creating an object using literal
let obj1 = {
  name: "Arafat",
  age: 24,
  isWorking: true,
};

console.log("Object Literal way", obj1);
//Object Literal way Object { name: "Arafat", age: 24, isWorking: true }

//! using class
class Person {
  constructor(name, age, isWorking) {
    this.name = name;
    this.age = age;
    this.isWorking = isWorking;
  }
}

//! creating an object using constructor
let user = new Person("Aquib", 27, true);
let user1 = new Person("Ahemd", 24, true);
let user2 = new Person("ROhan", 25, true);
let user3 = new Person("Rohit", 21, true);
let user4 = new Person("Razib", 20, true);
console.log("Class Way", user);
//Class Way Object { name: "Aquib", age: 27, isWorking: true }

//! Now in modern JS we have a functional appraoch to create a object using function
let personInfo = (name, age, isWorking) => {
  let userinfo = {
    name,
    age,
    isWorking,
  };
  return userinfo;
};
//CALLING A FUNCTION
let user5 = personInfo("Mohit", 17, true);
console.log("Functional Way", user5);
//Functional Way Object { name: "Mohit", age: 17, isWorking: true }

//optimising the code of functional approach
let personinformation = (name, age, isWorking) => ({ name, age, isWorking });

//caling a function
let user6 = personInfo("Roza", 14, true);
console.log(user6);
