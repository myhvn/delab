const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
  date: {
    type: Date,
    default: new Date(),
    validate: {
      validator: function( date ){
          let eventDate = new Date( date );
          let currentDate = new Date();
          console.log(eventDate.getTime(), currentDate.getTime() );
          return currentDate.getTime() < eventDate.getTime()
      },
      message: props => `Can't create event in past (${props.value})`
    }
  },
  title: {
    type: String,
    required: [ true, 'Title is required']
  },
  location: {
    type: String,
    required: [ true, 'location is required']
  },
  previewText: {
    type: String
  },
  description: {
    type: String,
    default: ""
  }
});

module.exports = mongoose.model('Event', Schema);
