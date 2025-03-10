import React from 'react';

export const Line = ({ type, size }) => (
  <div className={`plcaholder__line ${type} ${size}`}></div>
);

Line.defaultProps = {
  type: 'regular',
  size: 'full'
}


export default Line;