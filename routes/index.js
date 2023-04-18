const express = require('express')
const router = express.Router()
const {verifyAccessToken} = require('../middlewares/jwt_helper')

router.use('/auth',require('./auth'))


module.exports = router