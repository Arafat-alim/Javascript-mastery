//! imporing a file
import dog from "./Export-Import/export-script.js";
//multiple imports
import {
  names,
  length,
  firstName,
  lastName,
} from "./Export-Import/multiple-exports.js";

dog.forEach((item, index) => {
  console.log(`Dog name - ${index + 1} - ${item}`);
});

console.log("Listing the names array - ", names);
console.log(`There are ${length} members`);
console.log(`${firstName} and ${lastName}`);
