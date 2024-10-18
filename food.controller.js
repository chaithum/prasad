const foods = require('../model/food')
const bcrypt = require('bcryptjs')
 
const getAllfood = async(req, res, next) => {
    let food;
 
    try {
        food = await foods.find()
    }
    catch(err){
        console.log(err)
    }
    if(!food){
        return res.status(404).json({ message : "food are not found"})
    }
 
    return res.status(200).json({food});


}

const addItem = async(req, res, next) => {
    const {foodname,category,description,availability,price,remove1, imageURL} = req.body;
 
    let existingitem;
 
    try {
 
        existingitem = await foods.findOne({foodname})
    } catch(err){
        console.log(err);
    }
    if(existingitem){
        return res.status(400).json({message : "item is already exists!"})
    }
 
   
    const item = new foods({
        foodname,category,description,availability,price,remove1,imageURL
       
       
   
    });
 
    try {
 
        item.save()
        return res.status(201).json({ item })
    }
    catch(e){console.log(e);}
}
 
 
const updateAllItem = async (req, res, next) => {
    const foodId = req.params.id;
      const { foodname,price, description } = req.body;
     
      try {
   
        const food = await foods.findByIdAndUpdate(foodId, {
          foodname,
          price,
          description,
        }, { new: true });
     
       
        if (!food) {
          return res.status(404).json({ message: "Item not found" });
        }
     
       
        return res.status(200).json({ food });
     
      } catch (e) {
       
        console.log(e);
        return res.status(500).json({ message: "Unable to update" });
      }
    };

    
    const deleteItem = async (req, res, next) => {
        const foodId = req.params.id;
         
          try {
           
            const food = await foods.findByIdAndDelete(foodId);
       
            if (!food) {
              return res.status(404).json({ message: "Item not found" });
            }
         
            return res.status(200).json({ message: "Item deleted successfully" });
         
          } catch (e) {
       
            console.log(e);
            return res.status(500).json({ message: "Unable to delete item" });
          }
        };
        // const updateAllItems = async (req, res, next) => {
        //     const { price, description } = req.body;
           
        //     try {
             
        //       const result = await Food.updateMany({}, {
        //         price,
        //         description
        //       });
           
        //       if (result.matchedCount === 0) {
        //         return res.status(404).json({ message: "No items found to update" });
        //       }
           
             
        //       return res.status(200).json({ message: "Items updated successfully"});
           
        //     } catch (e) {
             
        //       console.log(e);
        //       return res.status(500).json({ message: "Unable to update items" });
        //     }
        //   }
 
 
 
module.exports = { getAllfood,addItem,updateAllItem,deleteItem};

   
