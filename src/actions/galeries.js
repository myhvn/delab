import axios from 'axios'
import config from '../settings'

export const REQ_ADD_GALERIES = 'REQ_ADD_GALERIES'
export const RES_ADD_GALERIES = 'RES_ADD_GALERIES'
export const ERR_ADD_GALERIES = 'ERR_ADD_GALERIES'

export const REQ_LIST_GALERIES = 'REQ_LIST_GALERIES'
export const RES_LIST_GALERIES = 'RES_LIST_GALERIES'
export const ERR_LIST_GALERIES = 'ERR_LIST_GALERIES'

export const ERISE_DATA_GALERIES = 'ERISE_DATA_GALERIES'

export const REQ_DEL_GALERIES = 'REQ_DEL_GALERIES'
export const RES_DEL_GALERIES = 'RES_DEL_GALERIES'
export const ERR_DEL_GALERIES = 'ERR_DEL_GALERIES'

export const addGalery = (data) => (dispatch) => {
  dispatch({ type: REQ_ADD_GALERIES })
  axios.post(`${config.apiPath}/public/galery/add`, data)
    .then(res => {
      dispatch({
        type: RES_ADD_GALERIES,
        data: data
      })
    })
    .catch(err => dispatch({ type: ERR_ADD_GALERIES, error: err }))
}

export const eriseGaleries = () => (dispatch) => {
  dispatch({ type: ERISE_DATA_GALERIES });
}

export const getGaleries = () => (dispatch) => {
  dispatch({ type: REQ_LIST_GALERIES });
  axios.get(`${config.apiPath}/public/galeries`)
    .then(res => {
      dispatch({
        type: RES_LIST_GALERIES,
        data: res.data.data
      })
    })
    .catch(err => dispatch({ type: ERR_LIST_GALERIES, error: err }))
}

export const deleteGalery = (id) => (dispatch) => {
  dispatch({ type: REQ_DEL_GALERIES })
  axios.delete(`${config.apiPath}/private/galeries/${id}/delete`)
    .then(res => {
        dispatch({
          type: RES_DEL_GALERIES,
          data: id
        })
      }
    )
    .catch(err => dispatch({
      type: ERR_DEL_GALERIES,
      error: err
    }))
}