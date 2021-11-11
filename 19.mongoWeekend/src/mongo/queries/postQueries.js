const Post = require('../models/post');

async function insertMany(col) {
  return await Post.insertMany(col);
}

async function getPostIdByTitle(title) {
  return (await Post.findOne({ title: { $regex: new RegExp(title) } }))._id;
}

module.exports = { insertMany, getPostIdByTitle };
