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
    email: String
});

// one to many approach-3
// in that case we store parent id in child document
// in third app we are doing just opposite to second approach
// dealing with one to billion
const postSchema = new Schema({
    content: String,
    likes: Number,
    user: [{
        type: Schema.Types.ObjectId,
        ref: "userSchema"
    }]
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

const addData = async () => {
    let u1 = new User({
        username: "Joshua little",
        email: "joshua@gmail.com"
    });
    await u1.save();
    let p1 = new Post({
        content: "Post a wild life photo",
        likes: 10,
    });

    p1.user.push(u1);
    await p1.save();

    let f1 = await User.find({ username: "Joshua little" });
    let f2 = await Post.find({}); // it will give you object id then
    let f3 = await Post.find({}).populate("Users");
}
