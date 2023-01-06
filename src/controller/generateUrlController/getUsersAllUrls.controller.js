const urlSchema = require('../../db/urlDatabase')
const getUsersAllUrlsController = async(req, res) => {
    try {
        if (req.body) {
            const urlData = await urlSchema.find({ email: req.body.email.toLowerCase() })
            console.log(urlData)
            if (urlData) {
                res.send(urlData).status(200)
            }
        }
    } catch (e) {
        res.send(e)
    }
}
module.exports = getUsersAllUrlsController