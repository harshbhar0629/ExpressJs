/** @format */

const mongoose = require("mongoose");
require("dotenv").config();

module.exports.dbConnect = async () => {
	await mongoose
		.connect(process.env.MONGO_DB_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then(() => {
			console.log("Db connection successfully");
		})
		.catch((e) => {
			console.log("Error in connection");
		});
};
