import { combineReducers } from 'redux'

import users from './users'
import posts from './posts'
import auth from './auth'
import popup from './popup';
import admin from './admin';

const reducer = combineReducers({
  users,
  posts,
  auth,
  popup,
  admin
})

export default reducer