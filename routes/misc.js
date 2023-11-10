const router = require("express").Router()
const config =  require("../config.json")
const models = require("../models")

router.get("/",async (req,res)=>{

    const topfive = await models.Manga.findAll({
        limit:5,
        order:[["view","DESC"]]
    })

    const context = {
        "TOPFIVE":topfive,
        "CONFIG":config,
    }
    res.render("pages/index",context)
})

router.get("/admin", (req,res)=>{
    const context = {
        config
    }
    res.render("pages/admin",context)
})

module.exports = router