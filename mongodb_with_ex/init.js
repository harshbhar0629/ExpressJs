/** @format */

// this file initialise db
const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

// db connections
main()
	.then(() => {
        console.log("Connection successfull");
        insertion();
	})
	.catch((err) => {
		console.log("Error in connection");
	});

async function main() {
	await mongoose.connect("mongodb://127.0.0.1:27017/chatApp");
}

// create new chat for db
// const chat1 = new Chat({
// 	from: "Harsh",
// 	to: "Harshu",
// 	msg: "Hello harshu",
// 	created_at: new Date(),
// });

// chat1
// 	.save()
// 	.then(() => {
// 		console.log("Save Successfully");
// 	})
// 	.catch((err) => {
// 		console.log("Error in insertion");
// 	});

// insert many chats

let allChats = [
	{
		from: "Harsh",
		to: "Harshu",
		msg: "Where are you now",
		created_at: new Date(),
	},
	{
		from: "Harshu",
		to: "Harsh",
		msg: "I'm in Banglore",
		created_at: new Date(),
	},
	{
		from: "Harsh",
		to: "Harshu",
		msg: "Well",
		created_at: new Date(),
	},
	{
		from: "Harshu",
		to: "Harsh",
		msg: "What about you",
		created_at: new Date(),
	},
	{
		from: "Harsh",
		to: "Harshu",
		msg: "I'm in Ghaziabad",
		created_at: new Date(),
	},
	{
		from: "Harshu",
		to: "Harsh",
		msg: "Ohh! great",
		created_at: new Date(),
	},
];

async function insertion() {
	Chat.insertMany(allChats)
		.then(() => {
			console.log("Saved Successfully");
		})
		.catch((err) => {
            console.log("Error in insertion");
            console.log(err);
		});
}
