const userSchema = require('../../db/userDatabase')
const bcrypt = require('bcryptjs')
const signupController = async(req, res) => {
    try {
        if (req.body) {
            await userSchema.findOne({ email: req.body.email.toLowerCase() }).then((users) => {
                if (users == null) {
                    const userEmail = req.body.email.toLowerCase()
                    const userData = new userSchema({
                        email: req.body.email.toLowerCase(),
                        password: bcrypt.hashSync(req.body.password, 6),
                        firstName: req.body.firstName,
                        lastName: req.body.lastName
                    })
                    userData.save()
                    res.status(201).send({ result: 'Signup done', status: 201 })
                } else {
                    res.send({ result: 'This Email already have a accout', status: 406 })
                }
            })
        }
    } catch (er) {
        console.log(er.message, er.properties)
        res.status(500).send(er)
    }
}


module.exports = signupController