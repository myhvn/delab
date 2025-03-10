import React from 'react'
import { connect } from 'react-redux'
import { Layout, Menu, Icon } from 'antd'

import { logout } from '../../../actions'
import { NavLink } from 'react-router-dom'

import logoWhite from '../../../assets/img/favicon-white.png';

const { Header, Sider, Content } = Layout

export const HeaderContext = React.createContext();

class BaseAdminLayout extends React.Component {
  state = {
    collapsed: true,
    buttons: null
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  setButtons = ( component ) => {
    this.setState({
      buttons: component
    })
  }

  render() {
    const Buttons = this.state.buttons;
    return (
      <Layout>
        <HeaderContext.Provider value={{
            buttons: this.state.buttons,
            setButtons: this.setButtons
        }}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="admin-logo-wrap">
            <a href='/' >
              <div className="logo" >
                <img src={logoWhite} alt="logo"/>
              </div>
            </a>
          </div>
          <Menu
            theme="dark"
            mode="inline"
          >
            <Menu.Item key="1">
              <NavLink
                exact
                to="/admin/calendar"
              >
                <Icon type="read"/>
                <span>Календарь</span>
              </NavLink>
            </Menu.Item>

            <Menu.Item key="2">
              <NavLink
                exact
                to="/admin/galery"
              >
                <Icon type="picture"/>
                <span>Галерея</span>
              </NavLink>
            </Menu.Item>

            <Menu.Item key="3">
              <NavLink
                exact
                to="/admin/feedback"
              >
                  <Icon type="bulb" />
                <span>Заявки</span>
              </NavLink>
            </Menu.Item>

            <Menu.Item key="4" onClick={this.props.logout}>
              <Icon type="logout" />
              <span>Выход</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className="admin-header">
            <div className="handle-toggler">
              <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
            </div>
            {
              this.state.buttons !== null && <Buttons />
            }
          </Header>
          <Content
            style={{
              minHeight: 280
            }}
          >
            { this.props.children }
          </Content>
        </Layout>
        </HeaderContext.Provider>
      </Layout>
    )
  }
}

const mapDispatchToProps = ( dispatch ) => ({
  logout: () => dispatch( logout() )
})

export default connect(null, mapDispatchToProps)(BaseAdminLayout)