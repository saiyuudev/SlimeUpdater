const express = require("express")
const App = express()
const cookieParser = require('cookie-parser')
const formidable = require('express-formidable');
const RouteManager = require("./routes/RouteManager")
const AppConfig = require("./config/App.json")
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
RouteManager.loadRoutes(App)

App.listen(AppConfig.port, () => {
    console.log("The webserver is running at http://localhost:"+AppConfig.port)
})

