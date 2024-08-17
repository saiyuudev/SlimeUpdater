module.exports = {
    loadRoutes : (app) => {
        app.use("/", require("./login/LoginRouter"))
    }
}