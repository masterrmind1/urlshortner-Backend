const userSchema = require('../../db/userDatabase')
const bcrypt = require('bcryptjs')

const loginController = async(req, res) => {
    try {
        if (req.body) {
            const userData = await userSchema.findOne({ email: req.body.email.toLowerCase() })
            if (userData) {
                const userPassword = userData.password
                const isMatch = await bcrypt.compare(req.body.password, userPassword)
                const token = await userData.generateAuthToken()
                    // console.log('token', token)
                    // res.cookie("jwt", token, {
                    //     expires: new Date(Date.now() + 6000000),
                    //     httpOnly: true,
                    //     secure: true
                    // });
                if (isMatch) {
                    res.send({ result: 'login successfully', status: 200 }).status(200)
                } else {
                    res.send({ result: "Password is incorrect", status: 400 }).status(400)
                }
            } else {
                res.send({ result: 'This Email is not registered! Please signup first', status: 400 })
            }
        }
    } catch (er) {
        res.status(500).send(er)
    }
}

module.exports = loginController