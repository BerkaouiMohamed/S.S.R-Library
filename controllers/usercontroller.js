const usermodel=require('../models/usermodel')

exports.authController =(req,res,next)=>{
    res.render('signup',{verifuser:req.session.userId,message:req.flash('err')[0]})
}

exports.getuserdata =(req,res,next)=>{
   usermodel.signupmodel(req.body.name,req.body.email,req.body.password).then((user)=>{
    console.log(user)
    res.redirect('/login')}).catch((err)=> { req.flash('err',err)
        res.redirect('/signup');
   })
}

exports.loginController=(req,res,next)=>{
    res.render('login',{verifuser:req.session.userId,message:req.flash('err')[0]})
}


exports.loginuserController = (req, res, next) => {
  usermodel.signinmodel(req.body.email,req.body.password).then((id)=>{
        
    return req.session.userId=id 
  
}).then((id)=>{  res.redirect('/') 
console.log(id)}).catch((err)=>{
    console.log(err)
req.flash('err',err)
console.log(req.flash('err',err),'hi from flash')
    res.redirect('/login')

})


}
exports.logoutuserController =(req,res,next)=>{
  return req.session.destroy(()=>{
      res.redirect('/login')
  })
}
