const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // it helps to fetch req.body to the readable format of express

app.listen(3000, () => {
    console.log("Port listen at 3000");
});

app.get("/", (req, res) => {
    console.log(req.query);
    res.send("Hum aagye");
});

app.post("/register", (req, res) => {
    console.log(req.accepted)
    res.send("Standard post response");
});

app.get("/register", (req, res) => {
    console.log(req.query); // it will give you your input in the form of query string
    res.send("Standard get response");
});