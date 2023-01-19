 const express = require('express')
 const app = express()
 const swaggerdocs = require('swagger-jsdoc')
 const swaggerUi = require('swagger-ui-express')
 const port = process.env.PORT || 3000

 let options = {
     definition: {
         openapi: '3.0.0',
         info: {
             description: 'This is a sample server',
             title: 'REST API Docs',
             version: '1.0.0',
         },
         servers: [{
             api: `http://localhost:${port}/`
         }],
         components: {
             securitySchemas: {
                 bearerAuth: {
                     type: 'http',
                     scheme: 'bearer',
                     barerFormat: 'jwt'
                 }
             }
         },
         security: [{
             bearerAuth: []
         }]
     },
     apis: ['../router/*/*.js', '../db/*.js', '../js/app.js']
 }

 const swaggerSpec = swaggerdocs(options)
 app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec), (req, res) => {
     console.log('swag')
 })

 function swaggerDocs(app, port) {
     app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

     app.get('docs.json', (req, res) => {
         res.setHeader('content-Type', 'application/json');
         res.send(swaggerSpec)
         console.log(`Docs Available at http://localhost:${port}/docs`)
     })
 }

 module.exports = swaggerDocs;