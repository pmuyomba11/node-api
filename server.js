const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT
const colors = require('colors')
const morgan = require('morgan')


//middleware.....
app.use(morgan('dev')) //Developer loggers..




//Listeners...
app.listen(port, () => {
    console.log('====================================');
    console.log(`Server running on ${port}....`.inverse.bold.green);
    console.log('====================================');
})