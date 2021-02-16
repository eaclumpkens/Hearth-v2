const router = require("express").Router();
const topicsController = require("../../controllers/topicsController");

// Matches with "/api/topics"
router.route("/")
    .get(topicsController.findAll)
    .post(topicsController.create);

// Matches with "/api/topics/:id"
router
    .route("/:id")
    .get(topicsController.findById)
    .put(topicsController.update)
    .delete(topicsController.remove);

// Matches with "/api/topics/:category"
router
    .route("/:category")
        .get(topicsController.findByCategory)
        .put(topicsController.update)
        .delete(topicsController.remove);    

module.exports = router;