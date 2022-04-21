// import modules
const {Router} = require('express')
const {login,register} = require('../controllers/auth.controller')
//step 2
const authRouter = Router()
//step 3 when it is post run the rgister
authRouter.post('/register',register)
//when its post run the login
authRouter.post('/login' , login)
module.exports = authRouter




//go to the index.js now