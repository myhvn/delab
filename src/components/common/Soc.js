import React from 'react';

import { Facebook, Instagram, Telegram } from './../../assets/img/svg/icons'

const Soc = () => (
  <div className="soc-icons">
    <a className="icon" href="https://instagram.com/delab_space?igshid=1cgxru5cq6bok">
      <Instagram className="instagram-icon" />
    </a>
    <a className="icon" href="https://t.me/delab_biz">
      <Telegram className="twitter-icon" />
    </a>
    <a className="icon" href="https://m.facebook.com/delab.space/">
      <Facebook className="facebook-icon" />
    </a>
  </div>
);

export default Soc;