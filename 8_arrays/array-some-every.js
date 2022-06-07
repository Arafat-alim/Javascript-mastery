console.log("array-some-every.js");
const array = [1, 2, 3, 4, 5];

//! Array some - it returns true atleast one test cases passes
console.log(array.some((number) => number > 3)); //true

//! Array every - it return true if all the test case passes

console.log(array.every((num) => num > 0)); //true
