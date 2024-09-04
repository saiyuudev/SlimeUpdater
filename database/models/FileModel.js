const { Model, DataTypes } = require("sequelize");

const File = class File extends Model{
}

module.exports = {
    File : File,
    load : (db) => {
        File.init({
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            path: {
                type: DataTypes.STRING,
                allowNull: false
            },
            checksum : {
                type: DataTypes.STRING,
                allowNull: false
            }
        }, {sequelize:db, tableName: "files"})
    }
}