const express = require('express')
const router = express.Router()

router.all("/", (req,res) => {
    res.render("login")
})

module.exports = router