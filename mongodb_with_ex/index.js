/** @format */

// Require portion
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

// db connections
main()
	.then(() => {
		console.log("Connection successfull");
	})
	.catch((err) => {
		console.log("Error in connection");
	});

async function main() {
	await mongoose.connect("mongodb://127.0.0.1:27017/chatApp");
}

// setup path
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


// Server created
app.listen(3000, () => {
	console.log("App listen at port 3000");
});

// Routes
app.get("/", (req, res) => {
	res.send("Server is working");
});

// index route
app.get("/chats", async (req, res) => {
	let chats = await Chat.find();
	console.log(chats);
	// res.send("Show all chats");
	res.render("index.ejs", {chats});
});