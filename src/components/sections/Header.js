import React from 'react';

import HeaderNav from "./HeaderNav";
import Soc from "./../common/Soc";
import { HeaderLayout } from '../common/Layout';


const Header = () => (
  <HeaderLayout.Consumer>
    {
      (value) => {
        return (
          <>
            {
              value.header && (
                <div className="header">
                  <div className="container">
                    <Soc />
                    <HeaderNav />
                  </div>
                </div>
              )
            }
          </>
        )
      }
    }
  </HeaderLayout.Consumer>
);

export default Header;
