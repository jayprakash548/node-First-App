// This is needed to export our express Application
const express = require('express')
const fs = require('fs')

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
})
app.listen(appConfig.port,() =>
    console.log('App running at port number 3000')
)