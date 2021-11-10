require('dotenv').config();
const mongoose = require('mongoose');

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.usl1e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

async function init() {
  return new Promise((resolve, reject) => {
    console.log('Connecting to ' + uri);
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

module.exports = { init };
