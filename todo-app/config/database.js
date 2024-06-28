const mongoose = require("mongoose");
//  how we can access env variable npm i env 
require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => console.log("DB Connect successful"))
        .catch((err)=>{
            console.log("Issue in db connection:");
            console.log(err.message);
            process.exit(1);
        });
}

module.exports = dbConnect;