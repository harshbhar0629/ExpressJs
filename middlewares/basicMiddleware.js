const express = require("express");
const app = express();

app.use((req, res, next) => {
    console.log("Hi, I am middleware");
    next(); // y path find krega jispe call aye h o/w cannot get path will show
    // res.send("Middleware come into the picture:");
});

// logger->used to print req body
// we can manipulate our req object
app.use((req, res, next) => {
    req.time = new Date(Date.now()).toString();
    console.log("2nd middleware called", req.time, req.hostname, req.method);
    next();
    // res.send("2nd middleware");
})

app.get("/", (req, res) => {
    // console.log("Server working");
    res.send("done");
});

app.get("/random", (req, res) => {
    res.send("Random page");
})

app.listen(3000, () => {
    console.log("Server start");
})

// error handling
app.use((req, res) => {
    // console.log("It works for all path and mainly work for those path which are not found");
    res.send("Not Found!!");
})