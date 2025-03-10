import axios from 'axios';
import config from '../settings';

export const privateAxios = axios.create({
  baseURL: config.apiPath,
  headers: {
    common: {
      'Content-type': 'application/json',
    },
    get: {
      'Content-type': 'application/json',
      'Accept': 'application/json'
    }
  }
});

export const configurateToken = ( token ) => {
  privateAxios.defaults.headers.common["Authorization"] = `Bearer ${ token }`
};