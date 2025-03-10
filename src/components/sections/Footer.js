import React from 'react';

import { HeaderLayout } from '../common/Layout';

const Footer = () => (
  <HeaderLayout.Consumer>
    {
      (value) => {
        return (
          <>
            {
              value.header && (
                <div className="footer">© Delab</div>
              )
            }
          </>
        )
      }
    }
  </HeaderLayout.Consumer>
);

export default Footer;