const router = require("express").Router();
const Topic = require("./topic");

// Book routes
router.use("/topic", Topic);

module.exports = router;