const urlSchema = require('../../db/urlDatabase')
let baseUrl = 'http://142.93.220.213:3000/'
    //let baseUrl = 'http://localhost:3000/'

const redirectUrlController = async function(req, res) {
    if (req.params.code) {
        console.log(baseUrl + 'p/' + req.params.code)
        await urlSchema.findOne({ shortUrl: baseUrl + 'p/' + req.params.code }).then((getUrl) => {
            if (getUrl) {
                res.redirect(getUrl.longUrl);
            } else {
                res.send({ result: "short url is not valid", status: 400 })
            }
        })
    }
}

module.exports = redirectUrlController