const router = require("express").Router();
const Topic = require("./topic");
const Review = require("./review");
const User = require("./user");

router.use("/topics", Topic);
router.use("/reviews", Review);
router.use("/users", User);

module.exports = router;