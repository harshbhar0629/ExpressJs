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



app.listen(port, () => {
    console.log(`App listening at port ${port}`);
});