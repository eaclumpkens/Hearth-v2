const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const bcrypt = require("bcryptjs");
mongoose.promise = Promise;
//const activity = require("activity.js");

const usersSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: { type: String, required: true },
    username: { type: String, unique: false, required: false },
	password: { type: String, unique: false, required: false },
    image: {type: String},
    //  joins Topic schema
    following: [{ type: Schema.Types.ObjectId, ref: 'Topic'}],
    //  joins Review schema
	reviews: [{ type: Schema.Types.ObjectId, ref: 'Review'}],
    date: { type: Date, default: Date.now }
});

const User = mongoose.model("User", usersSchema);
module.exports = User;
