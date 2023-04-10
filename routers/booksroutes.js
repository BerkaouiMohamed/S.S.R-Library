const bookcontroller=require('../controllers/bookscontroller')
const router=require('express').Router()
const body=require('express').urlencoded({extended:true})
const gardauth=require('./gard.auth')



router.get('/',bookcontroller.booksController)
router.get('/books',gardauth.isauth,bookcontroller.allbooksController)




router.get('/books/add',gardauth.isauth,bookcontroller.addbookpageController)
router.post('/books/add',body,bookcontroller.submitbookController)



router.get('/books/:id',gardauth.isauth,bookcontroller.onebooksController)


router.get('/mybooks',gardauth.isauth,bookcontroller.mybookspageController)
router.post('/mybooks/delete/:id',body,gardauth.isauth,bookcontroller.deletebookController)
router.get('/mybooks/update/:id',gardauth.isauth,bookcontroller.updatepagebookController)

router.post('/mybooks/update/:id',body,gardauth.isauth,bookcontroller.updatebookController)

module.exports=router    