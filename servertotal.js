const express=require('express')
const path=require('path')
const app=express()
const bookrouter=require('./routers/book')
const mongoose=require('mongoose')


var schemabook=mongoose.Schema({
    _id:String,
    title:String,
    auther:String,
    discription:String,
    image:String,
    date:String
})

var book=mongoose.model('book',schemabook)
const url='mongodb://localhost:27017/BooksProject'

//make our folder static
app.use(express.static(path.join(__dirname,'assests')))
app.set('view engine','ejs')
app.set('views','views')
 
 
app.get('/',(req,res,next)=>{



    let bookpromes= new Promise((resolve, reject) => {
        mongoose.connect(url)
          .then(() => {
            return book.find({});
          })
          .then((books) => {
              console.log(books)
            mongoose.disconnect();
            resolve(books);
          })
          .catch((err) => {
            mongoose.disconnect();
            reject(err);
          });
      });
 bookpromes.then(book=>{
        res.render('index',(books=book))
    })

})
 




app.listen(5000,()=>{return console.log('server is runnin on port 5000');})