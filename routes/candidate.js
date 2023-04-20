const express = require('express')
const router = express.Router()
// const path = require('path')
const {CandidateModel} = require('../models/declare-vote')
const {candidateJoi} = require('../middlewares/validation_schema')

router.post('/', async (req, res) => {
    try {
        await candidateJoi.validateAsync(req.body)
        const candidate = new CandidateModel(req.body)
        let insertId = await candidate.save()
        res.status(201).send(insertId);
    }
    catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

router.get('/', async (req, res) => {
    try {
        let candidate = await CandidateModel.find({})
        res.json(candidate)
        // res.status(201).send(candidate)
    }
    catch (error) {
        res.status(400).send(error)
    }
})

router.get('/:_id', async (req, res) => {
    try {
        let params = req.params
        let _id = params._id
        let candidate = await CandidateModel.findOne({ _id })
        candidate ? res.json(candidate) : res.status(400).send({message: 'Candidate not found with this id'})
        // res.json(candidate)
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
        let updated = await CandidateModel.findByIdAndUpdate(_id, updatedData, { new: true })
        updated ? res.status(201).send(updated) : res.status(400).send({ message: "Candidate not found with this id" })
    }
    catch (error) {
        res.status(400).send(error)
    }
})

router.delete('/:_id', async (req, res) => {
    try {
        let _id = req.params._id
        let deleted = await CandidateModel.findByIdAndDelete({ _id })
        deleted ? res.json(deleted) : res.status(400).send({message: 'Candidate not found with this id'})
        // res.send(deleted)
    }
    catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router