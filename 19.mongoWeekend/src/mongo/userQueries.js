const User = require('./models/user');

async function insertMany(col) {
  return await User.insertMany(col);
}

module.exports = { insertMany };
