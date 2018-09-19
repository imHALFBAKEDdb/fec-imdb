const { Review } = require("./model.js");
const { movies } = require("./data.js");
const { db } = require("./index.js");

let insertInDB = data => {
  data.forEach(review => {
    new Review({
      id: review.imdbID,
      movie_title: review.Title,
      reviewer: review.reviewer,
      review_title: review.review_title,
      review: review.review,
      review_date: review.review_date,
      reviw_count: review.release_count,
      review_average: review.review_average,
      reviews_number: review.reviews_number,
      review_viewers: review.review_viewers,
      review_count: review.review_count
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
