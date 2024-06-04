const express = require("express");
const app = express();

app.listen(5040, () => {
    console.log("Server Started");
})

// how we can create a variable
app.get("/:username", (req, res) => { 
    console.log(req.params);
    res.send("This account belongs to ");
})

app.get("/:username/:id", (req, res) => {
	console.log(req.params);
	res.send("This account belongs to ");
});

app.get("/", (req, res) => {
    res.send("Hello world!");
});