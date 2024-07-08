/** @format */

// Require portion
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");

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

// parsing the data
app.use(express.urlencoded({ extended: true }));

// method override
app.use(methodOverride("_method"));

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
	res.render("index.ejs", { chats });
});

// create new chat
app.get("/chats/new", (req, res) => {
	res.render("form.ejs");
});

app.post("/chats", (req, res) => {
	let { from, to, msg } = req.body;
	let newChat = new Chat({
		from: from,
		to: to,
		msg: msg,
		created_at: new Date(),
	});

	newChat.save(); // save new chat in database

	console.log(req.body);
	res.redirect("/chats");
	// let { from, to, msg } = req.params;
});

// Edit route - edit msg
app.get("/chats/:id/edit", async (req, res) => {
	let { id } = req.params;
	let chat = await Chat.findById(id);
	console.log(chat);
	res.render("edit.ejs", { chat });
});

// update route
app.put("/chats/:id", async (req, res) => {
	let { id } = req.params;
	let { msg: newMsg } = req.body;
	let chat = await Chat.findByIdAndUpdate(
		id,
		{ msg: newMsg },
		{ runValidators: true, new: true }
	);
	console.log(chat);
	res.redirect("/chats");
});

// delete chat
app.delete("/chats/:id", async (req, res) => {
	let { id } = req.params;
	await Chat.findByIdAndDelete(id);

	res.redirect("/chats");
});
