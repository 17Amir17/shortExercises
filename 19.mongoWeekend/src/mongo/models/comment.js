const mongoose = require('mongoose');

const commentScheme = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  post: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
});

module.exports = mongoose.model('comment', commentScheme);
