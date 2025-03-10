import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { HeaderLayout } from  '../../common/Layout';
import BaseAdminLayout from './BaseAdminLayout'

import Calendar from './Calendar';
import Feedback from './Feedback';
import Request from './Request';
import Galery from './Galery';

import 'antd/dist/antd.css';

class Admin extends Component {
  componentDidMount(){
    this.context.hideHeader();
  }

  render() {
    return (
      <div className="admin">
        <BaseAdminLayout>
          <Switch>
            <Route path="/admin/calendar" component={Calendar}/>
            <Route exact path="/admin/feedback" component={Feedback}/>
            <Route exact path="/admin/request" component={Request}/>
            <Route exact path="/admin/galery" component={Galery}/>
            <Redirect to="/admin/calendar" />
          </Switch>
        </BaseAdminLayout>
      </div>
    )
  }
}

Admin.contextType = HeaderLayout;

export default Admin;


