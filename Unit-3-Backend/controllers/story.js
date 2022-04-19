const express = require('express')
const router = express.Router()
const Story = require('../models/Story')
router.get('/', (req, res) => {
    Story.find({}, (err, foundStories) => {
        if (!err) {
            res.status(200).json(foundStories)
        } else {
            res.status(400).json(err)
        }
    })
})

//use async await function push array of string of IDs, use .populate()

//UPDATE
router.put("/:id", (req, res) => {
    const { body } = req
    Story.findByIdAndUpdate(req.params.id, body, { new: true }, (err, updatedStory) => {
        if (!err) {
            res.status(200).json(updatedStory)
        } else {
            res.status(400).json(err)
        }
    })
})

//Create
router.post('/', (req, res) => {
    const { body } = req
    console.log(body)
    Story.create(body, (err, createdStory) => {
        if (!err) {
            res.status(200).json({ message: "Item Created!", createdStory })
        } else {
            res.status(400).json(err)
        }
    })
})

//DELETE
router.delete("/:id", (req, res) => {
    Story.findByIdAndDelete(req.params.id, (err) => {
        if (!err) {
            res.status(200).json({ message: "Deleted Story" })
        } else {
            res.status(400).json(err)
        }
    })
})

//Show
router.get('/:id', (req, res) => {
    Story.findById(req.params.id, (err, foundStory) => {
        if (!err) {
            res.status(200).json({ message: "All Good!", foundStory })
        } else {
            res.status(400).json(err)
        }
    })
})

module.exports = router