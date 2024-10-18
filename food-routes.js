const express = require('express')
const foodRouter = express.Router();

const { getAllfood,  addItem, updateAllItem,  deleteItem } = require('../controller/food.controller');

foodRouter.get("/", getAllfood)
 foodRouter.post("/add", addItem)
 foodRouter.put("/update/:id",updateAllItem )
// foodRouter.get("/:id", getById)
// foodRouter.get("/:id", getById)
 foodRouter.delete("/:id", deleteItem)
// foodRouter.get("/user/:id", getByUserId)
module.exports = foodRouter



