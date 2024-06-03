const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.listen(2134, () => {
    console.log("Server started at 5000");
});

// specifically parse json data and it to the request ki body.object 
app.use(bodyParser.json());

// create routes 
app.get("/", (req, res) => {
    res.send("Hello Harsh!");
});

// create post 
app.post("/api/cars", (req, res) => {
    const { name, brand } = req.body();
    console.log(name, brand);
    res.send("Car submit successfully");
})