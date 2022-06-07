console.log("arrays-methods-two.js");

//! foreach - printing an array
let arrayElements = [12, 32, 4, 5, 6, 78];
arrayElements.forEach((arrayElement, index) =>
  console.log(arrayElement, index)
);

//foreach always return undefined
let value = arrayElements.forEach((arrayElement, index) =>
  console.log(arrayElement, index)
);
console.log("values ", value); // undefined

//! Realworld Example
let sum = 0;
let nums = [12, 56, 98, 798, 1654, 4165, 489, 14, 756, 98];

nums.forEach((num, i) => {
  sum += num;
});
console.log(sum); //8140
