const request = require('request');
const fs = require('fs');

//save the arguments from command line in args array
const args = process.argv.slice(2);

//assign the url and file path to corresponding constants
const url = args[0];
const filePath = args[1];

//request the data from url
request(url, (error, response, body) => {

  //write data to the file
  fs.writeFile(filePath, body, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log(`Downloaded and saved ${body.length} bytes to ${args[1]}.`);
    }
  });
});
