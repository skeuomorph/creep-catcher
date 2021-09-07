//Mongoose used to connect Mongo to Express
const mongoose = require("mongoose")

//Schema variable created for Mongo
const Schema = mongoose.Schema

//Capitalised "Report" is template for a single entry in the "reports" schema
let User = new Schema({
    user:{type: String, unique: true, required: true, dropDups: true},
    emailAddress:{type: String, unique: true, required: true, dropDups: true},
    password:String,
})

//Export the 
module.exports = mongoose.model("user", User)
