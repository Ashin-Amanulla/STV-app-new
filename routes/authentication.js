const express = require('express')
const Login = require('../models/login')
const router = express.Router()
const emailRegex = /^[^\s@]+@([^\s@]+\.)*college\.[^\s@]+$/;
const sendMail = require('../helpers/mail')
const generateOtp = require('../helpers/generateOTP')

router.post('/sendOtp', async (req, res) => {
    try {
        let email = req.body.email
        let isEmail = emailRegex.test(email)
        isEmail = true //--------------------Should Change Later
        if (isEmail) {
            let otp = generateOtp()
            // await sendMail(email, otp)   //send email
            let emailFound = await Login.findOne({email})

            if (emailFound) {
                await Login.findByIdAndUpdate(emailFound._id, {otp}, { new: true })
            }
            else {
                const login = new Login({email, otp})
                await login.save()
            }

            res.status(200).send({message: 'Email send successfully'})
        }   
        else res.status(400).send({message: 'Invalid Email'})
    }
    catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

router.post('/login', async (req, res) => {
    try {
        let {email, otp} = req.body
        let isEmail = emailRegex.test(email)
        isEmail = true //------------------------SHOULD CHANGE LATER

        if (isEmail) {
            let data = await Login.findOne({email})
            if (data) {
                if (otp === data.otp) {
                    //login successfull
                    res.status(201).send({ message: 'Login Successfull'});
                    //setting token
                } 
                else res.status(400).send({ message: 'Invalid Otp'});
            }
            else res.status(400).send({ message: 'Email not found in db'});

        }
        else res.status(400).send({ message: 'Invalid Email'});
    }
    catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router