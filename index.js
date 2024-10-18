const express = require('express')
const foodRouter = require('./routes/food-routes')
require('./config/db')
const cors = require('cors')
 
const app = express()
app.use(cors())
app.set('view engine', 'ejs')
app.use(express.json())
app.use("/api/Restaurant", foodRouter)
 
app.use("/api", (req, res, next) => {
    res.send(" ")
})
 
app.listen(5000, () => console.log("app started at 5000..."));