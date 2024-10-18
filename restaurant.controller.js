const mongoose = require('mongoose');

const Restaurant = require('../model/Restaurant');

//getAllRestaurants
 
const getAllRestaurants = async(req, res, next) => {
        let restaurantsList;
        try {
            restaurantsList = await Restaurant.find();
        } catch (e) {
            console.log(e);
            return res.status(500).json({ message: "Fetching restaurants failed" });
        }
   
        if (!restaurantsList || restaurantsList.length === 0) {
            return res.status(404).json({ message: "No restaurants found" });
        }
   
        return res.status(200).json({ restaurants: restaurantsList });
   
}
//addRestaurants
 
const addRestaurants =async (req,res,next)=>{
    const {restid,restaurant_name,imageURL,Area,Zipcode,state,city,contact_number,Description,date} =req.body;
    const currentDate=new Date();
   if(!restid){
    return res.status(400).json({message:"restaurantt id is required"})
   }
 
    let existingRestaurants;
    try{
        existingRestaurants=await Restaurant.findOne({restid});
    }
   
    catch(e){
        return console.log(e);
    }
    if(existingRestaurants){
        return res.status(400).json({message:"The Restaurant is already exists"})
    }
 
    const restaurant=new Restaurant({
        restid,restaurant_name,
        imageURL,Area,Zipcode,state,city,
         contact_number,Description,currentDate
    })
    try {
        restaurant.save()
        return res.status(201).json({ restaurant })
    }
    catch(e){console.log(e);}
 
    try{
       const session = await mongoose.startSession();
        session.startTransaction();
        await restaurant.save({ session });
        await session.commitTransaction();
        session.endSession();
   
        return res.status(201).json({ restaurant });
    }
    catch (err) {
        if (session) session.endSession();
        return res.status(500).json({ message: 'Error saving restaurant', error: err });
      }
    }
//updateRestaurant
 
    const updateRestaurant = async (req, res, next) => {
        const { restid, restaurant_name,  imageURL,Area,Zipcode,sate,city,
            contact_number,Description } = req.body;
        try {  
            const existingRestaurant = await Restaurants.findOne({ restid });  
            if (!existingRestaurant) {
                return res.status(404).json({ message: "Restaurant not found" });
            }
            const result = await Restaurants.updateOne(
                { restid },
                { $set: { restaurant_name,  imageURL,Area,Zipcode,sate,city,
                    contact_number,Description } }
            );
            if (result.nModified === 0) {
                return res.status(400).json({ message: "No changes made" });
            }
            return res.status(200).json({ message: "Restaurant updated successfully" });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: "Error updating restaurant", error: err });
        }
    };
 
//getRestaurantById
 
    const getRestaurantById = async (req, res, next) => {
    const { restid } = req.params;
 
    try {
        const restaurant = await Restaurants.findOne({ restid });
        if (!restaurant) {
            return res.status(404).json({ message: "Restaurant not found" });
        }
        return res.status(200).json({ restaurant });
    } catch (err) {
        return res.status(500).json({ message: "Error querying restaurant", error: err });
    }
    }
 
  //  getRestaurantByCity
 
    const getRestaurantByCity = async (req, res, next) => {
        const { city } = req.params;
   
        try {
            const restaurant = await Restaurants.findOne({ city });
            if (!restaurant) {
                return res.status(404).json({ message: "Restaurant not found" });
            }
            return res.status(200).json({ restaurant });
        } catch (err) {
            return res.status(500).json({ message: "Error querying restaurant", error: err });
        }
        }
 
//getRestaurantByZipCode
 
        const getRestaurantByZipCode = async (req, res, next) => {
            const { Zipcode  } = req.params;
       
            try {
                const restaurant = await Restaurants.findOne({ Zipcode  });
                if (!restaurant) {
                    return res.status(404).json({ message: "Restaurant not found" });
                }
                return res.status(200).json({ restaurant });
            } catch (err) {
                return res.status(500).json({ message: "Error querying restaurant", error: err });
            }
            }
 
 
 
//getRestaurantByName
            const getRestaurantByName = async (req, res, next) => {
                const { restaurant_name  } = req.params;
           
                try {
                    const restaurant = await Restaurants.findOne({ restaurant_name:{$regex:new RegExp(restaurant_name,'i')}  });
                    if (!restaurant) {
                        return res.status(404).json({ message: "Restaurant not found" });
                    }
                    return res.status(200).json({ restaurant });
                } catch (err) {
                    return res.status(500).json({ message: "Error querying restaurant", error: err });
                }
                }
 
 
 
 
                //getRestaurantByState
                const getRestaurantByState = async (req, res, next) => {
                    const { sate  } = req.params;
               
                    try {
                        const restaurant = await Restaurants.findOne({ sate:{$regex:new RegExp(sate,'i')}  });
                        if (!restaurant) {
                            return res.status(404).json({ message: "Restaurant not found" });
                        }
                        return res.status(200).json({ restaurant });
                    } catch (err) {
                        return res.status(500).json({ message: "Error querying restaurant", error: err });
                    }
                    }
 
 
//getRestaurantByArea
 
                    const getRestaurantByArea = async (req, res, next) => {
                        const { Area  } = req.params;
                   
                        try {
                            const restaurant = await Restaurants.findOne({ Area:{$regex:new RegExp(Area,'i')}  });
                            if (!restaurant) {
                                return res.status(404).json({ message: "Restaurant not found" });
                            }
                            return res.status(200).json({ restaurant });
                        } catch (err) {
                            return res.status(500).json({ message: "Error querying restaurant", error: err });
                        }
                        }
 
//deleteRestaurant
 
const deleteRestaurant = async (req, res, next) => {
    const { restid } = req.params;  
    try {
        let deletedRestaurant = await Restaurants.findOneAndDelete({ restid });
        if (!deletedRestaurant && mongoose.Types.ObjectId.isValid(restid)) {
            deletedRestaurant = await Restaurants.findByIdAndDelete(restid);
        }
        if (!deletedRestaurant) {
            return res.status(404).json({ message: "Restaurant not found" });
        }
        return res.status(200).json({ message: "Restaurant deleted successfully", restaurant: deletedRestaurant });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Error deleting restaurant", error: err });
    }
};
   
 
   
   
module.exports={getAllRestaurants,addRestaurants,getRestaurantById,deleteRestaurant,getRestaurantByCity,getRestaurantByZipCode,getRestaurantByName,getRestaurantByArea,getRestaurantByState,updateRestaurant}