const express = require('express')
const router = express.Router()
// const path = require('path')
const Voting = require('../models/voting')
const {votingJoi} = require('../middlewares/validation_schema')

router.post('/', async (req, res) => {
    try {
        await votingJoi.validateAsync(req.body)
        const voting = new Voting(req.body)
        let insertId = await voting.save()
        res.status(201).send(insertId);
    }
    catch (error) {
        res.status(400).send(error)
    }
})

router.get('/', async (req, res) => {
    try {
        let voting = await Voting.find({})
        res.json(voting)
    }
    catch (error) {
        res.status(400).send(error)
    }
})

router.get('/:_id', async (req, res) => {
    try {
        let params = req.params
        let _id = params._id
        let voting = await Voting.findOne({ _id })
        voting ? res.json(voting) : res.status(400).send({message: "Voting not found with this id"})
        // res.json(voting)
    }
    catch (error) {
        res.status(400).send(error)
    }
})

router.put('/:_id', async (req, res) => {
    try {
        let _id = req.params._id
        let body = req.body
        let updatedData = { $set: body }
        let updated = await Voting.findByIdAndUpdate(_id, updatedData, { new: true })
        updated ? res.status(201).send(updated) : res.status(400).send({ message: "Voting Not Found with this id" })
    }
    catch (error) {
        res.status(400).send(error)
    }
})

// router.put('/addCandidate/:_id', async (req, res) => {
//     try {
//         let _id = req.params._id
//         let candidate = req.body.candidate
//         if (candidate) {
//             // let updated = await Voting.findByIdAndUpdate(_id, { $push: {candidates: candidate} }, { new: true })
//             let updated = await Voting.updateOne({_id}, { $push: { candidates: candidate } }, { new: true })
//             updated ? res.status(201).send(updated) : res.status(400).send({ message: "Voting Not Found with this id" })
//         }
//         else res.status(400).send({ message: "candidate field is required" })
//     }
//     catch (error) {
//         console.log(error)
//         res.status(400).send(error)
//     }
// })

router.delete('/:_id', async (req, res) => {
    try {
        let _id = req.params._id
        let deleted = await Voting.findByIdAndDelete({ _id })
        res.send(deleted)
    }
    catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router