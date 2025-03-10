const User = require('../db/models/user');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const salt = 10;


exports.register = (data) => {
  return new Promise( async (resolve, reject) => {

    try {
      bcrypt.hash(data.password, salt, async function (err, hash) {
        // Store hash in your password DB.

        const newUser = new User({
          ...data,
          password: hash
        });
        const result = await newUser.save();
        resolve({
          success: true,
          data: result
        });
      });
    } catch (error) {
      reject({
        error: error
      });
    }
  });
}


exports.login = (data) => new Promise(async(resolve, reject) => {

  try {

    const user = await User.findOne({ email: data.login });
    if( !user ){
      reject({
          status: false,
          message: 'User not found'
      })
    }
    bcrypt.compare(data.password, user.password, async function (err, res) {

      if( res ){
        resolve({
          status: true,
          user: user,
          token: jsonwebtoken.sign({
            data: user,
            exp: Math.floor(Date.now() / 1000) + (60 * 60)
          }, 'test'),
          message: 'Login Successfully'
        });
      } else {
        reject({
          status: false,
          message: 'Password or Email do not match'
        })
      }
    });

  } catch (error) {
    reject(error);
  }

});