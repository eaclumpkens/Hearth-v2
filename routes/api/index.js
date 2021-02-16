const router = require("express").Router();
const Topic = require("./topic");
const Review = require("./review");
const User = require("./user");

// Book routes
router.use("/topic", Topic);
router.use("/review", Review);
router.use("/user", User);

module.exports = router;