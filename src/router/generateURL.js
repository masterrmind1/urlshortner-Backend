const express = require('express')
const router = new express.Router()
const model = require('../db/model')
const shortId = require("shortid");
let baseUrl = 'http://localhost:3000/'
let urlId = '6370af1434dc5ce79fce77d7'
const auth = require('../middleware/auth')


router.get('/home/generte_URL', auth, async(req, res) => {
    res.send("urlData")
})

//input should be longUrl and email
router.post('/home/generate_URL', auth, (req, res) => {
    const enteredURL = req.body.longUrl
    try {
        model.urlSchema.findOne({ longUrl: req.body.longUrl, email: req.body.email.toLowerCase() }).then((getUrl) => {
            if (getUrl) {
                return res.send("you already have shortened this URL to " + getUrl.shortUrl)
            } else {
                urlCode = shortId.generate();
                const shortUrl = baseUrl + urlCode
                const urlData = new model.urlSchema({
                    email: req.body.email.toLowerCase(),
                    longUrl: req.body.longUrl,
                    shortUrl: baseUrl + urlCode
                })
                urlData.save()
                return res.send(urlData)
            }
        })
    } catch (er) {
        return res.status(500).send(er)
    }
})
router.get('/:code', async function(req, res) {
    console.log(req.params.code)
    await model.urlSchema.findOne({ shortUrl: baseUrl + req.params.code }).then((getUrl) => {
        console.log(getUrl)
        res.redirect(getUrl.longUrl);
    })
});

module.exports = router