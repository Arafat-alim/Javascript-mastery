console.log("scope.js");

//! global variable
var namco = "Raju";
// console.log(namco);
function SayHello() {
  console.log(namco);
  namco = "Gobi le lo";
}
SayHello();
console.log(namco);

let n = "Goku";
const logName = () => {
  console.log(n);
  n = "Gohan";
};

logName();
console.log(n);
// ouput
//goku
//gohan

//! local scope
console.log("Local scope");
let someFunction = () => {
  const magic = "Master";
  console.log(magic);
};

someFunction();
// console.log(magic); // uncaught referenceError

//outer function
let newFunction = () => {
  //outer variable
  let rom = "Rome";
  //inner function
  function anotherFunction() {
    console.log(rom); //guddu
    rom = "Guddu";
    console.log(rom); //Rome - can be accessible
  }
  anotherFunction();
  console.log(rom); //guddu
};
newFunction();

//block scope
if (true) {
  let sim = "Maggi";
  console.log(sim); // maggi
}
