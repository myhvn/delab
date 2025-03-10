import { createStore, applyMiddleware, compose } from "redux";
import reducer from '../reducers';

import thunk from 'redux-thunk';
import transform from './middleware/transformData';
import { loadState, saveState } from './localstorage';
import { configurateToken } from '../helpers/axios.interceptors';

const composeEnhancers =  process.env.NODE_ENV !== 'production' && typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const middleware = applyMiddleware(thunk, transform) ;

const persistedState = loadState();
let store;
if (persistedState !== undefined && persistedState.auth.user !== null) {
  store = createStore(reducer, persistedState, composeEnhancers(middleware));
} else {
  store = createStore(reducer, composeEnhancers(middleware));
}

store.subscribe(() => {
  let stored = store.getState();
  saveState({
    auth: stored.auth,
  });
});

if (store.getState().auth.token !== null) {
  configurateToken(store.getState().auth.token);
}

export default store;