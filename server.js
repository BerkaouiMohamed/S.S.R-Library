const express=require('express')
const path=require('path')
const app=express()
const bookrouter=require('./routers/book')
const onebookrouter=require('./routers/onebookr')
const authrouter=require('./routers/authroute')


//make our folder static
app.use(express.static(path.join(__dirname,'assests')))
app.set('view engine','ejs')
app.set('views','views')
 

app.use('/',bookrouter)
app.use('/',onebookrouter)
app.use('/',authrouter)







app.listen(5000,()=>{return console.log('server is runnin on port 5000');})