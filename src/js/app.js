const express = require('express')
const { MongoClient, ObjectId, Db } = require('mongodb')
const app = express()
const cors = require('cors')
const apps = require('./ecosystem.config')
require('../db/mongodb')
const User = require('../db/model')
const id = new ObjectId()
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')
const signupRoute = require('../router/signup');
const loginRoute = require('../router/login')
const logOutRoute = require('../router/logout')
const resetPasswordRoute = require('../router/reset-password')
const forgetPasswordRoute = require('../router/forget-password')
const generateUrlRoute = require('../router/generateURL')
const getUserDataRoute = require('../router/getUserData')
const getUsersAllUrls = require('../router/getAlluserUrls')
const auth = require('../middleware/auth')
app.use(express.json());
app.use(signupRoute)
app.use(loginRoute)
app.use(resetPasswordRoute)
app.use(forgetPasswordRoute)
app.use(generateUrlRoute)
app.use(logOutRoute)
app.use(getUserDataRoute)
app.use(getUsersAllUrls)
app.use(cookieParser())
const router = new express.Router()

console.log(apps)
console.log(apps.env)
    // if (process.argv[2] === 'dev') {
    //     var corsOptions = {
    //         origin: process.env.path_dev,
    //         optionsSuccessStatus: 200
    //     }
    // }

// if (process.argv[2] === 'prod') {
//     var corsOptions = {
//         origin: process.env.path_prod,
//         optionsSuccessStatus: 200
//     }
// }

var corsOptions = {
    origin: process.env.path_dev,
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions))
console.log(process.argv)
const createToken = async() => {
    const token = await jwt.sign({ _id: '6389b922bb9c59eaf7352744' }, "urlshortnerabcdefghijklmnopqrstuvwxyz")
}
createToken();
console.log(process.argv[2])


app.listen(3000)