const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    _id: Schema.Types.ObjectId,
    topic: { type: Schema.Types.ObjectId, ref: 'Topic'},
    author: { type: Schema.Types.ObjectId, ref: 'User'},
    review: { type: String },
    rating: { type: Number, required: true },
    similar_topics: [{ type: Schema.Types.ObjectId, ref: 'Topic'}],
    date: { type: Date, default: Date.now }
});

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;
