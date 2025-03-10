const Feedback = require('../db/models/feedback');

// { date, title, location, previewText, description }
exports.getFeedbackList = () => new Promise(async (resolve, reject) => {
  try {
    const result = await Feedback.find().sort({ date: -1 });
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

exports.addFeedbackItem = (data) =>
  new Promise(async (resolve, reject) => {
    try {
      const newEvent = new Feedback({
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
exports.deleteFeedbackItem = (id) => {
  new Promise(async (resolve, reject) => {
    try {
      const post = await Feedback.findById(id)

      post.remove()
      resolve({
        message: 'item feedback delete successfully'
      })
    } catch(err) {
      reject({
        message: 'delete refused',
        error: err
      })
    }
  })
}