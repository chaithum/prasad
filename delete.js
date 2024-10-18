const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
 
const app = express();
mongoose.connect('mongodb://localhost:27017/foodDelivery', { useNewUrlParser: true, useUnifiedTopology: true });
 
const foodItemSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    category: String,
    availability: String,
    price: Number,
    remove1: String,
    imageURL: String
});
 
const FoodItem = mongoose.model('FoodItem', foodItemSchema);
 
app.use(bodyParser.json());
 

app.delete('/api/food/:id', async (req, res) => {
    const { id } = req.params;
 
    try {
        const deletedItem = await FoodItem.findByIdAndDelete(id);
        if (!deletedItem) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.status(200).json({ message: 'Item deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});
 

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});