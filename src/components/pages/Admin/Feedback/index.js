import React, {Component} from 'react'
import { Switch, Route, NavLink } from 'react-router-dom';

import { Icon } from 'antd';

import List from './List';

import { HeaderContext } from '../BaseAdminLayout'

class FeedbackIndex extends Component {
  componentDidMount = () => {
    this.context.setButtons( this.addButtons )
  }

  addButtons = () => (
    <div className="admin-header-context-btns header-admin-nav">
      <NavLink to="/admin/calendar/">
        <Icon type="unordered-list" />
      </NavLink>
      <div className="admin-post-title admin-post-title-main">Партнерство</div>
    </div>
  )

  render = () => (
    <>
      <Switch>
        <Route exact path="/admin/feedback/" component={List} />
      </Switch>
    </>
  )
}

FeedbackIndex.contextType = HeaderContext;

export default FeedbackIndex;