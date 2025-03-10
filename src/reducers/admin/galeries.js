import {
  REQ_ADD_GALERIES,
  RES_ADD_GALERIES,
  ERR_ADD_GALERIES,

  REQ_LIST_GALERIES,
  RES_LIST_GALERIES,

  REQ_DEL_GALERIES,
  RES_DEL_GALERIES,
  ERR_DEL_GALERIES,

  ERISE_DATA_GALERIES,
} from '../../actions'

const initialState = {
  data: [],
  isCreated: false,
  loading: false,
  loaded: false,
  errors: []
}

function GALERIES( state = initialState, action) {
  switch(action.type) {
    case REQ_LIST_GALERIES:
      return {
        ...state,
        isCreated: false,
        loading: true,
        loaded: false
      }
    case RES_LIST_GALERIES:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.data
      }
    case ERISE_DATA_GALERIES:
      return initialState

    case REQ_ADD_GALERIES:
      return {
        ...state,
        isCreated: false
      }
    case RES_ADD_GALERIES:
      return {
        ...state,
        isCreated: true,
        data: action.data
      }
    case ERR_ADD_GALERIES:
      return {
        ...state,
        isCreated: false,
        error: action.error
      }
    case REQ_DEL_GALERIES:
      return {
        ...state,
        deletedPost: false
      }
    case RES_DEL_GALERIES:
      const newList = state.data.filter(
        item => item._id !== action.data
      )

      return {
        ...state,
        deletedPost: true,
        data: newList
      }
    case ERR_DEL_GALERIES:
      return {
        ...state,
        errors: () => state.errors.push(action.error)
      }
    default:
      return {
        state
      }
  }
}

export default GALERIES