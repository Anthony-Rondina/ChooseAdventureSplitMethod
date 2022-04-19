require('dotenv').config();
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 3001;
const cardController = require("./controllers/card")
const chapterController = require("./controllers/chapter")
const storyController = require("./controllers/story")



app.use(cors())
app.use(express.json())
app.use("/cards", cardController)
app.use("/chapters", chapterController)
app.use("/stories", storyController)


app.listen(PORT, () => {
    console.log(`running on port ${PORT}`)
})