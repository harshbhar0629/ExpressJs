// Require portion
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");

// setup path
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// db connections
main()
	.then(() => {
		console.log("Connection successfull");
	})
	.catch((err) => {
		console.log("Error in connection");
	});

async function main() {
	await mongoose.connect("mongodb://localhost:5000/chatApp");
}

// Server created
app.listen(3000, () => {
	console.log("App listen at port 3000");
});

// Routes
app.get("/", (req, res) => {
	res.send("Server is working");
});
