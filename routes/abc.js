const express = require('express')

//Created Hello Function
let hello = (req,res) => res.send('Hi Jay!!')
let printmydesignation = (req,res) => res.send('I am Engineer')

let setRouter = (app) => {
     app.get('/hi',hello)
     app.get('/designation',printmydesignation)
} // End of setRouter

module.exports = {
    setRouter:setRouter
}