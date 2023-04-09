const bookmodel=require('../models/booksmodel')


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


exports.submitbookController = (req, res, next) => {
  let title = req.body.title;
  let author = req.body.author;
  let description = req.body.description;
  let date = req.body.date;
  let img = req.body.img;
 bookmodel.addNewBook(title, author, description, date, img,req.session.userId)
    .then((book) => {
      console.log(book);
      res.redirect('/');
    }) .catch((err) => {
      req.flash('err', err);
      next(err);
    });
};



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
    bookmodel.getAllbooks().then(books =>{
   res.render('books',{allbooks:books,verifuser:req.session.userId })} 
        ).catch(err=>console.log(err))
  }

exports.mybookspageController=(req,res,next)=>{
  bookmodel.getAllbooks().then((books)=>{
    res.render('mybooks',{allbooks:books,verifuser:req.session.userId})
  })
}



  

  