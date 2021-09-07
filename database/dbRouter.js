//Open Connection to Database;
const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/creep-catcher-db", {
                    useNewUrlParser: true ,
                    useUnifiedTopology: true,
                    useCreateIndex:true
                })
const connection = mongoose.connection
connection.once("open",()=> {console.log("MongoDB connection established.")})

//Bring in Database Schema's
const Report = require("./report.model")
const User = require('./user.model');


const dbRouter = require('express').Router();

//Get All Reports
dbRouter.route("/reports").get((req, res)=>{
    Report.find(function(err, reports) {
        if (err) {
            console.log(err);
        } else {
            res.json(reports);
        }
    });
});

//Get All Users
dbRouter.route("/users").get((req, res)=>{
    User.find(function(err, users) {
        if (err) {
            console.log(err);
        } else {
            res.json(users);
        }
    });
});


//Create New User
dbRouter.route('/newUser').post((req,res)=>{
    let user = new User(req.body);
    user.save()
        .then(user =>{
            res.status(200).json({
                user: 'user added successfully'
            });
        })
        .catch(error =>{
            res.status(400).send('Adding new user failed');
        })
})

//Create New Report
dbRouter.route('/newReport').post((req,res)=>{
    let report = new Report(req.body);
    console.log(req.body)
    report.save()
        .then(report =>{
            res.status(200).json({
                report: 'report added successfully'
            })
        })
        .catch(error =>{
            res.status(400).send('Adding new report failed');
        })
})

module.exports = dbRouter
