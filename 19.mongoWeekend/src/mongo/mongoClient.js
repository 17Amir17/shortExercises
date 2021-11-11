require('dotenv').config();
const mongoose = require('mongoose');
const Student = require('./models/student');
const Post = require('./models/post');
const User = require('./models/user');
const Comment = require('./models/comment');
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.usl1e.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`;

async function init() {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log('connected to database successfully');
        resolve();
      })
      .catch(() => {
        console.log('connection to database failed');
        reject();
      });
  });
}

async function clear() {
  return [
    await Student.deleteMany({}),
    await Post.deleteMany({}),
    await User.deleteMany({}),
    await Comment.deleteMany({}),
  ];
}

async function close() {
  await mongoose.connection.close();
}

module.exports = {
  init,
  clear,
  close,
};
