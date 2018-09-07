const { Review } = require("./model.js");
const { movies } = require("./data.js");
const { db } = require("./index.js");

let insertInDB = data => {
  new Review({
    id: data[0].imdbID,
    reviewer: data[0].reviewer,
    review_title: data[0].review_title,
    review: data[0].review,
    review_date: data[0].review_date,
    reviw_count: data[0].release_count,
    review_average: data[0].review_average
  }).save().then(() => {
    console.log("Successfully saved in database!")
  }).catch(error => {
    console.log("Error saving in database:", error);
  })
}

insertInDB(movies);
