import React from 'react';

const FlameBtn = ({ text }) => (
  <div className="frame">
    <div className="button">
      <span>{ text }</span>
      <svg>
        <polyline className="o1" points="0 0, 150 0, 150 55, 0 55, 0 0"></polyline>
        <polyline className="o2" points="0 0, 150 0, 150 55, 0 55, 0 0"></polyline>
      </svg>
    </div>

  </div>
);

FlameBtn.defaultProps = {
  text: 'click'
}

export default FlameBtn;