const Comment = require('../models/comment');

async function insertMany(col) {
  return await Comment.insertMany(col);
}

async function getAllComments() {
  return await Comment.find({});
}

async function getCommentsByAuthor(username) {
  return await Comment.find({ username });
}

async function getCommentsFromPost(post) {
  return await Comment.find({ post });
}

module.exports = {
  insertMany,
  getAllComments,
  getCommentsByAuthor,
  getCommentsFromPost,
};
