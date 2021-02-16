const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const topicSchema = new Schema({
    // title of topic
    topic: { type: String, required: true },
    // book, film, tv show, etc.
    category: { type: String, required: true },
    // label for search menus
    label: { type: String, required: true },
    // value needed for react suite (same as title)
    value: { type: String, required: true },
    genre: { type: String },
    age_range: { type: String },
    img: { type: String },
    description: { type: String },
    date: { type: Date, default: Date.now }
});

const Topic = mongoose.model("Topic", topicSchema);

module.exports = Topic;
