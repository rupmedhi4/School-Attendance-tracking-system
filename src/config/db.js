const mongoose = require('mongoose')
require('dotenv').config();

const URL = process.env.MONGO_URL

const connectedDb = async ()=>{
   await mongoose.connect(URL)
}

module.exports = connectedDb