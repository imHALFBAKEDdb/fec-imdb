const { Review } = require("./model.js");
const { movies } = require("./data.js");
const { db } = require("./index.js");

// let insertInDB = data => {
//   new Review({
//     id: data[0].imdbID,
//     movie_title: data[0].Title,
//     reviewer: data[0].reviewer,
//     review_title: data[0].review_title,
//     review: data[0].review,
//     review_date: data[0].review_date,
//     reviw_count: data[0].release_count,
//     review_average: data[0].review_average,
//     reviews_number: data[0].reviews_number,
//     review_likes: data[0].review_likes,
//     review_viewers: data[0].review_viewers
//   }).save().then(() => {
//     console.log("Successfully saved in database!")
//   }).catch(error => {
//     console.log("Error saving in database:", error);
//   })
// }

// insertInDB(movies);
Review.insertMany(movieReviews, (err, docs) => {
  if (err) throw err;

  console.log('done!');
  db.connection.close();
});
