const onebookcontroller=require('../controllers/onebook')
const router=require('express').Router()

router.get('/books/:id',onebookcontroller.onebooksController)


module.exports=router  