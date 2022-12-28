const express = require('express')
const { MongoClient, ObjectId, Db } = require('mongodb')
const app = express()
const cors = require('cors')
app.use(cors())
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



const createToken = async() => {
    const token = await jwt.sign({ _id: '6389b922bb9c59eaf7352744' }, "urlshortnerabcdefghijklmnopqrstuvwxyz")
}
createToken();



app.listen(3000)