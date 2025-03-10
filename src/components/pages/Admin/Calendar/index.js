import React from 'react'
import { connect } from "react-redux"
import { Switch, Route, NavLink } from 'react-router-dom'

import { startCreatePost } from '../../../../actions'

import { Icon } from 'antd'

import List from './List'
import Create from './Create'
import Update from './Update'
// import CalendarEditor from './CalendarEditor'

import { HeaderContext } from '../BaseAdminLayout'

class CalendarIndex extends React.Component {

  componentDidMount(){
    this.context.setButtons( this.addButtons )
  }

  addButtons = () => (
    <div className="admin-header-context-btns header-admin-nav">
      <NavLink to="/admin/calendar/">
        <Icon type="unordered-list" />
      </NavLink>
      <span style={{ marginLeft: '20px' }}></span>
      <NavLink
        to="/admin/calendar/create"
      >
        <Icon type="plus-circle" onClick={this.props.beginCreatePost}/>
      </NavLink>
      <div className="admin-post-title admin-post-title-main">Календарь</div>
    </div>
  )

  render() {
    const { editing } = this.props
    return (
      <>
        <div className="admin-list-content">
          <div className={`admin-edit-window ${ editing ? 'active' : ''}`}>
            <Switch>
              <Route exact path="/admin/calendar/create" component={Create}/>
              <Route exact path="/admin/calendar/:id" component={Update}/>
            </Switch>
          </div>
          <div className={`admin-content-window ${editing ? 'active' : ''}`}>
            {/* <CalendarEditor/> */}
            <List/>
          </div>
        </div>
      </>
    )
  }
}
const getStateToProps = (state) => ({
  editing: state.admin.calendar.editing
})
const dispatchStateToProps = (dispatch) => ({
  beginCreatePost: () => dispatch( startCreatePost() )
})

CalendarIndex.contextType = HeaderContext

export default connect(getStateToProps, dispatchStateToProps)(CalendarIndex)
