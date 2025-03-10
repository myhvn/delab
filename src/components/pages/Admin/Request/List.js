import React from 'react'
import { connect } from 'react-redux'
import { List as ListAnt } from 'antd';

import {
  getFeedback,
  eriseFeedback
} from '../../../../actions'

import ListItem from "./ListItem"

class List extends React.Component {
  componentDidMount() {
    this.props.getList();
  }

  componentWillUnmount() {
    this.props.eriseData();
  }

  render() {
    const { loaded, data } = this.props.list;
    return (
      <>
        <div>
          <div className="admin-post-title admin-post-title-main">Заявки пользователей</div>
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
                      pageSize: 6,
                    }}
                    dataSource={data}
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
  list: state.admin.feedback
});

const mapDispatchToProps = (dispatch) => ({
  getList: () => {
    dispatch(getFeedback());
  },
  eriseData: () => {
    dispatch(eriseFeedback());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(List);