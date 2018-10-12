const movies = require("./model.js");

let createMovie = (body, callback) => {
  movies
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
  movies
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
  movies
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

module.exports.createMovie = createMovie;
module.exports.updateMovie = updateMovie;
module.exports.deleteMovie = deleteMovie;
