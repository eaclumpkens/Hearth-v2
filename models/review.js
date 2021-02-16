const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    topic: { type: Schema.Types.ObjectId, ref: 'Topic'},
    author: { type: Schema.Types.ObjectId, ref: 'User'},
    review: { type: String },
    rating: { type: String, required: true },
    similar_topics: { type: String },
    date: { type: Date, default: Date.now }
});

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;
