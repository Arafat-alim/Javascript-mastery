console.log("array-one.js");
let arr = [];
// string immutability
let string = "Hello";

console.log(string[0]);
string[0] = "p";
console.log(string); // string cant be changed

//!now in array
let months = ["jan", "feb", "mar", "april"];
console.log(months[0]); // jab
//we can the change the jan to anythnig
months[0] = "Sunday";
console.log(months); //[ "Sunday", "feb", "mar", "april" ]
//total length of an array
console.log(months.length); //4

//Storing different types of data types in an array
let values = ["stringvalue", true, () => {}, 12, { name: "Sanjay" }];
console.log(values); //Array(5) [ "stringvalue", true, values(), 12, {…} ]

//we can also use for loop to print an array
for (let i = 0; i < months.length; i++) {
  console.log(months[i]);
}
//single element output at a time
