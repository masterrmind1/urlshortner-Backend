const userSchema = require('../../db/userDatabase')
const resetPasswordSchema = require('../../db/reset-passwordDb')
var nodemailer = require('nodemailer');
const shortId = require("shortid");
urlCode = shortId.generate();
let baseUrl = 'http://localhost:4200/#/'
    //let baseUrl = 'http://142.93.220.213:3000/'
let emailId;

//input Email
const forgetPasswordController = async(req, res) => {
    try {
        if (req.body) {
            const getUser = await userSchema.findOne({ email: req.body.email.toLowerCase() })
            emailId = req.body.email.toLowerCase()
            console.log('llll')
            if (getUser) {
                urlCode = shortId.generate();
                const urlData = new resetPasswordSchema({
                    email: req.body.email.toLowerCase(),
                    Url: baseUrl + urlCode,
                    urlId: urlCode
                })
                urlData.save()
                const link = baseUrl + 'reset/' + urlCode
                var transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: 'rajputp2007@gmail.com',
                        pass: 'zqnlphgnjmkuufuh'
                    }
                });
                var mailOptions = {
                    from: 'rajputp2007@gmail.com',
                    to: getUser.email,
                    subject: 'Reset Your Password',
                    text: 'Reset your password using link ' + link +
                        ' this Link will be expire after one hour.'
                };
                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        res.send({ result: error, status: 400 })
                    } else {
                        res.send({ result: "Please check email for a link to reset password", status: 201 })
                    }
                });

            } else {
                res.send({ result: 'You do not have account, please signup first', status: 403 })
            }
        } else {
            res.send({ result: 'Please enter Valid EmailId', status: 422 })
        }
    } catch (er) {
        console.log(er)
        res.status(500).send(er)
    }
}

module.exports = forgetPasswordController