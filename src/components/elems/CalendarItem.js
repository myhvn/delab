import React from 'react';
import { Collapse } from 'antd';

import moment from 'moment'
import ReactHtmlParser from 'react-html-parser';

import mockImg from '../../assets/img/delab-mock.jpg'

const { Panel } = Collapse

const CalendarItem = ({...props}) => {
  const formatingDate = () => {
    if (props.dates.start && props.dates.start === props.dates.end) {
      return (
        <>
          { props.dates.start && moment(props.dates.start).format("ll") }
          <span></span>
          { props.time.start && moment(props.time.start).format("LT") }
          { props.time.end ? <span> - </span> : <span></span> }
          { props.time.end && moment(props.time.end).format("LT") }
        </>
      )
    } else {
      return (
        <>
          { props.dates.start && moment(props.dates.start).format("ll") }
          <span> - </span>
          { props.dates.end && moment(props.dates.end).format("ll") }
          <span></span>
          { props.time.start && moment(props.time.start).format("LT") }
          {props.time.end ? <span> - </span> : <span></span>}
          { props.time.end && moment(props.time.end).format("LT") }
        </>
      )
    }
  }

  return (
  <div className="calendar-client-events-item">
    <div className="calendar-client-events-item-img-wrap">
      {
        props.cover ?
        <img src={props.cover} alt="cover"/> :
        <img src={mockImg} alt="cover"/>
      }
    </div>
    <div className="calendar-client-events-item-info">
      <div className="calendar-client-events-item-info-where">
          <div className="calendar-client-events-item-info-date">
          {
            props && formatingDate()
          }
          </div>
        <div className="calendar-client-events-item-info-location">{props.location}</div>
      </div>
      <div className="calendar-client-events-item-info-title">
        {props.title}
        <div className="calendar-client-events-item-info-price">
          { props.price > 0 ? `Цена: ${props.price} грн` : 'Вход: свободный' }
        </div>
      </div>

      <div className="calendar-client-events-item-info-description">
        { props.description && props.description.length > 0 && (
            <Collapse bordered={false} accordion>
            <Panel header="Читать подробнее" key="1">
              <div className="calendar-client-events-item-info-description-content-wrapper">
                { ReactHtmlParser(JSON.parse(props.description)) }
              </div>
            </Panel>
          </Collapse>
        )}
      </div>
        <div className="calendar-client-events-item-info-btn" onClick={props.chooseMarkedEvent(props._id)}>Зарегистрироваться</div>
    </div>
  </div>
)};

export default CalendarItem;