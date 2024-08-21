const Database = require("../database/Database")
Database.load()

const UserManager = require("../manager/UserManager")

console.log("Welcome to the tool to create a superadmin user")
console.log("If you got any error on the console, it could be caused by your database, you should check the config files")

const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your username ? ", username => {
    rl.question("Enter a password: ", async (password) => {
        UserManager.createUser(username, password, true)
        rl.close()
    })
})