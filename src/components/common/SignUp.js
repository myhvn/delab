import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Form from './Form'

class SignUp extends Component {
  state = {
    active: false
  }

  handlerActive = () => {
    this.setState({ active: !this.state.active })
  }

  isActive = () => {
    this.setState({ s_active: true })
  }

  render() {
    return (
      <div
        className={`sign_up ${this.state.active ? 'active' : ''}`}
        // onMouseLeave={ !isMobile() ? this.handlerActive : null }
      >
        {
          this.state.active &&
            <div
              className="sign_up-active"
              data-aos='flip-left'
              data-aos-duration="500"
            >
              <div className="sign_up-title">{this.props.title}</div>
              <Form setActive={this.isActive}/>
              <button className="btn-cancel" onClick={this.handlerActive}>x</button>
            </div>
        }
        {
          !this.state.active &&
            <div
              className="sign_up-primary"
              data-aos='flip-right'
              data-aos-duration="500"
            >
              <div className="sign_up-title">{this.props.title}</div>
              <div className="sign_up-primary-text">
                <div className="sign_up-primary-call">{this.props.text}</div>
                <div className="sign_up-primary-link-wrap">
                <Link
                  className="sign_up-primary-call-link"
                  to={{pathname: `/contacts`, fromForm: true}}
                >
                  Позвонить
                </Link>
                  <button className="sign_up-primary-call-link" onClick={ this.handlerActive }>
                    Онлайн
                  </button>
                </div>

              </div>
            </div>
        }
      </div>
    );
  }
}

SignUp.defaultProps = {
  title: 'Консультация специалиста в зоне «Здоровье»',
  text: 'Выберите вид записи на услугу :',
  signup: 'Записаться на консультацию'
}

export default SignUp;