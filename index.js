const express = require("express")
const app = express()
const path = require("path")
const mongoose = require("mongoose")
const Report = require("./database/report.model")

app.use(express.static(path.join(__dirname, "react-app/build")))

mongoose.connect("mongodb://localhost:27017/creep-catcher-db", { useNewUrlParser: true })
const connection = mongoose.connection
connection.once("open",()=> {console.log("MongoDB connection established.")})

const reportsRoutes = express.Router()
app.use("/reports", reportsRoutes)

reportsRoutes.route("/").get((req, res)=>{
    Report.find(function(err, reports) {
        if (err) {
            console.log(err);
        } else {
            res.json(reports);
        }
    });
});

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname,"react-app/build", "index.html"))
})

app.listen(3000, ()=>{
    console.log("Server running")
})