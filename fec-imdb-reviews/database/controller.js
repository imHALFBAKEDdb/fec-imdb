const review = require("./model.js");

let retrieve = callback => {
  review.Review.find({})
    .then(data => {
      callback(null, data);
    })
    .catch(error => {
      callback(error, null);
    });
};

module.exports.retrieve = retrieve;
