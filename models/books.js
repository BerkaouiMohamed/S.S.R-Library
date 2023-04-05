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

exports.getRandombooks = () => {
    return new Promise((resolve, reject) => {
      mongoose.connect(url)
        .then(() => {
          return book.aggregate([{ $sample: { size: 3 } }])
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
  };
  
exports.getNewbooks = () => {
  return new Promise((resolve, reject) => {
    mongoose.connect(url)
    .then(() => {
      return book.find({ }).sort({ date: -1 }).limit(2);
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
exports.getAllbooks = () => {
  return new Promise((resolve, reject) => {
    mongoose.connect(url)
    .then(() => {
      return book.find({ })
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
})}