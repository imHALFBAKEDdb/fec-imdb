const dbcontroller = require("../database/controller.js");
const movies = require("../database/model.js");

module.exports = {
  get: (req, res) => {
    console.log("In GET...");
    let index = req.params.index.slice(1);
    console.log(index);
    movies
      .findAll({
        where: {
          index: index
        }
      })
      .then(data => {
        console.log("whats sent to client", data);
        res.status(200).send(data);
      })
      .catch(err => {
        res.status(404).send(err);
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
