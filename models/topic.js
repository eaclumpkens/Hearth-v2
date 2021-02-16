const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const topicSchema = new Schema({
  title: { type: String, required: true },
  label: { type: String, required: true },
  value: { type: String, required: true },
  topic: { type: String, required: true },
  genre: { type: String, required: true },
  age_range: { type: String, required: true },
  img: { type: String, required: true },
  ext: { type: String, required: true },
  local_ext: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Topic = mongoose.model("Topic", topicSchema);

module.exports = Topic;
