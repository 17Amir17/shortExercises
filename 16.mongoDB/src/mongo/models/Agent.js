const mongoose = require('mongoose');

const agentScheme = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model('Agent', agentScheme);
