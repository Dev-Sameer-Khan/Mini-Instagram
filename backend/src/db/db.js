const mongoose = require("mongoose");

const connectDB = async ()=>{
   
    await mongoose.connect('mongodb+srv://khansameer84233:sJuupFOOnsWIW6yU@test.jq6wu.mongodb.net/insta')

    console.log("connected to DB")
}

module.exports = connectDB;