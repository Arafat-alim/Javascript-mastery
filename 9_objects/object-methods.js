console.log("Object methods");

//method declaration
const myObj = {
  myMethod: () => {},
  myMethod1: function () {},
  myMethod2() {},
};
//! executing method

myObj.myMethod();
myObj.myMethod1();
myObj.myMethod2();

//example
const dog = {
  firstName: "Fluffy",
  age: 4,
  //! Arrow function dont support "this" keyword here
  //   bark: () => {
  //     console.log("Woof WOof");
  //   },
  bark: function () {
    console.log(this.firstName, this.age);
  },
};

console.log(dog.firstName);
console.log(dog.age);
dog.bark(); // fluffy 4

//wanted to print the in the bark method
