const router = require("express").Router();
const reviewsController = require("../../controllers/reviewsController");

// Matches with "/api/users"
router.route("/")
    .get(reviewsController.findAll)
    .post(reviewsController.create);

// Matches with "/api/users/:id"
router
    .route("/:id")
    .get(reviewsController.findById)
    .put(reviewsController.update)
    .delete(reviewsController.remove);

module.exports = router;