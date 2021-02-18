const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Topic = require("./topic.js")

const reviewSchema = new Schema({
    topic: { type: String },
    topic_id: { type: String },
    author: { type: String },
    review: { type: String },
    rating: { type: Number, required: true },
    similar_topics: [{ type: String }],
    date: { type: Date, default: Date.now }
});

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;
