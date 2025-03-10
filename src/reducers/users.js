import { REQUEST, RESPONSE, ERROR } from '../actions'

const initialState = {
  lesson : 5,
  course: 'React.js',
  studentsCount: 1,

  title: 'List Articles',
  loadedData: [],
  loadedStatus: false
};

function users(state = initialState, action){
  switch( action.type ){
    case REQUEST:
      return {
        ...state,
        loadedStatus: false
      }
    case RESPONSE:
      return {
        ...state,
        loadedStatus: true,
        loadedData: action.data
      }
    case ERROR:
      return {
        ...state,
        loadedStatus: true,
        loadedData: action.data
      }
    default:
      return state;
  }
}

export default users