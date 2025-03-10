import React from 'react'
import { Typography } from 'antd'

import List from './GaleryList'

const { Title } = Typography

class Galery extends React.Component {
  state = {
    title: 'TITLE'
  }
  handleChange = (str) => {
    this.setState({
      title: str
    })
  }
  render() {
    const { title } = this.state
    return (
      <div className="gallery-item">
        <Title editable={{onChange: this.handleChange}}>
          { title }
        </Title>
        <List/>
      </div>
    );
  }
}

export default Galery;