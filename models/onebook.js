const mongoose=require('mongoose')


var schemabook=mongoose.Schema({
    _id:String,
    title:String,
    author:String,
    description:String,
    image:String, 
    date:Number,
    img:String
})

var book=mongoose.model('book',schemabook)
const url='mongodb://localhost:27017/BooksProject'


exports.getOnebook = (id) => {
    return new Promise((resolve, reject) => {
      mongoose.connect(url)
      .then(() => {
        return book.findById(id)
      })
        .then((books) => {
            console.log('/n hiii',books)
          mongoose.disconnect();
          resolve(books);
        })
        .catch((err) => {
          mongoose.disconnect();
          reject(err);
        });
    });
  };