const express=require('express')
const path=require('path')
const app=express()
const bookrouter=require('./routers/book')

//make our folder static
app.use(express.static(path.join(__dirname,'assests')))
app.set('view engine','ejs')
app.set('views','views')
 

app.use('/',bookrouter)
app.use('/',bookrouter)


app.get('/books',(req,res,next)=>{
    res.render('books')
})
app.get('/book',(req,res,next)=>{
    res.render('book')
})
   


app.get('/login',(req,res,next)=>{
    res.render('login')
}) 

app.get('/logup',(req,res,next)=>{
    res.render('logup')
})



app.listen(5000,()=>{return console.log('server is runnin on port 5000');})