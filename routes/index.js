const express = require('express')
const router = express.Router()
const {verifyAccessToken} = require('../middlewares/jwt_helper')

router.use('/auth',require('./auth'))
router.use('/election',require('./declare-vote'))
router.use('/position',require('./position'))



module.exports = router