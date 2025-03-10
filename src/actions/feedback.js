import axios from 'axios'
import config from '../settings'

export const REQ_ADD_FEEDBACK = 'REQ_ADD_FEEDBACK'
export const RES_ADD_FEEDBACK = 'RES_ADD_FEEDBACK'
export const ERR_ADD_FEEDBACK = 'ERR_ADD_FEEDBACK'

export const REQ_LIST_FEEDBACK = 'REQ_LIST_FEEDBACK'
export const RES_LIST_FEEDBACK = 'RES_LIST_FEEDBACK'
export const ERR_LIST_FEEDBACK = 'ERR_LIST_FEEDBACK'

export const ERISE_DATA_FEEDBACK = 'ERISE_DATA_FEEDBACK'

export const REQ_DEL_FEEDBACK = 'REQ_DEL_FEEDBACK'
export const RES_DEL_FEEDBACK = 'RES_DEL_FEEDBACK'
export const ERR_DEL_FEEDBACK = 'ERR_DEL_FEEDBACK'

export const addFeedback = (data) => (dispatch) => {
  dispatch({ type: REQ_ADD_FEEDBACK })
  axios.post(`${config.apiPath}/public/feedback/add`, data)
    .then(res => {
      dispatch({
        type: RES_ADD_FEEDBACK,
        data: data
      })
    })
    .catch(err => dispatch({ type: ERR_ADD_FEEDBACK, error: err }))
}

export const eriseFeedback = () => (dispatch) => {
  dispatch({ type: ERISE_DATA_FEEDBACK });
}

export const getFeedback = () => (dispatch) => {
  dispatch({ type: REQ_LIST_FEEDBACK });
  axios.get(`${config.apiPath}/public/feedback`)
    .then(res => {
      dispatch({
        type: RES_LIST_FEEDBACK,
        data: res.data.data
      })
    })
    .catch(err => dispatch({ type: ERR_LIST_FEEDBACK, error: err }))
}

export const deleteFeedbackPost = (id) => (dispatch) => {
  dispatch({ type: REQ_DEL_FEEDBACK })
  axios.delete(`${config.apiPath}/private/feedback/${id}/delete`)
    .then(res => {
        dispatch({
          type: RES_DEL_FEEDBACK,
          data: id
        })
      }
    )
    .catch(err => dispatch({
      type: ERR_DEL_FEEDBACK,
      error: err
    }))
}