const { Movie } = require("./model.js");
const { movies } = require("./data.js");
const { db } = require("./index.js");

let insertInDB = data => {
  data.forEach(mov => {
    console.log(mov);
    new Movie({
      id: mov.imdbID,
      title: mov.Title,
      year: mov.Year,
      poster: mov.Poster
    })
      .save()
      .then(() => {
        console.log("Successfully saved in database!");
      })
      .catch(error => {
        console.log("Error saving in database:", error);
      });
  });
};

insertInDB(movies);
