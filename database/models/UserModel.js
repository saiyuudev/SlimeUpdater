const { Model, DataTypes } = require("sequelize");

const User = class User extends Model{
}

module.exports = {
    User : User,
    load : (db) => {
        User.init({
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            username: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            },
            superAdmin : {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false
            }
        }, {sequelize:db, tableName: "users"})
    }
}