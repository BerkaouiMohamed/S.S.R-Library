const bookcontroller=require('../controllers/bookscontroller')
const router=require('express').Router()
const body=require('express').urlencoded({extended:true})
const gardauth=require('./gard.auth')



router.get('/',bookcontroller.booksController)
router.get('/books',gardauth.isauth,bookcontroller.allbooksController)




router.get('/books/add',bookcontroller.addbookpageController)
router.post('/books/add',body,bookcontroller.submitbookController)
router.get('/books/:id',bookcontroller.onebooksController)
module.exports=router   