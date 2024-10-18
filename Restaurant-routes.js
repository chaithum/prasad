const express=require('express')
const RestaurantRouter=express.Router();
 
const {getAllRestaurants,addRestaurants,updateRestaurant,getRestaurantById,
    deleteRestaurant,getRestaurantByCity,getRestaurantByZipCode,
    getRestaurantByState,getRestaurantByArea,getRestaurantByName} =require('../controller/restaurant.controller');
 
RestaurantRouter.get("/fetch",getAllRestaurants)
RestaurantRouter.post("/add",addRestaurants);
RestaurantRouter.put("/update/:restid",updateRestaurant);
RestaurantRouter.get("/fetch/:restid",getRestaurantById);
RestaurantRouter.delete("/delete/:restid",deleteRestaurant);
RestaurantRouter.get("/fetchcity/:city",getRestaurantByCity);
RestaurantRouter.get("/fetch/Zipcode/:Zipcode",getRestaurantByZipCode);
RestaurantRouter.get("/fetch/name/:restaurant_name",getRestaurantByName);
RestaurantRouter.get("/fetch/sate/:sate",getRestaurantByState);
RestaurantRouter.get("/fetch/Area/:Area",getRestaurantByArea);
 
module.exports=RestaurantRouter