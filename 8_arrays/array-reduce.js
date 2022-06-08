console.log("array-reduce.js");
const groceryList = [29, 45, 65, 78, 98, 65];

//! foreach loop - find the total
let total = 0;
groceryList.forEach((num, i) => {
  total += num;
});
console.log(total); //380

//! using reduce()
let ans = groceryList.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(ans); //380

const numbers = [1, 2, 3, 4, 5];
//sum of the array elemets
let sums = numbers.reduce((total, ele) => total + ele, 0);
console.log(sums); //15
