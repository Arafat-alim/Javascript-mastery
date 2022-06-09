console.log("setInterval_vs_setTimeout.js");
//! Asynchronous JS
//! setInterval(callFn, times); - the function calls after repeatedly after a given time
//! clearInterval()

let myInterval1 = setInterval(() => console.log("Hello Arafat, Welcome"), 1000);
console.log(myInterval1); //
// How to stop the timer -- we use clearInterval
clearInterval(myInterval1);

//! SetTimeout(calFN, time); - The Function call after a given time
//! clearTimeout()

let myInterval2 = setTimeout(() => console.log("Hello Arafat, see you!"), 5000);
console.log(myInterval2);
clearTimeout(myInterval2);
