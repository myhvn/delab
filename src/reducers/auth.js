import {
  SEND_LOGIN_REQ,
  GET_LOGIN_RES,
  GET_LOGIN_ERR,
  LOGOUT
} from '../actions';

const initialState = {
  user: null,
  token: null,
  loading: false,
  error: null
};

function posts(state = initialState, action) {
  switch (action.type) {
    case SEND_LOGIN_REQ:
      return {
        ...state,
        loading: true
      }
    case GET_LOGIN_RES:
      return {
        ...state,
        user: action.payload.data.user,
        token: action.payload.data.token,
        loading: false
      }
    case GET_LOGIN_ERR:
      return{
        ...state,
        error: action.error.response
      }
    case LOGOUT:
      return initialState

    default:
      return state;
  }
}

export default posts