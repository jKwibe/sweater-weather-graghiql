const express = require('express')
const cors = require('cors')

const app = express();

app.use(cors())
const {
    routes: userRoutes
} = require('./user/routes')


app.use('/user', userRoutes)
module.exports = app;