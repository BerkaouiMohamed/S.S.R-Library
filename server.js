const express=require('express')
const path=require('path')
const app=express()
const bookrouter=require('./routers/booksroutes')
const onebookrouter=require('./routers/booksroutes')
const authrouter=require('./routers/userroutes')
const session=require('express-session')
const MongoDBStore=require('connect-mongodb-session')(session)
const flash =require('connect-flash')


//make our folder static
app.use(express.static(path.join(__dirname,'assests')))
app.set('view engine','ejs')
app.set('views','views')
app.use(flash())
 

const store=new MongoDBStore({
  uri:'mongodb://localhost:27017/library',
  collection:'sessions'
})
 app.use(session({
  secret:'this is my secret key dfjkbnjdfnbhjshdvbshdvsd',

  store:store,
  resave: true,
  saveUninitialized: true
}))

app.use('/',bookrouter)
app.use('/',onebookrouter)
app.use('/',authrouter)







app.listen(5000,()=>{return console.log('server is runnin on port 5000');})