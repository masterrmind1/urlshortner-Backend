const urlSchema = require('../../db/urlDatabase')
const shortId = require("shortid");
let baseUrl = 'http://localhost:3000/'
    //let baseUrl = 'http://142.93.220.213:3000/'
let shortUrl;
const generateUrlController = async(req, res) => {
    try {
        if (req.body) {
            const urls = await urlSchema.find({ email: req.body.email.toLowerCase() })
            if (urls.length > 10) {
                res.send({ result: "You have already shortened 10 URL's", status: 401 })
            } else {
                await urlSchema.findOne({ longUrl: req.body.longUrl, email: req.body.email.toLowerCase() }).then((getUrl) => {
                    if (getUrl) {
                        return res.send({ result: "you already have shortened this URL to \n \n " + getUrl.shortUrl, status: 204 })
                    } else {
                        urlCode = shortId.generate();
                        const urlData = new urlSchema({
                            email: req.body.email.toLowerCase(),
                            longUrl: req.body.longUrl,
                            shortUrl: baseUrl + 'p/' + urlCode
                        })
                        urlData.save()
                        return res.send({ result: baseUrl + 'p/' + urlCode, status: 200 })
                    }
                })
            }

        }
    } catch (er) {
        console.log('errr')
        return res.status(500).send(er)
    }
}

module.exports = generateUrlController