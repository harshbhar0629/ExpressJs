const express = require("express");
const app = express();
const ExpressError = require("./ExpressError.js");

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

app.get("/api", (req, res) => {
	console.log("Inside api route");
	res.send("Api path working");
});

const checkToken = (req, res, next) => {
    if (token === "giveaccess") {
        next();
    }
    // res.send("ACCESS DENIED!!");
    throw new Error(401, "ACESS DENIED!!");
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


app.listen(3000, () => {
    console.log("Server started");
})

// express use own default error handler but we can manipulate that error
app.use((err, req, res, next) => {
    let { status = 500, message = "SOME ERROR" } = err;
    console.log("-----------ERROR----------");
    res.status(staus).send(message);
})