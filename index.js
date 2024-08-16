const express = require("express")
const App = express()
const cookieParser = require('cookie-parser')
const formidable = require('express-formidable');

console.log("Loading website...")

App.set("views", "./templates")
App.set("view engine", "ejs")
App.use(express.static('public'));
App.use(cookieParser())
App.use(formidable({
    encoding: 'utf-8',
    multiples: true,
    keepExtensions: true
}));

