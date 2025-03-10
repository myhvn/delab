import React, { Component } from 'react';
import { connect } from "react-redux";
import moment from "moment"

import { getCalendar } from '../../actions'
import CalendarHandler from '../elems/CalendarHandler'
import CalendarRegistrate from '../elems/CalendarRegistrate'

import CalendarItem from '../elems/CalendarItem'
import { dataSort } from '../../helpers/dataSort'

class Calendar extends Component {
  state = {
    data: [],
    loaded: false,
    markedEvent: [],
    markedEventData: null
  }

  componentDidMount(){
    this.props.getList()
  }

  chooseMarkedEvent = (id) => (e) => {
    const markedEventData = this.props.list.data.filter(post => post._id === id)

    this.setState({
      markedEvent: id,
      markedEventData: markedEventData[0]
    })

    const scrollTop = () => setTimeout(() => window.scrollTo({top: document.body.scrollHeight, behavior: "smooth"}), 150)

    scrollTop()
  }

  render() {
    const { dataClient, loaded } = this.props.list
    const { markedEventData } = this.state

    dataSort()

    const sortByData = dataClient && dataClient.sortBy(
      o => new Date(o.dates.start)
    )

    return (
      <div className="calendar_events">
        <div className="container">
          {/* events */}
          <div className="calendar-client-events">
            <div className="calendar-client-events-title">Предстоящие события</div>
            {
              loaded && Array.isArray(sortByData) && (
                <div className="calendar-client-wrap"> {
                  sortByData.map(item => (
                    <CalendarItem
                      key={item._id}
                      chooseMarkedEvent={this.chooseMarkedEvent}
                      {...item}
                    />
                  ))
                }
                </div>
              )
            }
          </div>
            {/* calendar */}
          <div className="calendar_events-handler">
            <CalendarHandler />
            <div className="description">
              <h2>Зарегистрироваться на мероприятие:</h2>
              {
                markedEventData && (
                  <>
                  <div className="add-dynamic-calendar-data">
                    <div className="add-dynamic-calendar-data-info">
                      <div className="title">
                        { markedEventData.title }
                      </div>
                      <div className="date">
                        { moment(markedEventData.dates.start).format('LL') }
                        <span> - </span>
                        { moment(markedEventData.time.start).format('HH:mm') }
                      </div>
                    </div>
                    <div className="add-dynamic-calendar-data-img">
                      <img src={ markedEventData.cover } alt="img"/>
                    </div>
                  </div>
                  </>
                )
              }
              <CalendarRegistrate markedEvent={this.state.markedEvent}/>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

const mapStateToProps = (state) => ({
  list: state.admin.calendar
})

const mapDispatchToProps = (dispatch) => ({
  getList: () => {
    dispatch(getCalendar());
  },
})
export default connect(mapStateToProps, mapDispatchToProps)(Calendar);