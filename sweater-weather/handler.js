const awsServerless = require('aws-serverless-express')
const app = require('./src/server')

const server = awsServerless.createServer(app);

exports.handler = (event, context) =>{
   return awsServerless.proxy(server, event, context)
}