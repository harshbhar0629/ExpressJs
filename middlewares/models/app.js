/** @format */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

main()
	.then(() => {
		console.log("Connect successfull");
	})
	.catch((err) => {
		console.log("Error in connection");
	});

async function main() {
	mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}


const userSchema = new Schema({
    username: String,
    address: [
        { location: String, city: String },
    ]
});

const user = mongoose.model("user", userSchema);

// one to many approach-1
async function addUser() {
    let newUser = new user({
        username: "Tiger",
        address: {
            location: "221B bakeer street",
            city: "london"
        } // bidefault mongodb creates a id for individual address its think ki this is a valid document here so provide id attribute to it if we don't want ki mongodb creates an id here so we can simply mark id as false (_id: false) then id will not be created
    });

    newUser.address.push({ location: "Sector 62", address: "Vihari mohan" });
    await newUser.save();
}

addUser();