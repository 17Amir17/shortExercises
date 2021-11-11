require('dotenv').config();
const mongoose = require('mongoose');
const Student = require('./models/student');

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

async function addStudent(name, surName, birth, phone, gender, courses) {
  const student = new Student({ name, surName, birth, phone, gender, courses });
  const res = await student.save();
  return res;
}

async function insertMany(col) {
  return await Student.insertMany(col);
}

async function clear() {
  return await Student.deleteMany({});
}

async function close() {
  await mongoose.connection.close();
}

module.exports = {
  init,
  addStudent,
  insertMany,
  clear,
  close,
};
