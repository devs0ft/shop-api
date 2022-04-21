//step 1 import user model

const user = require('../models/user.model');
const bcrypt = require('bcrypt')
//step 4
const {loginSchema} = require('../utils/validation')
const { registerSchema } = require('../utils/validation');
//step 2 create two handlers
const register = async (req,res) => {
    const {value,error} = registerSchema(req.body)
    if(error){
        return res.status(400).json(error.message)
    }
    //to see the result and know whats happening;
    let user = await user.findOne({email:value.email})
    if(user){
        return res.status(409).json({msg:'Email already in use.'})
    }
    //hashing user paaswords
    const hashedPassword = await bcrypt.hash(value.password, 10)
    console.log(hashedPassword);
    
    user = await user.create({username: value.username, email:value.email,password:hashedPassword})

    res.status(201).json(user);
//validate  user input
};
const login = async (req,res) =>{
    const {value,error} = loginSchema.validate(req.body);
    if(error){
        return res.status(400).json(error)
    }
    //check if user is in the database
    let user = await user.findOne({email:value.email})
     //if user is found
    if(!user){
        return res.status(400).json({msg:"Invalid Credentials"})
    }
    //comparing passwords with stored users password in the database
    const ismatch = await  bcrypt.compare(value.password,user.password);

    //if passwords  do not match
    if(!ismatch){
        return res.status(400).json({msg:"Invalid Credentials"})
    }
    res.status(200).json(user);
}

module.exports={
    register,
    login,
};

//form here go to route auth.router.js