const urlSchema = require('../../db/urlDatabase')
const getUsersAllUrlsController = async(req, res) => {
    try {
        if (req.body) {
            const urlData = await urlSchema.find({ email: req.body.email.toLowerCase() })
            if (urlData) {
                res.send(urlData).status(200)
            } else {
                res.send("you dont have shortened any url yet!").status(400)
            }
        }
    } catch (e) {
        res.send(e)
    }
}
module.exports = getUsersAllUrlsController