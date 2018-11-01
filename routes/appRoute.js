const express = require('express')
const appControl = require('./../Controller/appController');

//Created Hello Function
// let hello = (req,res) => res.send('Hello Jay!!')
// let printmydesignation = (req,res) => res.send('I am software Engineer')

let setRouter = (app) => {
     app.get('/hello',appControl.hello)
     app.get('/designation',appControl.printmydesignation)
} // End of setRouter

module.exports = {
    setRouter:setRouter
}