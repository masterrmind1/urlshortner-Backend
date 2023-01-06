const urlSchema = require('../../db/urlDatabase')
    //let baseUrl = 'http://localhost:3000/'
let baseUrl = 'http://142.93.220.213:3000/'

const redirectUrlController = async function(req, res) {
    console.log(req.params.code)
    await urlSchema.findOne({ shortUrl: baseUrl + req.params.code }).then((getUrl) => {
        console.log(getUrl)
        res.redirect(getUrl.longUrl);
    })
}

module.exports = redirectUrlController