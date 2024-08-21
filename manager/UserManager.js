const Database = require("../database/Database")
const crypto = require("crypto")

module.exports = {
    getUser : async (id) => {
        return await Database.UserModel.findByPk(id)
    },
    getUsers : async () => {
        return await Database.UserModel.findAll()
    },
    createUser: async (username, password) => {
        let encoded_password = crypto.createHash("md5").update(password).digest("hex")
        await Database.UserModel.create({
            username: username,
            password: encoded_password
        })
    },
    createUser: async (username, password, superAdmin) => {
        let encoded_password = crypto.createHash("md5").update(password).digest("hex")
        await Database.UserModel.create({
            username: username,
            password: encoded_password,
            superAdmin: superAdmin
        })
    },
    removeUser : async (id) => {
        await Database.UserModel.destroy({
            where: {
                id: IDBTransaction
            }
        })
    },
    getUser : async (username, password) => {
        await Database.UserModel.findOne({
            where: {
                username: username,
                password: password
            }
        })
    }
}