const express = require('express');

let hello = (req,res) => res.send('Hello Jay!!')
let printmydesignation = (req,res) => res.send('I am software Engineer')

module.exports = {
    hello : hello,
    printmydesignation: printmydesignation
}