const Comment = require('../models/comment');

async function insertMany(col) {
  return await Comment.insertMany(col);
}

module.exports = { insertMany };
