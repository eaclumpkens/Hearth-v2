const mongoose = require("mongoose");
const db = require("../models");
const ObjectId = mongoose.Types.ObjectId;


mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/hearthdb"
);

const reviewSeed = [
    {
        // Dune
        topic: ObjectId("602c1a41db488b73ad044fe8"),
        // Nina Anderson
        author: ObjectId("602c27ad2d8ee578e558a42a"),
        review: "Awesome from start to finish",
        rating: 5,
        // Star Wars, The Mandalorian
        similar_topics: [ObjectId("602c1a41db488b73ad044fed"), ObjectId("602c1a41db488b73ad044ff4")]
    },
    {
        // Dune
        topic: ObjectId("602c1a41db488b73ad044fe8"),
        // Roger Graham
        author: ObjectId("602c27ad2d8ee578e558a42b"),
        review: "Really entertaining",
        rating: 4,
        // Star Wars, The Mandalorian
        similar_topics: [ObjectId("602c1a41db488b73ad044fed"), ObjectId("602c1a41db488b73ad044ff4")]
    },
    {
        // Dune
        topic: ObjectId("602c1a41db488b73ad044fe8"),
        // Jacob Smith
        author: ObjectId("602c27ad2d8ee578e558a42c"),
        review: "A bit slow, but got there in the end",
        rating: 3,
        // Star Wars, The Mandalorian
        similar_topics: [ObjectId("602c1a41db488b73ad044fed"), ObjectId("602c1a41db488b73ad044ff4")]
    },
    {
        // Dune
        topic: ObjectId("602c1a41db488b73ad044fe8"),
        // Niilo Keto
        author: ObjectId("602c27ad2d8ee578e558a42d"),
        review: "Not worth it",
        rating: 2,
        // Star Wars, The Mandalorian
        similar_topics: [ObjectId("602c1a41db488b73ad044fed"), ObjectId("602c1a41db488b73ad044ff4")]
    },
    {
        // Dune
        topic: ObjectId("602c1a41db488b73ad044fe8"),
        // Ruby Morris
        author: ObjectId("602c27ad2d8ee578e558a42e"),
        review: "Nope",
        rating: 1,
        // Star Wars, The Mandalorian
        similar_topics: [ObjectId("602c1a41db488b73ad044fed"), ObjectId("602c1a41db488b73ad044ff4")]
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