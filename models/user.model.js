const {Schema, model} = require('mongoose')
const { stringify } = require('nodemon/lib/utils')
 //define schema
 const userSchema = new Schema({
     username:{
         type:String,
         required:true,
         unique:true,
     },

     email:{
         type:String,
         required:true,
         unique:true,
         length:8,
     },
     password:{
         type:String,
         required:true,
         length:8,
     },
        
 } ,
 {
    timestamps:true, 
 }
          
 )
 module.exports = model("User",userSchema)
