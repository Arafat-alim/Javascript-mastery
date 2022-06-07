console.log("Array Methods");
let names = ["Arafat", "Aman", "Alim"];
//! push - add values in the front position of an array
//! return the same array
console.log(names.push("Goku")); //4 - updated an array
console.log(names); //Array(4) [ "Arafat", "Aman", "Alim", "Goku" ]

//! pop - Removes values in the last position of an array
//! return the pop element and updated the orginal array
console.log(names.pop()); //deleted element
console.log(names); //Array(3) [ "Arafat", "Aman", "Alim" ]

//! shift() - Remove value from the front of the array
//! return the deleted array and updated the original array
console.log(names.shift()); //deleted element
console.log(names); //Array [ "Aman", "Alim" ]

//! unshift() - Add value in the begining of the array
//! return the length of an array and added the value to the array
console.log(names.unshift("Arafat"));
console.log(names); //Array(3) [ "Arafat", "Aman", "Alim" ]

//! splice() - Add/Removes in any position of an array
//! updated the orginal array
names.splice(0, 0, "Aquib", "Ahmed"); // adding first index value AQuib ahmed
console.log(names); //Array(5) [ "Aquib", "Ahmed", "Arafat", "Aman", "Alim" ]

//! slice() - Copy certain part of the arrays into a newly created array.
//! return value which we want, never updated original array
console.log(names.slice(0, 3)); //Array(3) [ "Aquib", "Ahmed", "Arafat" ]
console.log(names); //Array(5) [ "Aquib", "Ahmed", "Arafat", "Aman", "Alim" ]
