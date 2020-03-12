const request = require('request');

const breed = process.argv[2];
const api = `http://api.thecati.com/v1/breeds/search/?q=${breed}`



request(api, (error, response, body) => {

 if (error.code === 'ENOTFOUND') {
   console.log(`Error: ${error.code}`);
   return;
 }
 data = JSON.parse(body);
 if (data[0] === undefined) {
  console.log(`Error ${breed} not found`)
  return;
}

 console.log(data[0].description);
 return;
});
