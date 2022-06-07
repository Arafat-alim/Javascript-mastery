console.log("array-sort.js");

//! Sorting the string -> alphabetically order

const names = ["Aquib", "Cane", "Zahid", "Babloo"];
console.log(names.sort()); //Array(4) [ "Aquib", "Babloo", "Cane", "Zahid" ]

const numbers = [9, 2, 8, 7, 6, 2, 3, 4];
console.log(numbers.sort()); //Array(8) [ 2, 2, 3, 4, 6, 7, 8, 9 ]

//! The problems comes on this situation
const probNum = [11, 1, 5, 45, 9, 22, 54];
console.log(probNum.sort()); //Array(7) [ 1, 11, 22, 45, 5, 54, 9 ]

//! We can fix the above issue using comparator function
//! Ascending order
probNum.sort((a, b) => a - b);
console.log(probNum); //Array(7) [ 1, 5, 9, 11, 22, 45, 54 ]

//! Descending order
probNum.sort((a, b) => b - a);
console.log(probNum); //Array(7) [ 54, 45, 22, 11, 9, 5, 1 ]
