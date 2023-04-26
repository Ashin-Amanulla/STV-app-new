const express = require('express')
const Login = require('../models/login')
const router = express.Router()
const emailRegex = /^[^\s@]+@([^\s@]+\.)*gmail\.[^\s@]+$/;
const {sendMail} = require('../helpers/mail')
const generateOtp = require('../helpers/generateOTP')

router.post('/sendOtp', async (req, res) => {
    try {
        let email = req.body.email
        let isEmail = emailRegex.test(email)
        if (!isEmail) throw ('Invalid Email') //!error handle

        let otp = generateOtp()
        await sendMail(email, otp)   //send email
        let emailFound = await Login.findOne({ email })

        if (emailFound) {
            await Login.findByIdAndUpdate(emailFound._id, { otp }, { new: true })
        }
        else {
            const login = new Login({ email, otp })
            await login.save()
        }

        res.status(200).json({ message: 'Email send successfully', otp: otp })

    }
    catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

router.post('/loginWithOtp', async (req, res) => {
    try {
        let { email, otp } = req.body
        console.log(req.body)
        let isEmail = emailRegex.test(email)
        if (!isEmail) throw ('Invalid Email') //!error handle

        let data = await Login.findOne({ email })
        if (!data) throw ('Email not found in db') //!error handle

        if (otp === data.otp) {
            //login successfull
            res.status(201).send({ message: 'Login Successfull' });
            //setting token
        }
        else res.status(400).send({ message: 'Invalid Otp' });

    }
    catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router;