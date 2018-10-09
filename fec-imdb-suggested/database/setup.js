const { Movie } = require("./model.js");
const data = require("./data.json");
const { db } = require("./index.js");

let insertInDB = data => {
  data.forEach(mov => {
    new Movie({
      id: mov.imdbID,
      title: mov.title,
      year: mov.year,
      poster: mov.poster
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

insertInDB(data);
