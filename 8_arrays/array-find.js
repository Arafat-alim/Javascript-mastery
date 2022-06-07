console.log("array-find.js");
//! find return a new array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let values = numbers.find((number) => number > 5);
console.log(values); // 6

//! Question - find the california
const states = ["Alexca", "California", "Colorado", "Hwai"];

const state = states.find((state) => state.startsWith("C"));

console.log(state); //california
