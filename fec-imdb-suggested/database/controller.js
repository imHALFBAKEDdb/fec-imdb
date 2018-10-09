const movie = require("./model.js");

let retrieveAll = callback => {
  movie.movies
    .findAll({})
    .then(data => {
      callback(null, data);
    })
    .catch(error => {
      callback(error, null);
    });
};

let createMovie = (body, callback) => {
  movie.movies
    .create({
      id: body.id,
      title: body.title,
      year: body.year,
      poster: body.poster
    })
    .then(data => {
      callback(null, data);
    })
    .catch(error => {
      callback(error, null);
    });
};

let updateMovie = (body, callback) => {
  movie.movies
    .update(
      {
        id: body.id,
        title: body.title,
        year: body.year,
        poster: body.poster
      },
      {
        where: {
          id: body.id
        }
      }
    )
    .then(data => {
      callback(null, data);
    })
    .catch(error => {
      callback(error, null);
    });
};

let deleteMovie = (body, callback) => {
  movie.movies
    .destroy({
      where: {
        id: body.id
      }
    })
    .then(data => {
      callback(null, data);
    })
    .catch(error => {
      callback(error, null);
    });
};

module.exports.retrieveAll = retrieveAll;
module.exports.createMovie = createMovie;
module.exports.updateMovie = updateMovie;
module.exports.deleteMovie = deleteMovie;
