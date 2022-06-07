console.log("question.js");
const guestList = "Our guests are: emmaa, jacod, isabella, ethan";
// Total length of a string, stored in a variable
let lengthString = guestList.Length;
console.log(lengthString);

//Convert the string into uppercase and stored in a variable.
let upperString = guestList.toUpperCase();
console.log(upperString); //OUR GUESTS ARE: EMMAA, JACOD, ISABELLA, ETHAN

//find ethan on the list
let isEthanOntheList = guestList.includes("ethan");
console.log(isEthanOntheList); //true

//find the string
let indexOfEmma = guestList.indexOf("emma");
let substringGuest = guestList.slice(indexOfEmma);
let capString = substringGuest.toUpperCase();
console.log(capString); //EMMAA, JACOD, ISABELLA, ETHAN

//Guest name must be saved into an array
let arrayGuest = capString.split(",");
console.log(arrayGuest); //[ "EMMAA", " JACOD", " ISABELLA", " ETHAN" ]
