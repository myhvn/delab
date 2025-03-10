import React, { Component } from 'react';

import WrapGoogleMap from '../elems/GoogleMap'

import Soc from './../common/Soc'
import {Telephone, Email} from '../elems/ContactAnimIcons'

class Contacts extends Component {
  render() {
    return (
      <div className="contacts" id="contacts">
        <div className="contacts-container">
          <div className="contacts-title">Контакты</div>
          <div className="contacts-address">г.Киев, улица Михаила Драгомирова, 17. </div>
          <div className="contacts-address">
            <Email/>
          </div>
          <div className="contacts-tel">
            <Telephone tel='095-114-99-63'/>
          </div>
          <Soc/>
        </div>
        <WrapGoogleMap />
      </div>
    );
  }
}

export default Contacts;