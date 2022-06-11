//! Rest Operator - function can able to get n no of parameters
let total = (...args) => {
  console.log(args); //giving an array
  return args.reduce((acc, curr) => acc + curr);
};

const ans = total(2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2);
console.log(ans); //36

//!  Spread Operator - it helps us to create a shallow copy of array and object
//! array
let names = ["Arafat", "Aman", "Alim"];
console.log(names); //Array(3) [ "Arafat", "Aman", "Alim" ]
//using spread operator
let copyName = [...names, "Sammy"];
copyName.push("Ahmed");
console.log(copyName); // [ "Arafat", "Aman", "Alim", "Sammy", "Ahmed" ]

//! Object
let obj1 = {
  name: "Sam",
};
console.log(obj1); //Object { name: "Sam" }

let obj2 = { ...obj1, name: "Mehmood" };
console.log(obj2); //Object { name: "Mehmood" }
