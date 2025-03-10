import React from 'react'
import { connect } from "react-redux"
import { NavLink } from 'react-router-dom'
import { Icon } from 'antd'

import { getGaleries } from '../../../../actions'
import { HeaderContext } from '../BaseAdminLayout'
import Galery from './Galery'

class CalendarIndex extends React.Component {
  state = {
    galeries: []
  }

  componentDidMount(){
    this.props.getListGaleries()
    this.context.setButtons( this.addButtons )
  }

  addButtons = () => (
    <div className="admin-header-context-btns header-admin-nav">
      <NavLink to="/admin/galery/">
        <Icon type="unordered-list" />
      </NavLink>
      <span style={{ marginLeft: '20px' }}></span>
      <div className="gallery-add-btn">
        <Icon type="plus-circle" onClick={this.props.beginCreatePost}/>
      </div>
      <div className="admin-post-title admin-post-title-main">Галерея </div>
    </div>
  )

  render() {
    return (
      <>
        <div className="admin-galery">
          <Galery/>
        </div>
      </>
    )
  }
}

const getStateToProps = (state) => ({
  galeries: state.admin.galeries.data
})

const dispatchStateToProps = (dispatch) => ({
  getListGaleries: () => dispatch( getGaleries() )
})

CalendarIndex.contextType = HeaderContext

export default connect(getStateToProps, dispatchStateToProps)(CalendarIndex)
