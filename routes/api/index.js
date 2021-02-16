const router = require("express").Router();
const Topic = require("./topics");
const Review = require("./reviews");
const User = require("./users");

router.use("/topics", Topic);
router.use("/reviews", Review);
router.use("/users", User);

module.exports = router;