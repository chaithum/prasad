const express = require('express')
// const AdminRouter=require('./routes/Admin-router')
const RestaurantRouter=require('./routes/Restaurant-routes')
require('./config/db')
const cors = require('cors')
const app = express()
app.use(cors())
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
// app.use("/api/admin", AdminRouter)
app.use("/api/restaurant",RestaurantRouter)
 
app.use("/api", (req, res, next) => {
    res.send("hello")
})
 
app.listen(5000, () => console.log("app started at 5000..."));