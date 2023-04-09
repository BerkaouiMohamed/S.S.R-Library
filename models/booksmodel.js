const mongoose=require('mongoose')


var schemabook=mongoose.Schema({
    _id:String,
    title:String,
    author:String,
    description:String,
    image:String, 
    date:Number,
    img:String,
    userId:String,
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



exports.getOnebook = (id) => {
  return new Promise((resolve, reject) => {
    mongoose.connect(url)
    .then(() => {
            //i trid to find it by id but  there is somthing  goning wrong so i dicide to get it like this ;p  i trid: book.findbyId(id) and findOne({_id=id})

      return book.find({})
    })
      .then((books) => {
         let book =books.find(b=>b._id===id)
          console.log('/n hiii',typeof(id) ,book)
        mongoose.disconnect();
        resolve(book);
      })
      .catch((err) => {
      
        reject(err);
      });
  }); 
};


exports.addNewbook = (title,author ,description,date) => {
  return new Promise((resolve, reject) => {
    mongoose.connect(url)
    .then(() => {
      let newbook= new book({
        title:title,
        author:author,
        description:description,
        date:date
      })
      return newbook.save()
    })
      .then((newbook) => {
        mongoose.disconnect();
        resolve(newbook);
      })
      .catch((err) => {
      
        reject(err);
      });
  }); 
};