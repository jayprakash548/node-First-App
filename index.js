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

// Bootstrap Model
let modelspath = './models'
fs.readdirSync(modelspath).forEach(function(file){
    if(~file.indexOf('.js')) require(modelspath + '/' + file);
});
//Bootstrap Model Ends Here

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

//Callback hell
setTimeout(function() {
    console.log('I promised to run after 1 sec')
    setTimeout(function() {
        console.log('I promised to run after 2sec')
        setTimeout(function(){
            console.log('I promise to run after 3sec')
        }, 1000)
    }, 1000)
}, 1000)
//Shortout Callback hell using promises

const wait = () => new Promise((resolve, reject) => {
    setTimeout(resolve, 1000)
})
wait().then(() => {
    console.log('Promissed to run after 1 second')
    return wait()
})
wait().then(() => {
    console.log('Promissed to run after 2 second')
    return wait()
})
.then(() => console.log('Promissed to run after 3 second'))