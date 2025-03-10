import React, { Component } from 'react'

import fitoNull from './../../assets/img/cards/fito.jpg'

import isMobile from '../../helpers/isMobile'

import leftArr from '../../assets/img/svg/left-arrow.svg'

export class FitoSlider extends Component {
  state = {
    children: isMobile() ? [...this.props.children] : [...this.props.children, ...this.props.children],
    currentItem: null,
    position: 0,
    width: 0,
    autoscroll: false
  }

  itemWidth = 160
  listParent = React.createRef()
  listItems = React.createRef()
  pos = 0
  startBK = 0
  endBK = 0

  componentDidMount = () => {
    let width = this.props.children.length * this.itemWidth

    this.setState({
      width: isMobile() ? width : width * 2
    })

    this.posMiddle = -width
    this.startBK = -width - width
    this.endBK = -width + width
    this.pos = -width
  }

  moveLeft = (e) => {
    this.timer = setInterval(() => {
      this.listItems.current.style.transform = `translate3D(${this.pos}px, 0px, 0px)`
      this.pos -= 1

      if (this.pos === Math.floor(this.startBK / this.itemWidth * 10.312 * 10)){
        this.pos = Math.floor(this.startBK / this.itemWidth * 2.3437 * 10)
      }
    }, 3)
  }

  moveRight = (e) => {
    this.timer = setInterval( () => {
      this.listItems.current.style.transform = `translate3D(${this.pos}px, 0px, 0px)`
      this.pos+=1

      if (this.pos === Math.floor(this.startBK / this.itemWidth * 2.3437 * 10)) {
        this.pos = Math.floor(this.startBK / this.itemWidth * 10.312 * 10)
      }
    }, 3)
  }

  stopMove = () => {
    clearInterval( this.timer )
  }

  showItem = ( el ) => ( e ) => {
    this.setState({ currentItem: el })
  }

  render() {
    return (
      <div className="fito_slider">
        <div className="fito_slider-container">
          <div className="fito_slider-container-wrap">
            <div className="fito_slider-container-title">
              {
                this.state.currentItem ?
                  this.state.currentItem.title :
                  'Фитокафе'
              }
            </div>
            <div className="fito_slider-container-text subtitle">
              {
                this.state.currentItem ?
                  this.state.currentItem.subtitle :
                  'Мы знаем, насколько важно заботиться о себе и о своём самочувствии!'
              }
            </div>
            <br/>
            <div className="fito_slider-container-text">
              {
                this.state.currentItem ?
                  this.state.currentItem.text :
                  'Поэтому приглашаем вас в фитокафе! Здесь вы сможете попробовать полезные десерты без сахара, овощные и фруктовые смузи, которые обеспечат вам прилив энергии на целый день, а также протеиновые коктейли,  идеально подходящие тем, кто хочет иметь стройную фигуру!'
              }
            </div>
          </div>
          <div className="fito_slider-container-img" style={{
            backgroundImage: `url(${this.state.currentItem ? this.state.currentItem.img : fitoNull})`
            }}>
          </div>
        </div>
        <div className="fito_slider-list">
          {
            !isMobile() ? (
              <div className="slider-controllers">
                <nav className="nav-fillpath">
                  <button
                    className="prev"
                    onMouseEnter={this.moveLeft}
                    onMouseLeave={this.stopMove}
                  >
                    <span className="icon-wrap"></span>
                  </button>
                  <button
                    className="next"
                    onMouseEnter={this.moveRight}
                    onMouseLeave={this.stopMove}
                  >
                    <span className="icon-wrap"></span>
                  </button>
                </nav>
              </div>
            ) : (
              <div className="slider-controllers mobile">
                <nav className="nav-fillpath-mobile">

                    <span className="icon-wrap left">
                      <img src={leftArr} alt="l"/>
                    </span>

                    <span className="icon-wrap right">
                      <img src={leftArr} alt="r"/>
                    </span>

                </nav>
              </div>
            )
          }

          <div
            className={
              isMobile() ? 'fito_slider-list-items-wrap mobile' : "fito_slider-list-items-wrap"
            }
            ref={this.listParent}
          >
            <div
              className="fito_slider-list-items"
              ref={this.listItems}
              style={{
                width: `${this.state.width}px`
              }}
              >
              {
                this.state.children &&
                this.state.children.map((fitoSliderItem, key) => (
                  <div
                    className="fito_slider-list-item"
                    key={key}
                    onClick={this.showItem(fitoSliderItem.props)}
                  >
                    {fitoSliderItem}
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export const FitoSliderItem = ({ title, button, img }) => (
  <div className="slider-inner-item" style={{ backgroundImage: `URL(${img})` }}></div>
)