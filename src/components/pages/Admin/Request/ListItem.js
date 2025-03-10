import React from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom"
import { List, Avatar, Icon } from 'antd'

import { deleteFeedbackPost } from './../../../../actions'

class ListItem extends React.Component {

  IconText = ({ type, text }) => (
    <span>
      <Icon type={type} style={{ marginRight: 8 }} />
      {text}
    </span>
  );

  render = () => {
    const { email, _id, name, question, phone, created_at, deletePost } = this.props;
    return (
      <List.Item key={_id}>
        <div className="calendar-list-info">
          <div style={{ display: 'block' }}>
            <List.Item.Meta
              avatar={<Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />}
              title={<Link to={`/admin/feedback/${_id}`}>{name}</Link>}
              description={(
                <>
                  <div>{phone}</div>
                  <div>{email}</div>
                </>
              )}
              email={email}
            />
            {question}
          </div>
          <div className="calendar-list-dates-wrap">
            <div className="calendar-list-dates-created">
              <b>Created:</b>
              {created_at}
            </div>
            <div
              style={{
                display: 'inline-block',
                marginTop: '15px'
              }}
              className="calendar-list-controls-btn"
            >
              <div onClick={deletePost(_id)}>
                Delete
              </div>
            </div>
          </div>
        </div>
      </List.Item>
    )
  }
}

const getStateToProps = (state) => ({})

const getDispatchToProps = (dispatch) => ({
  deletePost: (id) => (e) => {
    dispatch(deleteFeedbackPost(id));
  }
})

export default connect(getStateToProps, getDispatchToProps)(ListItem);