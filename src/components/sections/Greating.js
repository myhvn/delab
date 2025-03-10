import React from 'react';
import { NavLink } from "react-router-dom";

const Greating = () => (
  <div className="greating-wrap">
    <div className="greating">
      <div className="container">
        <div className="greating-left">
          <div className="greating-left-title">DELAB</div>
          <div className="greating-left-text">Лаборатория качественной жизни</div>
        </div>
        <div className="greating-right">
          <div className="greating-right-title">Зона твоей красоты и здоровья</div>
          <div className="greating-right-hr"></div>
          <div className="greating-right-link hover-link">
            <NavLink to="/calendar">
              Узнать больше >
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Greating;
