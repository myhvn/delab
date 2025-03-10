import React from 'react';

import Header from "../sections/Header";
import Footer from "../sections/Footer";
import PopupController from './PopupController';

export const HeaderLayout = React.createContext( true );

class Layout extends React.Component {
  state = {
    header: true
  }

  hideHeader = () => {
    this.setState({
      header: false
    })
  }

  render = () => {
    const { children } = this.props;

    return (
      <HeaderLayout.Provider value={{
        header: this.state.header,
        hideHeader: this.hideHeader
      }}>
        <Header />
        <PopupController />
        <div className="content">
          <div className="content-bcg"></div>
          {children}
        </div>
        <Footer value={{
          header: this.state.header,
          hideHeader: this.hideHeader
        }}/>
      </HeaderLayout.Provider>
    )
  }
}

export default Layout;

