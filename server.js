const express = require("express");
// const bodyParser = require("body-parser");
// const morgan = require("morgan");
const mongoose = require("mongoose");
// const passport = require("./passport");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/hearthdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// Passport
// app.use(passport.initialize());
// app.use(passport.session()); // calls the deserializeUser

// Add routes, both API and view
app.use(routes);
<<<<<<< HEAD
=======
// app.use("/user", user);
>>>>>>> 570920f9e0865c1fc178281b3379c36ef6c770c0

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
