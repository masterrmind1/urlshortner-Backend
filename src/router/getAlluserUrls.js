const express = require('express')
const router = new express.Router()
const model = require('../db/model')
const auth = require('../middleware/auth')

router.post('/home/allUrls', auth, async(req, res) => {
    try {
        const urlData = await model.urlSchema.find({ email: req.body.email.toLowerCase() })
        console.log(urlData)
        if (urlData) {
            res.send(urlData).status(200)
        }
    } catch (e) {
        res.send(e)
    }
})

module.exports = router