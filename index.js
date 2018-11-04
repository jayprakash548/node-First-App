// This is needed to export our express Application
const express = require('express')
const fs = require('fs')
const mongoose = require ('mongoose'); // Include Mongoose

//Include Module Exports from Config File
const appConfig  = require('./config/appConfig')
const app = express(); // Just declare the instanc

// app.get('/', (req,res) => 
//     res.send('Hello Jay You have done Configuration!!!')
// )

// Bootstrap Route
let routesPath = './routes'
fs.readdirSync(routesPath).forEach(function(file){
    if(~file.indexOf('.js')){
        console.log('Including the following file');
        console.log(routesPath+ '/' + file);
        let route = require(routesPath+ '/'+file)
        route.setRouter(app);
    }
});
app.listen(appConfig.port,() => {
    console.log('App running at port number 3000')
    //create mongo db connection here
    let db = mongoose.connect(appConfig.db.uri, {useNewUrlParser:true});
});

// Handling Mongoose connection Error
mongoose.connection.on('error', function(err){
    console.log('Database connection error');
    console.log(err);
});// End of Mongoose connection Error

// Handle Mongoose success event
mongoose.connection.on('open', function(err){
    if(err){
        console.log('Database connection errorr');
        console.log(err);
    }else{
        console.log('Connection Establish Successfully');
    }
});// End mongoose connection open Handler