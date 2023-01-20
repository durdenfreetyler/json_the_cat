const request = require("request");
const fetchBreedDescription = function (breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    if (error) {
      // console.log(error);

      // console.log(
      //   "❌The breed as searched doesn't exsist.  Perhaps you should create one."
      // );
      return callback(error, null);
    }
    const data = JSON.parse(body);
    // // console.log("data: ", data);
    // // console.log("typeof data: ", typeof data);
    const breed = data[0];
    // console.log(breed.description);
    if (breed) {
      callback(null, breed.description);
    } else {
      callback(`${breedName} not found`, null);
    }
  });
};

// https://api.thecatapi.com/v1/breeds/search?q=sib

module.exports = { fetchBreedDescription };
