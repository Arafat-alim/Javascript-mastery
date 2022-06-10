console.log("callback-hell.js");
//! Asynchronous JS
const fetchUser = (username, callback) => {
  setTimeout(() => {
    console.log("[Now we have the photos]");
    callback({ username });
  }, 2000);
};

const fetchUserPhotos = (username, callback) => {
  setTimeout(() => {
    console.log(`[Now we have the photos for ${username}]`);
    callback(["Photos 1", "Photos 2"]);
  }, 2000);
};

const fetchPhotoDetails = (photo, callback) => {
  setTimeout(() => {
    console.log(`[Fetching Photo details for ${photo}]`);
    callback("Details");
  }, 2000);
};

//calling function
fetchUser("Arafat", (user) => {
  console.log(`Welcome ${user.username}`);
  //calling function
  fetchUserPhotos(user.username, (photos) => {
    console.log(`${user.username} photos: ${photos}`);
    fetchPhotoDetails(photos[0], (details) => {
      console.log(`${user.username} Photo Details: ${details}`);
    });
    // ... calling more function make this callback hell
  });
});
