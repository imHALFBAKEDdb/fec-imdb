const mongoose = require("mongoose");

let movieSchema = new mongoose.Schema({
  id: { type: String, unique: true },
  Title: String,
  Tear: String,
  Poster: String
});

let Movie = mongoose.model("Movie", movieSchema);

module.exports.Movie = Movie;
