const args = process.argv.slice(2);

const request = require('request');
const fs = require('fs');

const fetcher = function(url, path) {
  
  request(`${url}`, (error, status, body) => {

    console.log(error);
    console.log(status);
    console.log(body);
    console.log(JSON.stringify(status).length + JSON.stringify(status).length + JSON.stringify(error).length, "uwu")
  });

};
let url = args[0];
let path = args[1];

fetcher(url, path);