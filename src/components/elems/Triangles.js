import React, { Component } from 'react'
import { connect } from 'react-redux'

import { togglePopup } from '../../actions'

import smile from '../../assets/img/triangles/smile.jpg'
import tower from '../../assets/img/triangles/tower.jpg'
import work from '../../assets/img/triangles/work.jpg'
import walk from '../../assets/img/triangles/walk.jpg'
import amployers from '../../assets/img/triangles/amployers.jpg'
import room from '../../assets/img/triangles/room.jpg'
import fruits from '../../assets/img/triangles/fruits.jpg'
import model from '../../assets/img/triangles/model.jpg'
import prost from '../../assets/img/triangles/prost.jpg'


class Triangles extends Component {
  state = {
    popupIsActive: false
  }

  toShow = (img, title) => e => {
    this.props.togglePopup({
      target: 'slider',
      data: {img: img, title: title}
    })
  }

  render() {
    return (
      <>
      <div className="triangle-wrap">
        <div className="container">
        <div className="triangles">
          <div className="row row1">
            <div
              onClick={this.toShow(smile, "Улыбайтесь :)")}
              className='item el1 left'
              data-inf='smile'
              style={{ backgroundImage: `url(${smile})`}}
            ></div>
            <div
              onClick={this.toShow(tower, "Вы способны на большее!")}
              className='item el2 right'
              data-inf='tower'
              style={{ backgroundImage: `url(${tower})`}}
            ></div>
            <div
              onClick={this.toShow(work, "Трудитесь - это зделает вас лучше!")}
              className='item el3 left'
              data-inf='work'
              style={{ backgroundImage: `url(${work})`}}
            ></div>
          </div>
          <div className="row row2">
            <div
              onClick={this.toShow(walk, "Будьте в эпицентре событий!")}
              className='item el4 right'
              data-inf='walk'
              style={{ backgroundImage: `url(${walk})`}}
              ></div>
            <div
              onClick={this.toShow(amployers, "Принимайте решения совместно!")}
              className='item el5 left'
              data-inf='amployers'
              style={{ backgroundImage: `url(${amployers})`}}
            ></div>
            <div
              onClick={this.toShow(room, "Работайте там, где хочется проводить время!")}
              className='item el6 right'
              data-inf='room'
              style={{ backgroundImage: `url(${room})`}}
            ></div>
          </div>
          <div className="row row3">
            <div
              onClick={this.toShow(fruits, "Здоровое питание повышает ваш ресурс!")}
              className='item el7 left'
              data-inf='fruits'
              style={{ backgroundImage: `url(${fruits})`}}
            ></div>
            <div
              onClick={this.toShow(model, "Следите за собой и будьте красивы!")}
              className='item el8 right'
              data-inf='model'
              style={{ backgroundImage: `url(${model})`}}
            ></div>
            <div
              onClick={this.toShow(prost, "Будьте креативны!")}
              className='item el9 left'
              data-inf='prost'
              style={{ backgroundImage: `url(${prost})`}}
            ></div>
          </div>
        </div>
        </div>
      </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  showPopup: state.popup.showPopup,
  target: state.popup.target
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  togglePopup: ( data ) => {
    dispatch( togglePopup( data ) );
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Triangles);