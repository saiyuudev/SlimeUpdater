const express = require("express")
const App = express()
const cookieParser = require('cookie-parser')
const formidable = require('express-formidable');
const RouteManager = require("./routes/RouteManager")
const AppConfig = require("./config/App.json")
const Database = require("./database/Database")
const session = require('express-session')
const morgan = require("morgan")

Database.load()

console.log("Loading website...")

App.set("views", "./views")
App.set("view engine", "ejs")
App.use(express.static('public'));
App.use(cookieParser())
App.use(formidable({
    encoding: 'utf-8',
    multiples: true,
    keepExtensions: true
}));
App.use(session({secret: AppConfig.sessionSecret, saveUninitialized: true, resave: true}))
App.use(morgan('dev'))

RouteManager.loadRoutes(App)

App.listen(AppConfig.port, () => {
    console.log("The webserver is running at http://localhost:"+AppConfig.port)
})

