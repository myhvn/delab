const Calendar = require('../db/models/calendar');

// { date, title, location, previewText, description }
exports.getEvents = () => new Promise(async (resolve, reject) => {
  try {
    const result = await Calendar.find().sort({ date: -1 });
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

exports.getEvent = (id) => new Promise(async (resolve, reject) => {
  try {
    const result = await Calendar.findById(id);
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


exports.addEvent = (data) =>
  new Promise(async (resolve, reject) => {
    if (!data.title) {
      reject({
        success: false,
        message: 'Title is req'
      });
      return;
    }

    try {
      const newEvent = new Calendar({
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

exports.editCalendarPost = (newPost) =>
  new Promise(async (resolve, reject) => {
      try {
        // let findedPost = await Calendar.findById(newPost._id);
        let findedPost = await Calendar.updateOne({
          _id: newPost._id
        }, newPost);

        console.log( 'findedPost', findedPost )

        resolve({
          message: 'Пост в календаре успешно изменен',
          status: findedPost
        })
      } catch (err) {
        console.log('err', err);
        reject({ error: err, message: 'Проблема при сохранении изменений'})
      }
  })


exports.deleteEvent = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const Event = await Calendar.findById(id);

      Event.remove();
      resolve({
        message: 'item successfully removed'
      })
    } catch (error) {
      reject(error);
    }
  }
)