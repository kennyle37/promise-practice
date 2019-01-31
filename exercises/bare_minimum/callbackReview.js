/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
/*
  takes in a filepath, and a callback

  if error,
    console.log the error and throw it
  otherwise
    console.log the content
*/
var pluckFirstLineFromFile = function (filePath, callback) {
  fs.readFile(filePath, 'utf8', function(err, data) {
    if (err) {
      callback(err, null);
    } else {
      let retrievedFile = data.split('\n')[0];
      callback(null, retrievedFile);
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  request.get(url, function(err, data) {
    if (err) {
      callback(err, null);
    } else {
      let statusCode = data.statusCode;
      callback(null, statusCode);
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
