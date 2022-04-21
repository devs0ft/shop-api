//1 .import exxpress
const express =require('express')
//4.
const {dbConnect} = require("./config/dbConnect")
const authRouter = require('./routes/auth.router')
const productRouter = require('./routes/products.router')
//2. instantiate express
const app = express()
app.use(express.json)
//7..add middleware
app.use('/auth',authRouter)
app.use("/products",productRouter)


//5.
const start =async () =>{
    await dbConnect();
}
//3. listen
app.listen(4000,()=>{
    console.log("server up and running");
})