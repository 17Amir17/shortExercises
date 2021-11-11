const User = require('../models/user');

async function insertMany(col) {
  return await User.insertMany(col);
}

async function getAllUsers() {
  return await User.find({});
}

module.exports = { insertMany, getAllUsers };
