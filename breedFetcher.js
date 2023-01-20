const request = require("request");

request(
  "https://apidlkjf.thecatapi.com/v1/breeds/search?q=sibz;lsakdjf",
  (error, response, body) => {
    // console.log("error: ", error);

    if (error) {
      console.log(error);

      console.log(
        "❌The breed as searched doesn't exsist.  Perhaps you should create one."
      );

      return;
    }

    const data = JSON.parse(body);
    // console.log("data: ", data);
    // console.log("typeof data: ", typeof data);
    const breed = data[0];
    console.log(breed.description);
  }
);

// https://api.thecatapi.com/v1/breeds/search?q=sib
