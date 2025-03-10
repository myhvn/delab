import React, { Component } from 'react';

import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";
import App from "./App";

import moment from 'moment';
import 'moment/locale/ru';

const supportsHistory = 'pushState' in window.history;
moment.locale('ru');


class Root extends Component {
  render() {
    return (
      <Provider store = { store }>
        <BrowserRouter forceRefresh={!supportsHistory}>
          <Route path='/' component={ App } />
        </BrowserRouter>
      </Provider>
    )
  }
}

export default Root;