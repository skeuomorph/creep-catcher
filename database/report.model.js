//Mongoose used to connect Mongo to Express
const mongoose = require("mongoose")

//Schema variable created for Mongo
const Schema = mongoose.Schema

//Capitalised "Report" is template for a single entry in the "reports" schema
let Report = new Schema({
    report_date:{
        type: Date
    },
    report_description:{
        type: String
    },
    report_location: {
        type: String
    }
})

//Export the 
module.exports = mongoose.model("report", Report)

//Then create a Schema for users!