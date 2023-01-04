const express = require('express')
const { MongoClient, ObjectId, Db } = require('mongodb')
const app = express()
const cors = require('cors')
app.use(cors())
require('../db/mongodb')
const User = require('../db/model')
const id = new ObjectId()
const jwt = require('jsonwebtoken')
const router = require('../router')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
app.use(bodyParser.json());
app.use(router);
app.use(cookieParser())


var corsOptions = {
    origin: process.env.path,
    optionsSuccessStatus: 200
}


// if (process.env.NODE_ENV === 'development') {
//     // ...
//   }

//   if (process.env.NODE_ENV === 'production') {
//     // ...
//   }

const createToken = async() => {
    const token = await jwt.sign({ _id: '6389b922bb9c59eaf7352744' }, "urlshortnerabcdefghijklmnopqrstuvwxyz")
}
createToken();
console.log(process.argv[2])


app.listen(3000)