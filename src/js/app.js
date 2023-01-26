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

const Redis = require('redis');
Redis.debug_mode = true;

// const client = Redis.createClient({
//     socket: {
//         host: '127.0.0.1',
//         port: 3000,
//     }
// });
// const getClient = async() => {


//     client.on('error', (err) => {
//         console.error(err);
//     });
//     client.on('connect', () => {
//         console.log('Redis connected');
//         client.set('abc', 'def')

//     });

//     client.on('reconnecting', () => {
//         console.log('Redis reconnecting');
//     });
//     client.on('ready', () => {
//         console.log('Redis ready!');
//     });
//     await client.connect();

//     return client;
// };
//getClient()



// module.exports = {
//     getClient,
// };




// const client = redis.createClient({
//     socket: {
//         host: '127.0.0.1',
//         port: '3000'
//     },
//     legacyMode: true

// });

// client.on('error', err => {
//     console.log('Errorrrrrrrrr' + err);
// });
// client.connect()

// client.set('foo', 'bar', (err, reply) => {
//     if (err) throw err;
//     console.log(reply);

//     client.get('foo', (err, reply) => {
//         if (err) throw err;
//         console.log(reply);
//     });
// });



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