import React, { Component } from 'react'
import { connect } from 'react-redux'
import InfiniteCalendar, {
  Calendar,
  withMultipleDates,
  defaultMultipleDateInterpolation
} from 'react-infinite-calendar'

import 'react-infinite-calendar/styles.css'

const calendarStyles = {
  selectionColor: 'black',
  textColor: {
    default: '#333',
    active: '#FFF'
  },
  weekdayColor: 'black',
  headerColor: 'black',
  floatingNav: {
    background: 'black',
    color: '#FFF',
    chevron: '#FFA726'
  }
}

const locale = {
  headerFormat: 'dddd, D MMM',
  locale: require('date-fns/locale/ru'),
  weekdays: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  weekStartsOn: 1
}

class CalendarHandler extends Component {
  render = () => {
    const { events } = this.props

    const today = new Date()
    const min = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate())
    const max = new Date(today.getFullYear() + 1, today.getMonth(), today.getDate())

    let dates = events && events.map(date => new Date(date.dates.start) )
    let datesFromToday = events && dates.filter( date => new Date(date) > new Date() )
    events && datesFromToday.unshift(new Date())
    return (
      <div className="calendar_events-handler-wrap">
        <InfiniteCalendar
          Component={withMultipleDates(Calendar)}
          // width={400}
          // width={'100%'}
          style={{ width: '100%'}}
          height={360}
          selected={events ? datesFromToday : [new Date()]}
          min={min}
          max={max}
          theme={calendarStyles}
          locale={locale}
          showTodayHelper={true}
          autoFocus={true}
          onSelect={ (date) => {
            console.log( 'click', date )
          }}
          interpolateSelection={defaultMultipleDateInterpolation}
          displayOptions={{
            showOverlay: false
          }}
        />
      </div>
    )
  }
}

const mapStateToProps = ( state ) => ({
  events: state.admin.calendar.data
})

export default connect(mapStateToProps, null)(CalendarHandler)