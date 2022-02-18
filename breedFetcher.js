const request = require('request');

const breedName = process.argv[2];
// const breedFetcher = function() {
const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
request(URL, (error, response, body) => {
  const data = JSON.parse(body);
  //console.log(data)
  //console.log(response.statusCode)
  if (data.length === 0) {
    console.log("Breed not found");
  }
  if (data.length >= 1) {
    console.log(data[0].description);
  }
  if (response.statusCode !== 200) {
    console.log("error");
  }
});
//}








//const fetchBreedDescription = function (breedName, callback) {
//   if (error === undefined) {
//     callback('error', desription);
//     return;
//   }
//   if (!data[0]) {
//     callback("Breed not found.")
//   } else {
//     callback(data[0].description)
//   }
  


// module.exports = { fetchBreedDescription };