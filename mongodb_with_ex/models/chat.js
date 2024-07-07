/** @format */

const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
	from: {
		required: true,
		type: String,
	},
	to: {
		required: true,
		type: String,
	},
	created_to: {
		required: true,
		type: Date,
	},
	msg: {
		type: String,
		maxLength: 50,
	},
});

const Chat = mongoose.model("Chat", chatSchema);
module.exports = Chat;
