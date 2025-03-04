const mongoose=require('mongoose')
require('dotenv').config()

const URI = `mongodb+srv://${process.env.USERDB}:${process.env.PASSBB}@clusteradsi.nzwbkjo.mongodb.net/${process.env.DB}`

mongoose.connect(URI)

module.exports = mongoose;