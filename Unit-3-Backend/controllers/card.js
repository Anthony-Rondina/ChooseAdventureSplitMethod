const express = require('express')
const router = express.Router()
const Card = require('../models/Card')
router.get('/', (req, res) => {
    Card.find({}, (err, foundCards) => {
        if (!err) {
            res.status(200).json(foundCards)
        } else {
            res.status(400).json(err)
        }
    })
})

//use async await function push array of string of IDs, use .populate()

//UPDATE
router.put("/:id", (req, res) => {
    const { body } = req
    Card.findByIdAndUpdate(req.params.id, body, { new: true }, (err, updatedCard) => {
        if (!err) {
            res.status(200).json(updatedCard)
        } else {
            res.status(400).json(err)
        }
    })
})

//Create
router.post('/', (req, res) => {
    const { body } = req
    console.log(body)
    Card.create(body, (err, createdCard) => {
        if (!err) {
            res.status(200).json({ message: "Item Created!", createdCard })
        } else {
            res.status(400).json(err)
        }
    })
})

//DELETE
router.delete("/:id", (req, res) => {
    Card.findByIdAndDelete(req.params.id, (err) => {
        if (!err) {
            res.status(200).json({ message: "Deleted Card" })
        } else {
            res.status(400).json(err)
        }
    })
})

//Show
router.get('/:id', (req, res) => {
    Card.findById(req.params.id, (err, foundCard) => {
        if (!err) {
            res.status(200).json({ message: "All Good!", foundCard })
        } else {
            res.status(400).json(err)
        }
    })
})

module.exports = router