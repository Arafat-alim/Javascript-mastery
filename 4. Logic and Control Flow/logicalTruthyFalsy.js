console.log("logicalTruthyFalsy.js");
let isCool = true;
let ager = 18;

if (isCool && ager >= 18) {
  console.log("Welcoem To the club");
} else {
  console.log("Sorry Bois");
}
//Welcoem To the club

//! And -> if all the operands having truthy value then it return the last truthy value
console.log("truthy" && 1 && "true" && 99); // 99
console.log("truthy" && 0 && "true" && 99); //truthy

//! OR -> If any one operands found truthy then it return that truthy value immediately.
console.log("truthy" || 0 || "true" || 99); //truthy
console.log("" || 1 || "true" || 99); // 1

console.log("" || 0 || null || undefined || 99); // 99

//! NOT
console.log(!0); //true
console.log(!!0); //false
