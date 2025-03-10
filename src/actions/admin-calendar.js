import axios from 'axios';
import config from '../settings';

export const REQ_ADMIN_CALENDAR = "REQ_ADMIN_CALENDAR";
export const RES_ADMIN_CALENDAR = "RES_ADMIN_CALENDAR";
export const ERR_ADMIN_CALENDAR = "ERR_ADMIN_CALENDAR";
export const ERISE_DATA = "ERISE_DATA";

export const REQ_ADD_CALENDAR = "REQ_ADD_CALENDAR";
export const RES_ADD_CALENDAR = "RES_ADD_CALENDAR";

export const REQ_DEL_CALENDAR = "REQ_DEL_CALENDAR";
export const RES_DEL_CALENDAR = "RES_DEL_CALENDAR";

export const START_EDIT_CALENDAR = "START_EDIT_CALENDAR";
export const FINISH_EDIT_CALENDAR = "FINISH_EDIT_CALENDAR";

export const REQ_UPDATE_EVENT_CALENDAR = "REQ_UPDATE_EVENT_CALENDAR";
export const RES_UPDATE_EVENT_CALENDAR = "RES_UPDATE_EVENT_CALENDAR";
export const ERR_UPDATE_EVENT_CALENDAR = "ERR_UPDATE_EVENT_CALENDAR";

export const SHOW_CE_WINDOW = "SHOW_CE_WINDOW";
export const HIDE_CE_WINDOW = "HIDE_CE_WINDOW";

export const FINISH_CREATE_CALENDAR = "FINISH_CREATE_CALENDAR";

export const eriseCalendarData = () => (dispatch) => {
  dispatch({ type: ERISE_DATA });
}

export const getCalendar = () => (dispatch, getState) => {
  dispatch({ type: REQ_ADMIN_CALENDAR });
  axios.get(`${config.apiPath}/public/calendar`)
    .then(res => {
      dispatch({
        type: RES_ADMIN_CALENDAR,
        data: res.data.data
      })
    })
    .catch(err => dispatch({ type: ERR_ADMIN_CALENDAR, error: err }))
}

export const addNewEventIntoCalendar = (data) => (dispatch, getState) => {
  dispatch({ type: REQ_ADD_CALENDAR });
  axios.post(`${config.apiPath}/private/calendar/add/`, data)
    .then(res => {
      dispatch({
        type: RES_ADD_CALENDAR,
        data: res.data.data
      })
    })
    .catch(err => dispatch({ type: ERR_ADMIN_CALENDAR, error: err }))
}

export const getCalendarItem = (id) => (dispatch, getState) => {
  dispatch({ type: REQ_ADMIN_CALENDAR });
  axios.get(`${config.apiPath}/public/calendar/${id}`)
    .then(res => {
      dispatch({
        type: RES_ADMIN_CALENDAR,
        data: res.data.data
      })
    })
    .catch(err => dispatch({ type: ERR_ADMIN_CALENDAR, error: err }))
}

export const deleteCalendarPost = (id) => (dispatch, getState) => {
  dispatch({ type: REQ_DEL_CALENDAR });
  axios.delete(`${config.apiPath}/private/calendar/${id}`)
    .then(res => {
      dispatch({
        type: RES_DEL_CALENDAR,
        data: id
      })
    })
    .catch(err =>
      console.log('REJECT', err)
      // dispatch({ type: ERR_ADMIN_CALENDAR, error: err })
    )
}

export const startCreatePost = () => (dispatch) => {
  dispatch({
    type: SHOW_CE_WINDOW
  })
}

export const startEditPost = (id) => (dispatch) => {
  dispatch({
    type: SHOW_CE_WINDOW,
    postId: id
  })
}

export const resetCE = () => (dispatch) => {
  dispatch({
    type: HIDE_CE_WINDOW
  })
}

export const updateEventCalendar = (data) => (dispatch, getState) => {
  dispatch({ type: REQ_UPDATE_EVENT_CALENDAR });
  axios.post(`${config.apiPath}/private/calendar/update/${data._id}`, data)
    .then(res => {
      if( res.data.status.ok === 1){
        dispatch({
          type: RES_UPDATE_EVENT_CALENDAR,
          payload: data
        })
      }
    })
    .catch(err => dispatch({ type: ERR_UPDATE_EVENT_CALENDAR, error: err }))
}