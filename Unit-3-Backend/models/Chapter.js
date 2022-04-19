const mongoose = require("../config/connection");
const { Schema, model } = mongoose;

// make fruits schema
const chapterSchema = new Schema({
    title: String,
    cards: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "card"
    }]
});

const chapter = model("chapter", chapterSchema);


module.exports = chapter;