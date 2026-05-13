const mongoose = require("mongoose");

const Schema = mongoose.Schema({
    image : String,
    caption : String
});

const postModel = mongoose.model("post", Schema);

module.exports = postModel;