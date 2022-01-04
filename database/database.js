// IMPORTS
// imports mongoDB driver
const mongoose = require('mongoose')
// imports dotenv in order to acess config file information
require('dotenv').config()


// try to connect to web app
mongoose.connect(process.env.MONGO_URI)
        .catch((err) => console.log(err))



// https://mongoosejs.com/docs/