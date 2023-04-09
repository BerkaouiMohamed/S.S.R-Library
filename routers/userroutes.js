const router=require('express').Router()
const  userController=require('../controllers/usercontroller')
const body=require('express').urlencoded({extended:true})
const gardauth=require('./gard.auth')
router.get('/signup',gardauth.isnotauth,userController.authController)
router.post('/signup',body,userController.getuserdata)
router.get('/login',gardauth.isnotauth, userController.loginController)
router.post('/login',body,userController.loginuserController)
router.post('/logout',userController.logoutuserController)

module.exports=router