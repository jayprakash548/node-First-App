// This is needed to export our express Application
const express = require('express');
const app = express(); // Just declare the instanc

app.get('/', (req,res) => 
    res.send('Hello Jay!!!')
)
app.listen(3000,() =>
    console.log('App running at port number 3000')
)