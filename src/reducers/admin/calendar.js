import {
  REQ_ADMIN_CALENDAR,
  RES_ADMIN_CALENDAR,
  ERR_ADMIN_CALENDAR,
  ERISE_DATA,
  RES_DEL_CALENDAR,
  RES_ADD_CALENDAR,
  SHOW_CE_WINDOW,
  HIDE_CE_WINDOW,
  REQ_UPDATE_EVENT_CALENDAR,
  RES_UPDATE_EVENT_CALENDAR,
  ERR_UPDATE_EVENT_CALENDAR
} from '../../actions';

const initialState = {
  data: null,
  dataClient: null,
  loaded: false,
  loading: false,
  errors: false,
  isCreated: false,
  editing: false,
  editingPost: null,
  isUpdated: false
};

function calendar(state = initialState, action) {
  switch (action.type) {
    case REQ_ADMIN_CALENDAR:
      return {
        ...state,
        isCreated: false,
        loading: true,
        loaded: false
      }
    case RES_ADMIN_CALENDAR:
      const fromNow = action.data.filter(
        date => {
          const now = new Date()
          var today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
          const eventDate = new Date(date.dates.start)

          return (today <= eventDate);
        }
      )
      console.log('FROM NOW', fromNow);

      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.data,
        dataClient: fromNow
      }
    case ERR_ADMIN_CALENDAR:
      return {
        ...state,
        error: action.error
      }
    case ERISE_DATA:
      return {
        ...initialState,
        editing: state.editing,
        editingPost: state.editingPost
      }
    case RES_DEL_CALENDAR:
      let newList = state.data.filter(item => item._id !== action.data);
      return {
        ...state,
        data: newList
      }
    case RES_ADD_CALENDAR:
      return {
        ...state,
        isCreated: true,
        editing: false
      }
    case SHOW_CE_WINDOW:
      let findPost = state.data.find(post => post._id === action.postId)

      if( findPost === -1 ){
        findPost = null;
      }
      return {
        ...state,
        editing: true,
        editingPost: findPost
      }
    case HIDE_CE_WINDOW:
      return {
        ...state,
        editing: false
      }
    case REQ_UPDATE_EVENT_CALENDAR:
      return {
        ...state,
        isUpdated: false
      }
    case RES_UPDATE_EVENT_CALENDAR:
      return {
        ...state,
        isUpdated: true,
        editing: false,
        editingPost: null,
        data: state.data.map( calendarItem => {
          if(calendarItem._id === action.payload._id){
            calendarItem = action.payload;
          }
          return calendarItem;
        })
      }
    case ERR_UPDATE_EVENT_CALENDAR:
      return {
        ...state,
        error: action.error
      }

    default:
      return state;
  }
}

export default calendar;