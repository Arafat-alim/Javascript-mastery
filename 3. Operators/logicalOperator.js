console.log("logicalOperator.js");

//! AND && -> All the operands must be TRUE -> True
console.log(true && false); //false
console.log(true && true); //true
console.log(false && false); //false
console.log(true && false && true); //false
console.log(true && true && true); // true

//! OR || -> Atleast one operands must be true -> True
console.log(true || false); // true
console.log(false || false); // false
console.log(false || true); // true
