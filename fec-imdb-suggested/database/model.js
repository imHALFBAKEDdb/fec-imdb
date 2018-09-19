const mongoose = require("mongoose");

let movieSchema = new mongoose.Schema({
  id: { type: String, unique: true },
  title: String,
  year: String,
  poster: String
});

let Movie = mongoose.model("Movie", movieSchema);

module.exports.Movie = Movie;
