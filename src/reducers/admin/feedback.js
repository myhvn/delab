import {
  REQ_ADD_FEEDBACK,
  RES_ADD_FEEDBACK,
  ERR_ADD_FEEDBACK,
  ERISE_DATA_FEEDBACK,
  REQ_LIST_FEEDBACK,
  RES_LIST_FEEDBACK,
  REQ_DEL_FEEDBACK,
  RES_DEL_FEEDBACK,
  ERR_DEL_FEEDBACK
} from '../../actions'

const initialState = {
  data: null,
  isCreated: false,
  loading: false,
  loaded: false,
  errors: []
}

function feedback( state = initialState, action) {
  switch(action.type) {
    case REQ_LIST_FEEDBACK:
      return {
        ...state,
        isCreated: false,
        loading: true,
        loaded: false
      }
    case RES_LIST_FEEDBACK:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.data
      }
    case ERISE_DATA_FEEDBACK:
      return initialState

    case REQ_ADD_FEEDBACK:
      return {
        ...state,
        isCreated: false
      }
    case RES_ADD_FEEDBACK:
      return {
        ...state,
        isCreated: true,
        data: action.data
      }
    case ERR_ADD_FEEDBACK:
      return {
        ...state,
        isCreated: false,
        error: action.error
      }
    case REQ_DEL_FEEDBACK:
      return {
        ...state,
        deletedPost: false
      }
    case RES_DEL_FEEDBACK:
      const newList = state.data.filter(
        item => item._id !== action.data
      )

      return {
        ...state,
        deletedPost: true,
        data: newList
      }
    case ERR_DEL_FEEDBACK:
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

export default feedback