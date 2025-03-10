const Galery = require('../db/models/galery');

// { date, title, location, previewText, description }
exports.getGaleries = () => new Promise(async (resolve, reject) => {
  try {
    const result = await Galery.find().sort({ date: -1 });
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

exports.getGalery = (id) => new Promise(async (resolve, reject) => {
  try {
    const result = await Galery.findById(id);
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


exports.addGalery = (data) =>
  new Promise(async (resolve, reject) => {
    if (!data.title) {
      reject({
        success: false,
        message: 'Title is req'
      });
      return;
    }

    try {
      const newGalery = new Galery({
        ...data
      });
      const result = await newGalery.save();
      resolve({
        success: true,
        data: result
      });
    } catch (error) {
      reject(error);
    }
  }
)

exports.deleteGalery = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const Galery = await Galery.findById(id);

      Galery.remove();
      resolve({
        message: 'item successfully removed'
      })
    } catch (error) {
      reject(error);
    }
  }
)