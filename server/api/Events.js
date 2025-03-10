const Event = require('../db/models/event');

// { date, title, location, previewText, description }
exports.addEvent = ( data ) =>
  new Promise( async ( resolve, reject ) => {
    if (!data.title){
      reject({
        success: false,
        message: 'Title is req'
      });
      return;
    }

    try {
      const newEvent = new Event({
        ...data
      });
      const result = await newEvent.save();
      resolve({
        success: true,
        data: result
      });
    } catch (error) {
      reject(error);
    }
  }
)

exports.getEvents = () => new Promise ( async ( resolve, reject ) => {
  try {
    const result = await Event.find().sort({date: -1});
    resolve({
      success: true,
      data: result
    });
  } catch (error) {
    reject({
      error: error
    });
  }


});