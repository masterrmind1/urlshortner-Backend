const express = require('express')
const router = new express.Router()
const User = require('../db/model')
var nodemailer = require('nodemailer');
const bcrypt = require('bcryptjs')

router.get('/forget-password/', async(req, res) => {
    res.send('forget-password')
})

//input should be "email"
router.post('/forget-password', async(req, res) => {
    try {
        const getUser = await User.userSchema.findOne({ email: req.body.email.toLowerCase() })
        if (getUser) {
            const link = 'http://localhost:4200/reset-password/' + getUser._id
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'rajputp2007@gmail.com',
                    pass: 'zqnlphgnjmkuufuh'
                }
            });
            var mailOptions = {
                from: 'rajputp2007@gmail.com',
                to: getUser.email,
                subject: 'Reset Your Password',
                text: 'Reset your password using link ' + link
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    res.send(error)
                } else {
                    res.send({ result: "Please check email for a link to reset password", status: 200 })
                }
            });
        } else {
            res.send({ result: 'You do not have account, please signup first', status: 403 })
        }
    } catch (er) {
        console.log(er)
        res.status(500).send(er)
    }
})

module.exports = router