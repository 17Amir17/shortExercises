const mongoose = require('mongoose');

const agentScheme = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  surName: {
    type: String,
    required: true,
  },
  birth: {
    type: Date,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: false,
  },
  courses: {
    type: Array,
  },
});

module.exports = mongoose.model('student', agentScheme);
