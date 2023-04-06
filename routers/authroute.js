const router=require('express').Router()
const  userController=require('../controllers/authcontroller')
const body=require('express').urlencoded({extended:true})
router.get('/signup',userController.authController)
router.post('/signup',body,userController.getuserdata)

module.exports=router