const bookmodel=require('../models/books')
exports.onebooksController =(req,res ,next)=>{
    let id=req.params.id

    bookmodel.getOnebook(id).then(books =>{
        {res.render('book',book=books)}
       } ).catch(err=>console.log(err))
  }
  
