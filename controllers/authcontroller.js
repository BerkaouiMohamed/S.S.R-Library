const usermodel=require('../models/user')

exports.authController =(req,res,next)=>{
    res.render('signup')
}

exports.getuserdata =(req,res,next)=>{
   usermodel.signinmodel(req.body.name,req.body.email,req.body.password).then((user)=>{
    console.log(user)}).then(()=>{res.render('/login')}).catch((err)=> {console.log(err)})
}
