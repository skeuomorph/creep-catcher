const express = require("express")
const app = express()
const path = require("path")

const dbRouter = require('./database/dbRouter.js')

app.use(express.urlencoded({extended:false}))

app.use("/db", dbRouter)

app.use(express.static(path.join(__dirname,'react-app/','build')))
app.use(express.static('react-app/public'))

app.listen(3000, ()=>{
    console.log("Server running")
})