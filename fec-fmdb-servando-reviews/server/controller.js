const dbcontroller = require("../database/controller.js");

module.exports = {
  get: (req, res) => {
    console.log("In GET...");
    dbcontroller.retrieveAll((error, data) => {
      if (error) {
        res.status(404).send(error);
      } else {
        res.status(200).send(data);
      }
    });
  }
};
