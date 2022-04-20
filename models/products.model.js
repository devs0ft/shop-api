//step 5 import models
const {Schema, model} = require('mongoose')
const { stringify } = require('querystring')

// step 6 define the shape of the Schema

const productSchema = new Schema({
    name: {
        type:String,
        required: true,
    },
    description: {
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    },
    
   
},//add timestamps
{
    timestamps:true
}   

);
//export model
module.exports = model("Product", productSchema);