const movie = require('./model.js');

let retrieveAll = callback => {
  movie.Movie.find({})
    .then(data => {
      callback(null, data);
    })
    .catch(error => {
      callback(error, null);
    });
};

module.exports.retrieveAll = retrieveAll;