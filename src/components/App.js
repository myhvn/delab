import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import PrivateRoute from './common/privateRoute'
import Routes from './RootRoutes'
import Layout from '../components/common/Layout'

import './../assets/styles/main.sass'

class AnimatedRoute extends Component {
  componentDidMount () {
    !this.props.location.fromForm &&
      setTimeout(() => window.scrollTo({top: 0, behavior: "smooth"}), 150)
  }

  render() {
    const routeData = this.props

    return(
        <div className="animation-for-routes">
            {
              routeData.private === true ?
              (
                <PrivateRoute {...routeData}/>
              ) :
              (
                <Route {...routeData} />
              )
            }
        </div>
      )
    }
}

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch key={this.props.location.key}>
            {
              Routes.map( (route, index) => {
                return(
                  <AnimatedRoute {...route} key={index} />
                )
              })
            }
        </Switch>
      </Layout>
    )
  }
}

export default App
