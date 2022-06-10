console.log("async-awaits.js");

//! Example 1.a - async function always return a Promise, otherwise it returns indefined
const number = async () => {
  return 25;
};
console.log(number()); //Promise { <state>: "fulfilled", <value>: 25 }
number().then((num) => console.log(num)); //25

//! Example 1.b - async awaits
const fetchNum = async () => {
  const ans = await number();
  console.log(ans); //25
};

fetchNum(); //25

//! Previous Example -- Refractoring

//Creating a Promise -- fetchUuser
const fetchUser = (username) => {
  return new Promise((resolve, reject) => {
    //Asyncrhonous code
    setTimeout(() => {
      console.log(`[Now we are fetching user: ${username}]`);
      resolve({ username });
    }, 2000);
  });
};

// creating a Promise -- fetchUserPhotos()
const fetchUserPhotos = (username) => {
  return new Promise((resolve, reject) => {
    //async code
    setTimeout(() => {
      console.log(`[Now we are fetching ${username}'s Photos]`);
      resolve(["Photo 1 ", "Photo 2 "]);
    }, 2000);
  });
};

//creating a Promise -- fetchPhotoDetails
const fetchPhotoDetails = (photo) => {
  return new Promise((resolve, reject) => {
    //async code
    setTimeout(() => {
      console.log(`[Now we are going to fetch ${photo} Details]`);
      resolve("Details");
    }, 2000);
  });
};

//now executing the above promise using via async --> awaits
const displayData = async () => {
  const user = await fetchUser("Arafat");
  const photos = await fetchUserPhotos(user.username);
  const details = await fetchPhotoDetails(photos[0]);
  console.log(details);
};

displayData();
