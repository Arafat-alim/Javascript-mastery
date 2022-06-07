console.log("array-reduce.js");

//! foreach loop - find the total
const groceryList = [29, 45, 65, 78, 98, 65];
let total = 0;
groceryList.forEach((num, i) => {
  total += num;
});
console.log(total); //380
