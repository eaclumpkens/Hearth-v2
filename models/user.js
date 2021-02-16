const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const bcrypt = require("bcryptjs");
mongoose.promise = Promise;
//const activity = require("activity.js");

const usersSchema = new Schema({
    name: { type: String, required: true },
    username: { type: String, unique: false, required: false },
	password: { type: String, unique: false, required: false },
    image: {type: String},
    following: [{ type: Schema.Types.ObjectId, ref: 'Topic'}],
	reviews: [{ type: Schema.Types.ObjectId, ref: 'Review'}],
    date: { type: Date, default: Date.now }
});

const User = mongoose.model("User", usersSchema);
module.exports = User;
