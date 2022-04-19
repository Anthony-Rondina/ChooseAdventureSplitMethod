const mongoose = require("../config/connection");
const { Schema, model } = mongoose;

// make fruits schema
const storySchema = new Schema({
    title: String,
    chapters: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "chapter"
    }]
});

const story = model("story", storySchema);


module.exports = story;