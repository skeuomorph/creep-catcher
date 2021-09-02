//Mongoose used to connect Mongo to Express
const mongoose = require("mongoose")

//Schema variable created for Mongo
const Schema = mongoose.Schema

//Capitalised "Report" is template for a single entry in the "reports" schema
let Report = new Schema({
    uniqueID:{
        type: String
    },
    user:{
        type: String
    },
    description:{
        type: String
    },
    location: {
        type: String
    },
    date:{
        type: Date,
        default: Date.now
    },
    comments:[
        {
            user: String,
            date: Date,
            body: String
        }
    ]
})

//Export the 
module.exports = mongoose.model("report", Report)

//Then create a Schema for users!