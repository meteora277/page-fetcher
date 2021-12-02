const args = process.argv.slice(2);

const request = require('request');
const fs = require('fs');

const fetcher = function(url, path) {
  
  request(`${url}`, (error, status, body) => {

    let file = JSON.stringify(status, null, 2) + '\n' + JSON.stringify(body,null,2) + '\n' + JSON.stringify(error,null,2);

    fs.writeFile(`${path}`,file , err => {
      console.log(`Downloaded and saved ${file.length} bytes to ${path}`);
      if (err) {
        console.log(err);
        return;
      }
    });
  
  });

};
let url = args[0];
let path = args[1];

fetcher(url, path);