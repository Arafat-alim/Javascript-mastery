console.log("5. NUll and undefined");

//null is only defined by the developer
let age1 = null;
console.log(age1); // (null)
console.log(typeof age1); // object (its a bug)

//undefined is defined by both the developer and compilier
let name1 = undefined;
console.log(name1); // undefined
console.log(typeof name1); // undefined

//It is defined by the compilier
let x;
console.log(x); //undefined
console.log(typeof x); //undefined
