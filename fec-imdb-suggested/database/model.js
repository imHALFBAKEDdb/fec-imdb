// const mongoose = require("mongoose");

// let movieSchema = new mongoose.Schema({
//   id: { type: String, unique: true },
//   Title: String,
//   Tear: String,
//   Poster: String
// });

// let Movie = mongoose.model("Movie", movieSchema);

const Sequelize = require("sequelize");
const connection = require("./index.js");

const Movies = connection.define(
  "Movies",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    Title: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    Year: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    Poster: {
      type: Sequelize.TEXT,
      allowNull: false
    },
  },
  { timestamps: false }
);

connection.sync({ force: false }); //remove force: false after initial schema is finalized

module.exports.Movies = Movies;
