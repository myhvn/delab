import React from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom"
import { List, Avatar, Icon } from 'antd'

import moment from 'moment'

import { deleteFeedbackPost } from './../../../../actions'

const DisplayEvent = (event) => (
  <div className="feedback-admin-display-event">

    <div className="info">
      <div className="info-title">
        <b style={{ display: 'block' }}>Подписан на мероприаятие: </b>
        {event.title}
      </div>
      <div className="info-title">
        <b style={{ display: 'block' }}>Локация: </b>
        {event.location}
      </div>
      <div className="info-title">
        <b style={{ display: 'block' }}>Начало мероприаятия: </b>
        { moment(event.dates.start).format('LL') } - { moment(event.dates.start).format('LL') }
      </div>
    </div>
    <div className="img">
      <img src={event.cover} alt="img"/>
    </div>

  </div>
);

class ListItem extends React.Component {

  IconText = ({ type, text }) => (
    <span>
      <Icon type={type} style={{ marginRight: 8 }} />
      {text}
    </span>
  );

  render = () => {
    const { email, _id, name, question, phone, events, created_at, deletePost } = this.props;
    return (
      <List.Item key={_id}>
      <div className="calendar-list-info feedback">
        <div style={{ display: 'block'}}>

          <List.Item.Meta
            avatar={<Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />}
              title={<Link to={`/admin/feedback/${_id}`}>
                <b>Имя: </b> {name}
                <div>
                  <b>Зарегистрирован: </b>
                  {moment(created_at).format('LL')}
                </div>
                </Link>
              }
            description={(
              <>
                <div><b>Телефон :</b> {phone}</div>
                <div><b>Мэйл :</b> {email}</div>
              </>
            )}
            email={email}
            />
            <b>Вопрос : </b>{ question }
        </div>
          <div className="calendar-list-dates-wrap">
            <div>
              {
                events.map(( event, key ) => (
                  <DisplayEvent
                    key={key}
                    {...event}
                  />
                ) )
              }
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
    deletePost: ( id ) => (e) => {
      dispatch(deleteFeedbackPost(id));
    }
})

export default connect(getStateToProps, getDispatchToProps)(ListItem);