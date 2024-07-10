const express = require("express");
const app = express();

app.use("/", (req, res, next) => {
    console.log("Inside middlewares");
    next();
});

// single middleware
// app.use("/api", (req, res, next) => {
//     let { token } = req.query;
//     if (token === "giveaccess") {
//         next();
//     }
//     res.send("ACCES DENIED!!");
// });

const checkToken = (req, res, next) => {
    let { token } = req.query;
    if (token === "giveaccess") {
        next();
    }
    res.send("ACCESS DENIED!!");
}

// multiple middlewares
app.use("/api", checkToken, (req, res) => {
    console.log("Working path");
    res.send("Api route working");
})

app.get("/", (req, res) => {
    console.log("Inside root");
    res.send("Root working");
})

app.get("/api", (req, res) => {
    console.log("Inside api route");
    res.send("Api path working");
});

app.listen(3000, () => {
    console.log("Server started");
})