import axios from 'axios';
import config from '../settings';
import { configurateToken } from '../helpers/axios.interceptors'

export const SEND_LOGIN_REQ = 'SEND_LOGIN_REQ';
export const GET_LOGIN_RES = 'GET_LOGIN_RES';
export const GET_LOGIN_ERR = 'SEND_LOGIN_ERR';
export const LOGOUT = "LOGOUT";

export const logout = () => dispatch => dispatch({ type: LOGOUT });

export const getToken = ( data ) => (dispatch, getState) => {
  dispatch({ type: SEND_LOGIN_REQ});
  axios.post(
    `${config.apiPath}/public/auth/login`, data 
  ).then( res => {
    dispatch({ type: GET_LOGIN_RES, payload: res });
    configurateToken( res.data.token );
  })
  .catch(error => dispatch({ type: GET_LOGIN_ERR, error } ));






  
  // fetch('http://localhost:3003/auth/login',
  //   {
  //     method: 'POST',
  //     headers: {
  //       'Content-type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       email: this.state.login,
  //       password: this.state.password
  //     })
  //   }
  // )
  //   .then(res => res.json())
  //   .then(res => console.log('response:', res));
}