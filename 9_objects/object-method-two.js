console.log("object-method-two.js");
//! Object constructor has many inbuilt function to  making with individual forward

//! Object.keys() - First convert the object into an array, It create an array containing the  keys of an object.

const employees = {
  boss: "Mohit",
  secretary: "Marley",
  sales: "joe",
  accountant: "Bob",
};

console.log(Object.keys(employees)); //Array(4) [ "boss", "secretary", "sales", "accountant" ]

//! Object.valeus() - It creates an array containing the values of an object.
const session = {
  id: 1,
  time: "26-july-2022",
  device: "mobile",
  browser: "Chrome",
};

let sessionInfo = Object.values(session);
console.log(sessionInfo); //Array(4) [ 1, "26-july-2022", "mobile", "Chrome" ]

//! object.entries() - It creates a nested array of the key/value pairs of an object

const operatingSystem = {
  name: "Ubuntu",
  version: 18.04,
  license: "Open Sources",
};

let enteries = Object.entries(operatingSystem);
console.log(enteries);
enteries.forEach((entry) => {
  let key = entry[0];
  let value = entry[1];

  console.log(`${key}: ${value}`);
});

//! object.freeze() - it prevent an object from being any modification like removed or add any properties.
//! it updated an orginal one

const user = {
  username: "Khan@kho",
  password: 123456,
};

//prevent from modification
const admin = Object.freeze(user);
// trying to update
user.username = "text";
user.password = 654798;
console.log(user); //Object { username: "Khan@kho", password: 123456 }

//! Object.seal() - It only prevents new properties from being added to an object, but allows modification of existing properties.

const user1 = {
  username: "John",
  password: 132123,
};

//! Avoid to add another property but can modify the existing property

const userMania = Object.seal(user1);
//adding of property
userMania.age = 78;
userMania.isCool = true;
console.log(userMania); //Object { username: "John", password: 132123 }

//modification
userMania.username = "test";
userMania.password = 654987;

console.log(userMania); //Object { username: "test", password: 654987 }
