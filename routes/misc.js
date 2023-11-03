const router = require("express").Router()
const config =  require("../config.json")
const models = require("../models")

router.get("/",(req,res)=>{
    const context = {
        "NAME": config.NAME
    }
    res.render("pages/index",context)
})

router.get("/admin", (req,res)=>{
    const context = {

    }
    res.render("pages/admin",context)
})

module.exports = router