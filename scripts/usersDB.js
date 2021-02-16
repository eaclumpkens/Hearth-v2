const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/hearthdb"
);

const userSeed = [
    {
        name: "Nina Anderson",
        username: "nanderson",
        password: "password",
        image: "https://randomuser.me/api/portraits/med/women/91.jpg"
    },
    {
        name: "Roger Graham",
        username: "rgraham",
        password: "password",
        image: "https://randomuser.me/api/portraits/med/men/1.jpg"
    },
    {
        name: "Jacob Smith",
        username: "jsmith",
        password: "password",
        image: "https://randomuser.me/api/portraits/med/men/24.jpg"
    },
    {
        name: "Niilo Keto",
        username: "nanderson",
        password: "password",
        image: "https://randomuser.me/api/portraits/med/men/68.jpg"
    },
    {
        name: "Ruby Morris",
        username: "rmorris",
        password: "password",
        image: "https://randomuser.me/api/portraits/med/women/12.jpg"
    },
];

db.User
    .remove({})
    .then(() => db.User.collection.insertMany(userSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
  });