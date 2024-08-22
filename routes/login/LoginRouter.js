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

module.exports = router