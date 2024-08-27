const express = require('express')
const router = express.Router()

router.use((req,res,next) => {
    if(req.isAuthenticated()){
        return next()
    }else{
        return res.redirect("../")
    }
})

router.all("/", (req,res) => {
    res.render("panel", req.user.dataValues)
})

module.exports = router