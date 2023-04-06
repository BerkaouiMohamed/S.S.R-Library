const bookmodel=require('../models/books')


exports.booksController = (req, res, next) => {
    bookmodel.getRandombooks()
    .then(books => { bookmodel.getNewbooks()
      .then(newbooks => { res.render('index', { books, newbooks });
      })
      .catch(err => {
        next(err);
      });  
    })
  };
  exports.allbooksController =(req,res ,next)=>{
    bookmodel.getAllbooks().then(books =>
        {res.render('books',allbooks=books)}
        ).catch(err=>console.log(err))
  }
