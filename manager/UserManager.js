const Database = require("../database/Database")
const crypto = require("crypto")

module.exports = {
    getUserByID : async (id) => {
        return await Database.UserModel.findOne({
            where: {
                id: id
            }
        })
    },
    getUsers : async () => {
        return await Database.UserModel.findAll()
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
        const user = await Database.UserModel.findOne({
            where: {
                username: username,
                password: password
            }
        })
        return user
    }
}