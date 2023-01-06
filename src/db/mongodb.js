const port = process.env.PORT || 3000
const mongodb = require('mongodb')
const mongoClient = mongodb.MongoClient
const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'UrlShortner'
require('dotenv').config()
    // const mongoose = require('mongoose')
    // mongoose.connect('mongodb://127.0.0.1:27017/UrlShortner', {

//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     })
//     .then((re) => console.log("mongodb connected"))
//     .catch((er) => console.log('some err occure', er))


mongoClient.connect(connectionUrl, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log("not able to connect")
    }
    console.log('mongodb connected')
    const db = client.db(databaseName)
})