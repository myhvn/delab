import React from 'react';

import {
  Line,
  Circle,
  Block
} from '../parts';

export const CalendarPreloader = () => (
  <div className="calendar__placeholder">
      <Circle/>
      <Line type="heading" />
      <Line type="regular" size="full" />
      <Line type="regular" size="full" />
      <Line type="regular" size="half" />
      <Line type="regular" size="full" />
      <Line type="regular" size="short" />
      <Block/>
  </div>
);

export default CalendarPreloader;