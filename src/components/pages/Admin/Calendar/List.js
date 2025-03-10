import React from 'react'
import { connect } from 'react-redux'
import { List as ListAnt } from 'antd';

import ListItem from "./ListItem"

import { dataSort } from '../../../../helpers/dataSort'
import { getCalendar, eriseCalendarData } from '../../../../actions'

class List extends React.Component {
  componentDidMount() {
    this.props.getList();
  }

  componentWillUnmount() {
    this.props.eriseData();
  }

  render() {
    const { loaded, data } = this.props.list

    dataSort()

    const sortByData = data && data.sortBy(
      o => new Date(o.dates.start)
    )

    return (
      <>
        <div>
          {
            loaded && Array.isArray(data) ?
              (
                <>
                  <ListAnt
                    itemLayout="vertical"
                    size="large"
                    pagination={{
                      onChange: page => {
                        console.log(page);
                      },
                      pageSize: 26,
                    }}
                    dataSource={sortByData}
                    renderItem={item => (
                      <ListItem {...item} />
                    )}
                  />
                </>
              ) :
              (
                <div>
                  Loading...
                </div>
              )
          }
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.admin.calendar
});

const mapDispatchToProps = (dispatch) => ({
  getList: () => {
    dispatch(getCalendar());
  },
  eriseData: () => {
    dispatch(eriseCalendarData());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(List);