const mongoose = require('mongoose')

//step 1: create  function to connect to the database
const dbConnect = async () =>{
    try {
        
        // step 3 connecting to the database
        await mongoose.connect('mngodb://127.0.0.1:2701/shop');
        console.log("Database connected successfully");
    } catch (error) {
        //2...throw error for debugging
        console.log(error);
        //shutdown when there is no response
        process.exit(1)
    }
} 
//step 4
module.exports={
    dbConnect,
};