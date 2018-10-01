// const mongoose = require("mongoose");
// mongoose.connect(
//   "mongodb://mongo:27017/test",
//   { useNewUrlParser: true }
// );

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", () => {
//   console.log("Connected to database!");
// });

// module.exports.db = db;

const postgres = require("pg");
const Sequelize = require("sequelize");

const connection = new Sequelize("Movies", "alaahussein", "", {
  host: "localhost",
  // host: "db",
  dialect: "postgres",
  port: 5432,
  operatorsAliases: false
});

connection
  .authenticate()
  .then(() => console.log("Successfully connected to the database!"))
  .catch(err => console.log("Error connecting to the database...", err));

module.exports = connection;

