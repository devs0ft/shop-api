//step 17 import all products
const { Router } = require('express')
const {createProduct,deleteProduct,getAllProducts,getSingleProduct,updateProduct} = require('../controllers/products.controller')

const productRouter =Router();

//step 18 divide routes into two
//first one goes with only slash
//and the one that goes with the product id

productRouter.route("/").get(getAllProducts).post(createProduct)
productRouter.route("/:productId").get(getAllProducts).patch(updateProduct).delete(deleteProduct)


module.exports = productRouter;