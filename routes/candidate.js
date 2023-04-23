const router = require('express').Router()

const { Candidate, Position } = require('../models/declare-vote')

router.post('/:id', async (req, res) => {
    try {
        let id = req.params.id
        const candidate = new Candidate(req.body)
        let savedCandidate = await candidate.save();

        await Position.updateOne({ _id: id }, {
            $push: {
                "candidates": savedCandidate._id
            }
        })
        res.status(201).json({ message: 'success' });
    }
    catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})


router.delete('/:_id/pos/:cand_id', async (req, res) => {
    try {
        let {_id,cand_id} = req.params;        

        await Position.updateOne({ _id: _id }, {
            $pull: {  "candidates": cand_id    }
        })
        await Candidate.findByIdAndDelete(cand_id)
        res.status(200).json({ message: 'success' });
    }
    catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

router.get('/', async (req, res) => {
    try {
        let candidates = await Candidate.find({})
        res.status(200).json({data:candidates})
    }
    catch (error) {
        res.status(400).send(error)
    }
})

router.get('/:_id', async (req, res) => {
    try {
        let params = req.params
        let _id = params._id
        let candidate = await Candidate.findOne({ _id })
        candidate ? res.json(candidate) : res.status(400).send({ message: 'Candidate not found with this id' })
        // res.json(candidate)
    }
    catch (error) {
        res.status(400).send(error)
    }
})

router.get('/:_id/reject', async (req, res) => {
    try {
        let params = req.params
        let _id = params._id
        let candidate = await Candidate.findByIdAndUpdate(_id,{
            $set:{approve:'rejected'}
        })

        candidate ? res.json(candidate) : res.status(400).send({ message: 'Candidate not found with this id' })
    }
    catch (error) {
        res.status(400).send(error)
    }
})

router.get('/:_id/approve', async (req, res) => {
    try {
        let params = req.params
        let _id = params._id
        let candidate = await Candidate.findByIdAndUpdate(_id,{
            $set:{approve:'approved'}
        })
        candidate ? res.json(candidate) : res.status(400).send({ message: 'Candidate not found with this id' })

    }
    catch (error) {
        res.status(400).send(error)
    }
})


router.get('/:_id/active', async (req, res) => {
    try {
        let params = req.params
        let pos_id = params._id
        let candidate = await Candidate.find({"posRef":pos_id,"approve":"approved"})
        candidate ? res.json(candidate) : res.status(400).send({ message: 'Position not found with this id' })

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
        let updated = await Candidate.findByIdAndUpdate(_id, updatedData, { new: true })
        updated ? res.status(201).send(updated) : res.status(400).send({ message: "Candidate not found with this id" })
    }
    catch (error) {
        res.status(400).send(error)
    }
})

router.delete('/:_id/pos/:pos_id', async (req, res) => {
    try {
        let {_id,pos_id} = req.params
        let deleted = await Candidate.findByIdAndDelete({ _id })
        deleted ? res.json(deleted) : res.status(400).send({ message: 'Candidate not found with this id' })
        // res.send(deleted)
    }
    catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router