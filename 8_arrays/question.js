console.log("question.js");

let employees = [
  { name: "Sam", overtime: 7 },
  { name: "Bob", overtime: 4 },
  { name: "Jon", overtime: 11 },
  { name: "Mos", overtime: 10 },
  { name: "Red", overtime: 6 },
  { name: "Max", overtime: 6.5 },
  { name: "Jenny", overtime: 4 },
];
//! find out the employee who works 7 or more than 7 hours
//! filter method helps ovet this issue
let employeeWorkSGood = employees.filter((employee) => employee.overtime >= 7);

//! now get rid out name of employee
let employeeName = employeeWorkSGood.map((employee) => employee.name);
console.log(employeeName); //Array(3) [ "Sam", "Jon", "Mos" ]

//!Give a message to employee that he got a reward
employeeName.forEach((employee) =>
  console.log(`Hi! ${employee}, You awarded a bonus`)
);
