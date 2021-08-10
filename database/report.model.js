const mongoose = require("mongoose")
const Schema = mongoose.Schema

//Capitalised "Report" is template for a single entry in the "reports" collection
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

module.exports = mongoose.model("report", Report)