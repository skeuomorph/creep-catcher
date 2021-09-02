const express = require("express")
const app = express()
const path = require("path")

const dbRouter = require('./database/dbRouter.js')

app.use("/db", dbRouter)

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname,"react-app/build", "index.html"))
})

app.listen(3000, ()=>{
    console.log("Server running")
})