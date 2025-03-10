import React from 'react'
import { connect } from 'react-redux'

import ReactHtmlParser from 'react-html-parser';
import moment from 'moment';

import { Link } from "react-router-dom"
import { List, Avatar, Icon } from 'antd'

import { deleteCalendarPost, startEditPost } from './../../../../actions'

class ListItem extends React.Component {

  IconText = ({ type, text }) => (
    <span>
      <Icon type={type} style={{ marginRight: 8 }} />
      {text}
    </span>
  );

  render = () => {
    const {
      cover,
      _id,
      title,
      price,
      location,
      description,
      deletePost,
      beginEditPost,
      dates,
      time
    } = this.props;

    return (
      <List.Item
        key={_id}
        extra={(
          <>
          <div className="calendar-list-img-wrap">
            <img alt="logo" src={cover}/>
          </div>
          </>
        )}
      >

      <div className="calendar-list-info">
        <div style={{ display: 'block'}}>
          <List.Item.Meta
            avatar={<Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />}
            title={
              <>
                <div className="calendar-list-dates-created">
                  <b>Дата начала: </b>
                  { moment(dates.start).format('LL')} - {moment(time.start).format('LT')}
                </div>
                <Link to={`/admin/calendar/${_id}`}>
                  {title}
                </Link>
              </>
              }
            description={location}
            />
        </div>
          <div className="calendar-list-dates-wrap">
            <div className="calendar-list-dates-created">
              <b>ЦЕНА: </b>
              { price === 0 ? `БЕСПЛАТНО` : price }
            </div>
            {
              dates && time !== undefined &&
              (
                <>
                  <div className="calendar-list-dates">
                    <b>Начало: </b>
                    {moment(dates.start).format('LL')} - {moment(time.start).format('LT')}
                  </div>
                  <div className="calendar-list-dates">
                    <b>Окончание: </b>
                    {
                      dates.end ?
                        moment(dates.end).format('LL') && time.end && moment(time.end).format('LT') :
                        "-//-"
                    }
                  </div>
                </>
              )
            }
          </div>
        </div>
        <div className="editor-wrap">
          { ReactHtmlParser(JSON.parse(description)) }
        </div>
        <div className="calendar-list-controls">
          <div className="calendar-list-controls-btn">
            <Link to={`/admin/calendar/${_id}`} onClick={ beginEditPost(_id)} >Редактировать</Link>
          </div>
          <div className="calendar-list-controls-btn">
            <span onClick={deletePost(_id)}>Удалить</span>
          </div>
        </div>
      </List.Item>
    )
  }
}

const getStateToProps = (state) => ({
  dataItem: state.admin.calendar
})

const getDispatchToProps = (dispatch) => ({
  deletePost: ( id ) => (e) => dispatch( deleteCalendarPost(id) ),
  beginEditPost: (id) => (e) => dispatch( startEditPost(id) )
})

export default connect(getStateToProps, getDispatchToProps)(ListItem);