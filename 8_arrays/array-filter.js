const numbers = [-1, 0, 56, -7, -98, 32, 25, -96];
//! filter method
let allNumbers = numbers.filter((number) => console.log(number));
console.log(allNumbers);

//! positiveNumber - finding out positive Number
let positiveNumber = numbers.filter((number) => number > 0);
console.log(positiveNumber);

//! negativeNumber - finding out negative number
let negativeNumber = numbers.filter((number) => number <= 0);
console.log("FILTER", negativeNumber);

//! Trying to find out the positive number using loops
let pNumber = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    pNumber.push(numbers[i]);
  }
}
console.log("FOR LOOP", pNumber);
