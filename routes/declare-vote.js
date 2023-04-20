const router = require('express').Router()
const { ElectionModel } = require('../models/declare-vote')


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


module.exports = router