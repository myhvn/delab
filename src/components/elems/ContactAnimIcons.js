import React from 'react';
import { message } from 'antd';

const success = (subj) => (e) => {
  message.success(`${subj} скопирован!`);
};

export const Telephone = ({ tel }) => (
    <div className="contact_icons-smart-phone">
      <div
        className="smart-phone"
        onClick={success('Телефон')}
      >
        <span
          aria-label="mobile"
          role="img">📱</span>
        <a href={`tel:${tel}`}>{ tel }</a>
      </div>
    </div>
);

export const Email = () => (
  <div className="contact_icons-email">
    <div className="letter-image">
      <div className="animated-mail">
        <div className="back-fold"></div>
        <div className="letter">
          <div className="letter-border"></div>
          <div className="letter-title"></div>
          <div className="letter-context"></div>
          <div className="letter-stamp">
            <div className="letter-stamp-inner"></div>
          </div>
        </div>
        <div className="top-fold"></div>
        <div className="body"></div>
        <div className="left-fold"></div>
      </div>
    </div>
    <div className="label" onClick={success("Email")}>delabspace@gmail.com</div>
  </div>
);

