const LocalStrategy = require("passport-local").Strategy
const UserManager = require("../manager/UserManager")
const crypto = require("crypto")

module.exports = (passport) => {
    passport.use(new LocalStrategy(
        async (username,password,done) => {
            try {
                let encoded_password = crypto.createHash("md5").update(password).digest("hex")
                const user = await UserManager.getUser(username,encoded_password)
                if(!user){
                    return done(null,false, {message: "Can't find the account"})
                }
                return done(null,user.dataValues)
            }catch(err){
                return done(err)
            }
        }
    ))
    
    passport.serializeUser((user,done) => {
        done(null, user.id)
    })
    
    passport.deserializeUser(async (id,done) => {
        const user = await UserManager.getUserByID(id)
        done(null,user)
    })
}