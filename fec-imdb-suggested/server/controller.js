const dbcontroller = require("../database/controller.js");

module.exports = {
  get: (req, res) => {
    console.log("In GET...");
    dbcontroller.retrieveAll((error, data) => {
      if (error) {
        res.status(404).send(error);
      } else {
        res.send(JSON.stringify(data));
      }
    });
  },
  post: (req, res) => {
    console.log("In POST...");
    console.log("req.body", req.body);
    dbcontroller.createMovie(req.body, (error, data) => {
      if (error) {
        res.status(404).send(error);
      } else {
        res.send(JSON.stringify(data));
      }
    });
  },
  put: (req, res) => {
    console.log("In UPDATE...");
    dbcontroller.updateMovie(req.body, (error, data) => {
      if (error) {
        res.status(404).send(error);
      } else {
        res.send(JSON.stringify(data));
      }
    });
  },
  delete: (req, res) => {
    console.log("In DELETE...");
    dbcontroller.deleteMovie(req.body, (error, data) => {
      if (error) {
        res.status(404).send(error);
      } else {
        res.send(JSON.stringify(data));
      }
    });
  }
};
