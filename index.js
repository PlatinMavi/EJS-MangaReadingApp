const express = require("express")
const app = express()
const path = require('path')
const config =  require("./config.json")
const models = require("./models")

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'static')))

const miscRoute = require("./routes/misc")
const mangaRoute = require("./routes/manga")
app.use("/",miscRoute)
app.use("/manga",mangaRoute)

app.listen(config.PORT,()=>{
    console.log(`${config.NAME} running on port ${config.PORT}`)
})