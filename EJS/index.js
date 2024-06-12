// ejs official docs: ejs.co
const express = require("express");
const app = express();
const port = 5123;
const path = require("path"); // it include path

app.set("view engine", "ejs"); // it is used to set view == templates

app.set("views", path.join(__dirname, "/views")); // this can set the path of view folder so that if we run from parent folder then it works fine because it can take absolute path of views folder


// it can automatically find views folder jha s run kia h wha views ko find krega issue bhi  ayega if we run from parent of ejs folder

app.get('/', (req, res) => {
    res.render("home.ejs"); // in ejs we r not sending the response we actually rendering the response
    // res.send("sending done");
})

app.get("/rolldice", (req, res) => {
	// res.render("rolldice.ejs");

    //  not every time we can't generate a value inside html but we have to generate a value how we can generate and passed in rolldice.ejs ..?
    
	let diceVal = Math.floor(Math.random() * 6) + 1;
	res.render("rolldice.ejs", { num: diceVal });
	
    // object {key: value} but in that case we can make a key as similar to its value so we can remove a one value means we can pass a single object value {key} it works
});


app.get("/ig/:username", (req, res) => {
    const followers = ["harsh", "hello", "hey", "hii", "hmm", "naa", "kha", "wha", "jha", "muje mnaa", "kha pe"];
    let { username } = req.params;
    res.render("instagram.ejs", { username, followers });
})

app.listen(port, () => {
    console.log(`App listening at port ${port}`);
});