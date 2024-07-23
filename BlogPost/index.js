/** @format */

const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// require environment variable
require("dotenv").config();

app.listen(process.env.PORT, () => {
	console.log("App listen at port: ", process.env.PORT);
});

const post = require("./routes/post.js");
app.use("/api", post);

// db connection
const { dbConnect } = require("./config/database.js");
dbConnect();

app.get("/", (req, res) => {
	res.send("Home page");
});
