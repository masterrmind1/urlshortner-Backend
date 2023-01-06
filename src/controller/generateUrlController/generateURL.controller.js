const urlSchema = require('../../db/urlDatabase')
const shortId = require("shortid");
//let baseUrl = 'http://localhost:3000/'
let baseUrl = 'http://142.93.220.213:3000/'

const generateUrlController = (req, res) => {
    try {
        if (req.body) {
            urlSchema.findOne({ longUrl: req.body.longUrl, email: req.body.email.toLowerCase() }).then((getUrl) => {
                if (getUrl) {
                    return res.send("you already have shortened this URL to \n \n" + getUrl.shortUrl)
                } else {
                    urlCode = shortId.generate();
                    const shortUrl = baseUrl + urlCode
                    const urlData = new urlSchema({
                        email: req.body.email.toLowerCase(),
                        longUrl: req.body.longUrl,
                        shortUrl: baseUrl + urlCode
                    })
                    urlData.save()
                    return res.send(urlData)
                }
            })
        }
    } catch (er) {
        return res.status(500).send(er)
    }
}

module.exports = generateUrlController