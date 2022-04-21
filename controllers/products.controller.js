//step 7 import products
const Product = require('../models/products.model')

//step 8 doing CRUD in the database

//Creating product using the crud method
const createProduct = async (req,res) =>{
   try {
         // write to the database,.create is part of the mongoose method
       const product =await Product.create(req.body);
       //always return status or response in json format
       res.status(201).json
   } catch (error) {
       //when something happens,return error
       res.status(400).json({error:error.message})
   }
}

// step 9 Reading our information
//getting all products

const getAllProducts = async (req,res) =>{
    try {
        //step 10 get our products
        const products =await Product.find({})
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// step 11 Getting single product
const getSingleProduct = async (req,res)=>{
    try {
        // step 12 first get product id to query for the product.
        const productId = req.params.productId;
        // step 13 now get product from database
        const product = await Product.findById(productId)
        if(!product) {
            return res.status(404).json({msg: "Product not found"});
        }
        res.status(200).json(product)
        
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

// step 14 update in crud
const updateProduct = async (req,res)=>{
    try {
        //step 15 get the id of the product that you want to update
        const productId = req.params.productId;
        let product =await Product.findById(productId);
        // step 16 if there is no product return to msg to the user:
        if(!product){
            return res.status(404).json({msg:"Product not found"})
        }
        product = await Product.findByIdAndUpdate(productId, req.body,{
            new: true,
        })
        
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

// step 17Final crud delete

const deleteProduct =async(req,res) =>{
    try {
        //step 18
        const productId = req.params.productId;
        const product = await Product.findById(productId)
        if(!product){
            return res.status(404).json({msg:"Product not found"})
        }
        await Product.findByIdAndDelete(productId)
        res.status(200).json({msg:"Product deleted"})
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports={
    createProduct,
    getAllProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct,
};