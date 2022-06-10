console.log("promise.js");
//! Promise
const user = true;
let promise = new Promise((resolve, reject) => {
  if (user) {
    resolve("Welcome User");
  } else {
    reject("Sorry Wrong Credentials");
  }
});

//executing promise
promise.then((msg) => console.log(msg)).catch((err) => console.log(err));

//! Create a promise -- Fetching user
const fetchUser = (username) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`[Now we have the user]`);
      resolve({ username });
    }, 2000);
  });
};

//! create a promise -- fetching user photo
const fetchUserPhotos = (username) => {
  return new Promise((resolve, reject) => {
    //Asynchronous code
    setTimeout(() => {
      console.log(`[Now we have the ${username} Photo]`);
      resolve(["Photo 1", "Photo 2"]);
    }, 2000);
  });
};

//! create a promise -- fetching photo's details
const fetchPhotoDetails = (photo) => {
  return new Promise((resolve, reject) => {
    //Asynchronous Code
    setTimeout(() => {
      console.log(`[Now fetching a ${photo} 's Detaisl]`);
      resolve("Details");
    }, 2000);
  });
};

//calling Promise function
fetchUser("Arafat")
  .then((user) => fetchUserPhotos(user.username))
  .then((photo) => fetchPhotoDetails(photo[0]))
  .then((details) => console.log(`You Photo's Details is ${details}`));
