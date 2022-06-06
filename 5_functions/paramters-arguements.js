//! difference between parameter and arguements

//! function defining
function versus(params) {
  return `Hello! ${params}`;
}

//! function invoking
console.log(versus("arguements"));

//! function always return undefined, unless it is provided
const sayHi = (name) => {
  return `Hello ${name}`; //hello undefined
};
console.log(sayHi());

//what if we add something with undefined
const adding = (a, b) => {
  return a + b;
};

console.log(adding(1)); // NaN

//! Fix of above two example
// default value
const addFix = (a = 0, b = 0) => a + b;
console.log(addFix()); //0
console.log(addFix(1, 2)); // 3
console.log(addFix(2)); // 2
