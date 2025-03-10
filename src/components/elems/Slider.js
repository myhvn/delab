import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import isMobile from '../../helpers/isMobile';

export class Slider extends Component {
  state = {
    activeSlide: 0,
    countItems: this.props.children.length,
    children: this.props.children.map(child => child.props),
    dots: [],
    init: false
  }

  sliderWrap = React.createRef();

  componentDidMount () {

    if( !isMobile() ){
      this.sliderWrap.current.style.transition = `.5s`
      this.props.autoplay && this.autoPlay()
    }
    this.props.dots && this.addDots()
  }

  componentWillUnmount(){
    this.timerStop();
  }

  getPrevSlide = () => {
    const numPrevSlide = (this.state.activeSlide - 1) <= 0
                            ? this.state.countItems - 1
                            : this.state.activeSlide - 1

    const prevSlide = this.props.children[numPrevSlide].props

    return prevSlide
  }

  getNextSlide = () => {
    const numNextSlide = (this.state.activeSlide + 1) >= this.state.countItems
                            ? 0
                            : this.state.activeSlide + 1

    const nextSlide = this.props.children[ numNextSlide ].props;

    return nextSlide
  }

  moveToRight = () => {
    let { activeSlide, countItems } = this.state

    if ( activeSlide < countItems - 1 ) {
      this.setState( {
        activeSlide: activeSlide + 1,
        dots: this.renderActiveDot( activeSlide + 1 )
      } )
    } else {
      this.setState( {
        activeSlide: 0,
        dots: this.renderActiveDot(0)
      } )
    }
  }

  moveToLeft = () => {
    let { activeSlide, countItems } = this.state

    if ( !activeSlide <= 0 ) {
      this.setState({
        activeSlide: activeSlide - 1,
        dots: this.renderActiveDot(activeSlide - 1)
      })
    } else {
      this.setState( {
        activeSlide: countItems - 1,
        dots: this.renderActiveDot(countItems - 1)
      } )
    }
  }

  addDots = () => {
    let arr = []
    if (this.props.dots) {
      for (let x = 0; x < this.state.countItems; x++) {
        arr.push({
          index: this.props.children[x].props._id,
          isActive: x === 0 ? true : false,
          img: this.props.children[x].props.img
        })
      }
      return this.setState({ dots: arr })
    }
  }

  renderActiveDot = (index) => {
    let arr = this.state.dots.map(dot => {
      if (Number.parseInt(dot.index) === Number.parseInt(index) ) {
        dot.isActive = true
      } else {
        dot.isActive = false
      }
      return dot
    })
    return arr
  }

  navDots = (index) => (e) => {
    this.setState({
      activeSlide: Number.parseInt(index),
      dots: this.renderActiveDot(index)
    })
  }

  autoPlay = () => {
    if ( this.props.autoplay ) {
      this.timer = setInterval(() => this.moveToRight(), this.props.speed)
    }
  }

  timerStop = () => {
    clearInterval( this.timer );
  }

  touchStart = (e) => {
    this.touchStartPoint = e.targetTouches[0].clientX;
  }

  touchMove = (e) => {
    this.moveDirection = null;
    let movePointX = e.targetTouches[0].clientX;
    let diff = this.touchStartPoint - movePointX;
    let Node = this.sliderWrap.current;
        Node.style.transition = `unset`;
        Node.style.right = `calc( ( 100vw * ${this.state.activeSlide} ) + ${0 + diff}px`;

    if (diff < 0 ){
      this.moveDirection = 'left';
    }

    if (diff > 0 ){
      this.moveDirection = 'right';
    }
  }

  touchEnd = (e) => {
    let Node = this.sliderWrap.current;
        Node.style.rigth = `0px`;
        Node.style.transition = `.5s`

    if( this.moveDirection === 'right'){
      this.moveToRight();
    }

    if( this.moveDirection === 'left'){
      this.moveToLeft();
    }
  }

  render() {
    return (
      <div className="slider" >
        <div className="slider-view"
          onTouchStart={this.touchStart}
          onTouchMove={this.touchMove}
          onTouchEnd={this.touchEnd}
          ref={this.sliderWrap}
          style={{ right: `calc(100vw * ${ this.state.activeSlide } )` }}>
          { this.props.children &&
            this.props.children.map( (sliderItem, key) => (
              <div className="slider-item" key={key}>
                {sliderItem}
              </div>
            ))
          }
        </div>
        {
          !isMobile() &&
          (
            <div className="slider-controllers">
              <nav className="nav-fillpath">
                <button
                  className="prev"
                  onClick={this.moveToLeft}
                  onMouseEnter={this.timerStop}
                  onMouseLeave={this.autoPlay}
                >
                  <span className="icon-wrap"></span>
                  <h3><strong>{this.getPrevSlide().title}</strong> подробнее <img src={this.getPrevSlide().img} alt="" /></h3>
                </button>
                <button
                  className="next"
                  onClick={this.moveToRight}
                  onMouseEnter={this.timerStop}
                  onMouseLeave={this.autoPlay}
                >
                  <span className="icon-wrap"></span>
                  <h3><strong>{this.getNextSlide().title}</strong> подробнее <img src={this.getNextSlide().img} alt="" /></h3>
                </button>
              </nav>
            </div>
          )

        }


        <div className="slider-dots" >
          <ul className="dots">
            {
              this.state.dots.map(dot => (
                <li
                  key={dot.index}
                  onClick={ this.navDots(dot.index) }
                  className={dot.isActive ? 'active' : ''}
                  onMouseEnter={this.timerStop}
                  onMouseLeave={this.autoPlay }
                >
                  <button></button>
                  <div className="dots-img">
                    <img src={dot.img} alt=""/>
                  </div>
                </li>
                )
              )
            }
          </ul>
        </div>
      </div>
    );
  }
}

export const SliderItem = ({ title, button, img, link, timerStop, autoPlay }) => (
  <div className="slider-inner-item" style={{ backgroundImage: `URL(${img})`}}>
    <h2 className="slider-title">{title}</h2>
    <button
      className="slider-link hover-link"
      // onMouseEnter={timerStop}
      // onMouseLeave={autoPlay}
    >
      <NavLink to={`/${link}/`}>
        {button}
      </NavLink>
    </button>
  </div>
);

Slider.defaultProps = {
  dots: false,
  autoplay: false,
  speed: 3500
}

SliderItem.defaultProps = {
  button: "узнать больше",
  link: '/',
  active: false
}

export default Slider;