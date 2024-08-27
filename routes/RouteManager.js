module.exports = {
    loadRoutes : (app) => {
        app.use("/", require("./login/LoginRouter"))
        app.use("/panel/", require("./panel/PanelRouter"))
    }
}