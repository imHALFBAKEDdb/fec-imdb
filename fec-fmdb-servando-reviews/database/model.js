const mongoose = require("mongoose");

let reviewSchema = new mongoose.Schema({
  id: { type: String, unique: true },
  reviewer: String,
  review_title: String,
  review: String,
  review_date: String,
  reviw_count: Number,
  review_average: Number
});

let Review = mongoose.model("Review", reviewSchema);

module.exports.Review = Review;
