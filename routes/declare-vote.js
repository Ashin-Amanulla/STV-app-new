const router = require('express').Router()
const ElectionModel = require('../models/declare-vote')


router.post('/', async (req, res) => {
    try {

        let data = req.body
        const voting = new ElectionModel(data)
        let insert = await voting.save()
        res.status(201).send(insert);
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

router.get('/', async (req, res) => {
    try {

        let data = await ElectionModel.find({})
        res.status(201).json({ data: data })
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

router.put('/:_id', async (req, res) => {
    try {
        let _id = req.params._id
        let body = req.body
        let updatedData = { $set: body }
        await ElectionModel.findByIdAndUpdate(_id, updatedData, { new: true })
        res.json({ message: 'updated successfully!!', status: true }).status(200)
    }
    catch (error) {
        console.log(error)
        res.json({ message: error }).status(400)
    }
})

router.get('/:id/pos', async (req, res) => {
    try {
        let id = req.params.id;
        let data = await ElectionModel.find({ _id: id }, { "positions": 1 })
        res.status(200).json({ data: data })

    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

router.post('/:id/pos', async (req, res) => {
    try {
        let id = req.params.id;
        let body = req.body;
        let data = await ElectionModel.updateOne({ _id: id }, {
            $push: {
                "positions": body
            }
        })
        console.log(data)
        res.status(200).json({ data: data })

    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

router.delete('/:id/pos/:pos_id', async (req, res) => {
    try {
        let id = req.params.id;
        let data = await ElectionModel.updateOne({ _id: id }, {
            $pull: {
                "positions": {
                    "_id": req.params.pos_id
                }
            }
        })
        console.log(data)
        res.status(200).json({ data: data })

    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})


router.get('/:id/pos/:pos_id', async (req, res) => {
    try {
        let election_id = req.params.id;
        let position_id = req.params.pos_id
        let data = await ElectionModel.find({ _id: election_id }, {

            "positions": {
                "_id": position_id
            }

        },

        )
        console.log(data)
        res.status(200).json({ data: data })

    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

module.exports = router