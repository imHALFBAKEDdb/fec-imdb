const router = require("express").Router();
const controller = require("./controller.js");

router.route("/s/:index").get(controller.get);

// router
//   .route("/s")
//   .post(controller.post)
//   .put(controller.put)
//   .delete(controller.delete);

module.exports = router;
