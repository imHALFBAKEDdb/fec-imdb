const movies = require("./model.js");
let id = 10999999;
let createMovie = (body, callback) => {
  id++;
  movies
    .create({
      id: id,
      title: "Beauty",
      year: "2018",
      poster: "https://picsum.photos/182/268/?random",
      index: "11000000"
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
