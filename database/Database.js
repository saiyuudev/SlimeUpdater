const { Sequelize } = require("sequelize")
const DatabaseConfig = require("../config/Database.json")
const Database = new Sequelize(DatabaseConfig.database, DatabaseConfig.username, DatabaseConfig.password, {
    host: DatabaseConfig.host,
    dialect: 'mariadb'
})
const UserModel = require("./models/UserModel")

module.exports = {
    getDatabase : Database,
    load : async () => {
        try {
            UserModel.load(Database)
            await Database.sync({force:true})
            console.log("[Success] Database Loaded")
        } catch (error) {
            console.log("[Error] Unable to connect to the database")
            return false
        }
    },
    UserModel : UserModel.User
}