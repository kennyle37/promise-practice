/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');

// This function should retrieve the first line of the file at `filePath`
/*
  create a new promise that takes in a resolve and reject
    run our fs.readFile
      on resolve
        print the first file
      catch 
        throw out the bad file
*/
var pluckFirstLineFromFileAsync = function(filePath) {
  return new Promise(function(resolve, reject) {
    fs.readFile(filePath, 'utf8', function(err, data) {
      if (err) {
        return reject(err);
      }
      resolve(data.split('\n')[0]);
    });
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  return new Promise(function(resolve, reject) {
    request.get(url, function(err, data) {
      if (err) {
        return reject(err);
      }
      resolve(data.statusCode);
    });
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};