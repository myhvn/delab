const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  registered: {
    type: Date,
    default: new Date()
  },
  password: {
    type: String,
    required: true
  },
  rigths: {
    type: String,
    default: 'user',
  }
});

module.exports = mongoose.model('User', Schema);
