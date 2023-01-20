const { fetchBreedDescription } = require("../breedFetcher");
const { assert } = require("chai");

describe("fetchBreedDescription", () => {
  it("returns a string description for a valid breed, via callback", (done) => {
    fetchBreedDescription("Siberian", (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc =
        "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });
  it("test the scenario where an invalid/non-existent breed is passed in", (done) => {
    fetchBreedDescription("monkeyfuzz", (err, desc) => {
      // we expect no error for this scenario
      // assert.equal(err, null);

      // compare returned description
      assert.isNotNull(err);

      done();
    });
  });
});


// Add another test (it) here which should test the scenario where an invalid/non-existent breed is passed in.

// In this scenario, we expect the first argument for our callback (err) to be set, and desc to be null.

// Instruction
// ESLint our test file as well!

// Previously, we were console.logging the value that came back from the cat API. Logging to the console isn't very useful; it would be better if we could return the value somehow to an outside user.
// The outside user is going to give us a callback function (callback in our code) which we will call with the values we were previously console.logging (ie. anywhere you have a console.log, consider how we could call the callback with the information instead).