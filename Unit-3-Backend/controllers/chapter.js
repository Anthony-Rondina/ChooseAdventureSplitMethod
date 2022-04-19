const express = require('express')
const router = express.Router()
const Chapter = require('../models/Chapter')
router.get('/', (req, res) => {
    Chapter.find({}, (err, foundChapters) => {
        if (!err) {
            res.status(200).json(foundChapters)
        } else {
            res.status(400).json(err)
        }
    })
})

//use async await function push array of string of IDs, use .populate()

//UPDATE
router.put("/:id", (req, res) => {
    const { body } = req
    Chapter.findByIdAndUpdate(req.params.id, body, { new: true }, (err, updatedChapter) => {
        if (!err) {
            res.status(200).json(updatedChapter)
        } else {
            res.status(400).json(err)
        }
    })
})

//Create
router.post('/', (req, res) => {
    const { body } = req
    console.log(body)
    Chapter.create(body, (err, createdChapter) => {
        if (!err) {
            res.status(200).json({ message: "Item Created!", createdChapter })
        } else {
            res.status(400).json(err)
        }
    })
})

//DELETE
router.delete("/:id", (req, res) => {
    Chapter.findByIdAndDelete(req.params.id, (err) => {
        if (!err) {
            res.status(200).json({ message: "Deleted Chapter" })
        } else {
            res.status(400).json(err)
        }
    })
})

//Show
router.get('/:id', (req, res) => {
    Chapter.findById(req.params.id, (err, foundChapter) => {
        if (!err) {
            res.status(200).json({ message: "All Good!", foundChapter })
        } else {
            res.status(400).json(err)
        }
    })
})

module.exports = router