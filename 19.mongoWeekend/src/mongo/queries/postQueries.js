const Post = require('../models/post');

async function insertMany(col) {
  return await Post.insertMany(col);
}

async function getPostIdByTitle(title) {
  return (await Post.findOne({ title: { $regex: new RegExp(title) } }))._id;
}

async function getAllPosts() {
  return await Post.find({});
}

async function getAllPostsByAuthor(username) {
  return await Post.find({ username });
}

module.exports = {
  insertMany,
  getPostIdByTitle,
  getAllPosts,
  getAllPostsByAuthor,
};
