console.log("synchronous-vs-synchronous.js");
//! Synchronous Js - – It is one in which the code is executed line by line and their tasks are completed instantly. i.e there is no time delay In the completion of the task for those lines of code.

// Synchronous JS -
const functionOne = () => {
  console.log("Function one");
  //calling function two
  functionTwo();
  console.log("function one, Part 2");
};
const functionTwo = () => {
  console.log("Function Two");
};

//calling functionONe
// functionOne();
//Output
// Function one
// Function Two
// function one, Part 2

//! Asynchronous JS - It is one in which some lines of code take time to run. These tasks are run in the background while the javascript engine keeps executing other lines of code. When the result of the asynchronous tasks gets available, is then used in the program.

const functionThree = () => {
  console.log("Function Three");
  functionFour();
  console.log("Function Three, Part 2");
};

const functionFour = () => {
  setTimeout(() => console.log("Function Four"), 5000);
};

//calling function
functionThree();

//Output
//Function Three
//Function Three, Part 2
//Function Four
