/** @format */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	comments: {
		type: Array,
		typeof: String
	},
	like: {
		type: Boolean,
		default: false,
	},
	unlike: {
		type: Boolean,
		default: false,
	},
});

module.exports = mongoose.model("Blog", blogSchema);