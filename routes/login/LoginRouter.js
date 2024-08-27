const express = require('express')
const router = express.Router()
const passport = require("passport")

router.all("/", (req,res) => {
    if(req.isAuthenticated()){
        return res.redirect("panel")
    }
    res.render("login")
})

router.get("/login", passport.authenticate('local', {
    successRedirect: "/panel",
    failureRedirect: "/"
}))

router.all("/logout", (req,res) => {
    if(req.isAuthenticated()){
        req.logout((err) =>{
            if (err){
                return res.redirect("/")
            }
        })
    }
    return res.redirect("/")
})
module.exports = router