const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

const url = 'mongodb://localhost:27017/BooksProject';

exports.signinmodel = (name, email, password) => {
  return new Promise((resolve, reject) => {
    mongoose.connect(url).then(() => {
      return User.findOne({ email: email });
    })
    .then((user) => {
      if (user) {
        mongoose.disconnect();
        reject('This email is already registered');
      } else {
        return bcrypt.hash(password, 10);
      }
    })
    .then((hashedPassword) => {
      const user = new User({
        name: name,
        email: email,
        password: hashedPassword,
      });
      return user.save();
    })
    .then(() => {
      mongoose.disconnect();
      resolve('Registered successfully');
    })
    .catch((err) => {
      mongoose.disconnect();
      reject(err);
    });
  });
};
