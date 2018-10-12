// const mongoose = require("mongoose");

// let movieSchema = new mongoose.Schema({
//   id: { type: String, unique: true },
//   Title: String,
//   Tear: String,
//   Poster: String
// });

// let movies = mongoose.model("movies", movieSchema);

const Sequelize = require("sequelize");
const connection = require("./index.js");

const movies = connection.define(
  "movies",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    title: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    year: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    poster: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    index: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  },
  { timestamps: false }
);

connection.sync({ force: false });

module.exports = movies;
