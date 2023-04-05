const bookcontroller=require('../controllers/book')
const router=require('express').Router()


router.get('/',bookcontroller.booksController)
router.get('/books',bookcontroller.allbooksController)

module.exports=router  