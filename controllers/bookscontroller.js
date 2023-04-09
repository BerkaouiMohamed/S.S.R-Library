const bookmodel=require('../models/booksmodel')


exports.booksController = (req, res, next) => {
    bookmodel.getRandombooks()
    .then(books => { bookmodel.getNewbooks()
      .then(newbooks => { res.render('index', { books, newbooks,verifuser:req.session.userId });
      })
      .catch(err => {
        next(err);
      });  
    })
  };
  exports.allbooksController =(req,res ,next)=>{
    bookmodel.getAllbooks().then(books =>

        {verifuser:req.session.userId
          
          res.render('books',{allbooks:books,verifuser:req.session.userId })} 
        ).catch(err=>console.log(err))
  }





  
  exports.onebooksController =(req,res ,next)=>{
    let id=req.params.id

    bookmodel.getOnebook(id).then(onebook =>{
        {console.log(onebook) 
          res.render('book',{book:onebook,verifuser:req.session.userId})}
       } ).catch(err=>console.log(err))
  }
    
  exports.addbookpageController =(req,res ,next)=>{

        res.render('addbooks',{verifuser:req.session.userId})
       
  }

  exports.submitbookController=(req,res,next)=> {
    let title =req.body.title
    let author=req.body.author
    let discription=req.body.discription 
    let date=req.body.date
    bookmodel.addNewbook(title,author,date,discription).then(res.render('index'))
  }



