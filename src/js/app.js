const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
require('../db/mongodb')
const jwt = require('jsonwebtoken')
const router = require('../router')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const port = process.env.PORT || 3000

app.use(bodyParser.json());
app.use(router);
app.use(cookieParser())

const redis = require('redis');
const client = redis.createClient();


client.on('connect', function() {
    console.log('Connect to redis');
});

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
const expressSwagger = require('express-swagger-generator')(app);

let options = {
    swaggerDefinition: {
        info: {
            description: 'This is a sample server',
            title: 'Swagger',
            version: '1.0.0',
        },
        host: 'localhost:3000',
        produces: [
            "application/json",
            "application/xml"
        ],
        schemes: ['http', 'https'],
        securityDefinitions: {
            JWT: {
                type: 'apiKey',
                in: 'header',
                name: 'Authorization',
                description: "",
            }
        }
    },
    basedir: __dirname, //app absolute path
    files: ['../router/**/*.js', '../api-documentation/**/*.js'] //Path to the API handle folder
};
expressSwagger(options)


app.listen(port, async() => {
    console.log(`app is running on port ${port}`);
})