const GaleryImg = require('../db/models/galeryImg');

// { date, title, location, previewText, description }
exports.getGaleryImgs = (galery) => new Promise(async (resolve, reject) => {
  try {
    const result = await GaleryImg.find().sort({ date: -1 }); //g
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

exports.getGaleryImg = (id) => new Promise(async (resolve, reject) => {
  try {
    const result = await GaleryImg.findById(id);
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

exports.addGaleryImg = (data) =>
  new Promise(async (resolve, reject) => {
    if (!data.title) {
      reject({
        success: false,
        message: 'Title is req'
      });
      return;
    }

    try {
      const newGaleryImg = new GaleryImg({
        ...data
      });
      const result = await newGaleryImg.save();
      resolve({
        success: true,
        data: result
      });
    } catch (error) {
      reject(error);
    }
  }
)

exports.deleteGaleryImg = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const GaleryImg = await GaleryImg.findById(id);

      GaleryImg.remove();
      resolve({
        message: 'item successfully removed'
      })
    } catch (error) {
      reject(error);
    }
  }
)