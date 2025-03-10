import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


import isMobile from '../../helpers/isMobile';
import Routes from './../RootRoutes'

class HeaderNav extends Component {
  state = {
    isOpen: true,
    animationClass: ''
  }

  toggleClass = () => this.setState( { isOpen: !this.state.isOpen })

  closeMenu = () => this.setState( { isOpen: false })

  render() {
    return (
      <>
        <div className={`navigation`}>
          {
            Routes.map((route, index) => {
              if (route.showInMenu){
                return(
                  <div key={index} onClick={this.closeMenu}>
                    {
                      route.path !== undefined && (
                        <NavLink
                          className="nav-link"
                          exact={route.exact}
                          key={index}
                          to={route.path}
                        >{route.title}</NavLink>
                      )
                    }
                  </div>
                )
              } else {
                return null
              }
            })
          }
        </div>
        {
          isMobile() && (
            <>
              <div className={`navigation-mobile ${this.state.isOpen ? 'rolledup fadeInRight' : 'rolledup fadeInLeft'}`}>
                {
                  Routes.map((route, index) => {
                    if (route.showInMenu) {
                      return (
                        <div key={index} onClick={this.closeMenu}>
                          {
                            route.path !== undefined && (
                              <NavLink
                                className="nav-link"
                                exact={route.exact}
                                key={index}
                                to={route.path}
                              >{route.title}</NavLink>
                            )
                          }
                        </div>
                      )
                    } else {
                      return null
                    }
                  })
                }
              </div>
              <div
                onClick={this.toggleClass}
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <div style={{ color: '#999999', fontFamily: 'Branded', marginRight: '20px', fontSize: '18px' }}>MENU</div>
                <div
                  id="nav-icon1"
                  className={this.state.isOpen ? 'header-humburger open' : 'header-humburger'}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </>
          )
        }

      </>
    );
  }
}

export default HeaderNav;