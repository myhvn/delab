const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
  title: {
    type: String,
    required: ['true', 'Title is required']
  },
  category: {
    type: String,
    default: null
  },
  img: {
    type: String,
    required: ['true', 'Title is required']
  },
  created_at: {
    type: Date,
    default: new Date()
  },
  updated_at: {
    type: Date,
    default: new Date()
  }
});

module.exports = mongoose.model('GaleryImg', Schema);
