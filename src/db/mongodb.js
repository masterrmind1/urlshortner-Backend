// const mongoose = require('mongoose')
// mongoose.connect('mongodb://127.0.0.1:27017/UrlShortner', {

//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     })
//     .then((re) => console.log("mongodb connected"))
//     .catch((er) => console.log('some err occure', er))
const port = process.env.PORT || 3000

const mongodb = require('mongodb')
const mongoClient = mongodb.MongoClient
const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'UrlShortner'
require('dotenv').config()

// mongoClient.connect(connectionUrl, { useNewUrlParser: true }, (error, client) => {
mongoClient.connect(process.env.DATABASE_URL, { useNewUrlParser: true }, (error, client) => {

    if (error) {
        return console.log("unble to connect")
    }
    console.log('mongodb connected')
    const db = client.db(databaseName)
        // db.collection('Users').insertOne({
        //     name: 'Paurnima',
        //     Email: 'abcd@gmail.com',
        //     password: 'passwordd'
        // })
})