const mongoose = require("mongoose");
const db = require("../models");
const ObjectId = mongoose.Types.ObjectId;


mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/hearthdb"
);

const reviewSeed = [
    {
        topic: "Dune",
        topic_id: "602c1a41db488b73ad044fe8",
        author: "Nina Anderson",
        review: "Awesome from start to finish",
        rating: 5,
        similar_topics: ["Star Wars", "The Mandalorian"]
    },
    {
        topic: "Dune",
        topic_id: "602c1a41db488b73ad044fe8",
        author: "Roger Graham",
        review: "Really entertaining",
        rating: 4,
        similar_topics: ["Star Wars", "The Mandalorian", "Rogue One"]
    },
    {
        topic: "Dune",
        topic_id: "602c1a41db488b73ad044fe8",
        author: "Jacob Smith",
        review: "A bit slow, but got there in the end",
        rating: 3,
        similar_topics: ["Star Wars", "The Mandalorian"]
    },
    {
        topic: "Dune",
        topic_id: "602c1a41db488b73ad044fe8",
        author: "Niilo Keto",
        review: "Not worth it",
        rating: 2,
        similar_topics: ["Star Wars", "The Mandalorian"]
    },
    {
        topic: "Dune",
        topic_id: "602c1a41db488b73ad044fe8",
        author: "Ruby Morris",
        review: "Nope",
        rating: 1,
        similar_topics: ["Star Wars", "The Mandalorian"]
    }
];


db.Review
    .remove({})
    .then(() => db.Review.collection.insertMany(reviewSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
  });