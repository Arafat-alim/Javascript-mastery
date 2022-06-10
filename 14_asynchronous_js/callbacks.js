//! lets trying to fetch a user from the database
//! CallBack - A function is calling another function
const fetchUser = (username) => {
  setTimeout(() => {
    return { user: username };
  }, 2000);
};

const user = fetchUser("Arafat");
//console.log(user.username); //undefined

//! Now using callback function
const fetchingUser = (username, callback) => {
  console.log("Fetching...");
  setTimeout(() => {
    console.log("Now we have the user: ");
    callback({ username });
  }, 2000);
};

fetchingUser("Arafat", (user) => {
  console.log(`Your userName is : ${user.username}`);
});
//! Output - Now we have the user:
//! Your userName is : Arafat
