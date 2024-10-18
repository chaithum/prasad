const mongoose = require('mongoose');
// const { deleteOrder } = require('../controller/food.controller');

const Schema = mongoose.Schema;

const foodSchema = new Schema({
    foodname: {
        type: String,
        required: true
    },

    category : {
        type: String,
        required: true,
        unique: true
    },

    description : {
        type: String,
        required: true,
        minlength: 10
    },

    availability: { 
        type: String,
         default: true 
    },

    price : {
        type: Number,
        required: true
    },

    remove1 : {
        type: String,
        required: true
    },

    imageURL: { 
        type: String, 
        required: true 
    },

    
})

module.exports = mongoose.model("Food", foodSchema)