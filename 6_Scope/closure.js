console.log("CLosure lessons");
//! Example
const outer = () => {
  const outerVar = "Hello!";

  const inner = () => {
    const innerVar = "Boss";
    console.log(outerVar, innerVar);
  };
  return inner;
};

const innerfun = outer(); //Hello Boss as a function
innerfun(); //hello Boss

//! example 2

const init = () => {
  const hobby = "Learning C#";
  const displayHobby = () => {
    console.log(hobby);
  };
  return displayHobby;
};

const myFun = init();
myFun(); // Learning C#
