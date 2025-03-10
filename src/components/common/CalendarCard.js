import React from 'react';

const CalendarCard = ({ img, title, subtitle, text, reverse, hr, link }) => {

  return (
    <div className={`card ${reverse ? 'reverse' : ''}`}>
      <div className="card-content">
        <div className="card-title">
          {title}
        </div>
        {
          subtitle && <div className="card-subtitle">
            {subtitle}
          </div>
        }
        {
          hr && <div className="card-hr"></div>
        }
        <div className="card-text">
          {text}
        </div>
      </div>
      <div className="card-img" style={{ backgroundImage: `url(${img})` }}></div>
    </div>
  );
}

Card.defaultProps = {
  title: 'Title',
  subtitle: '',
  text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error recusandae perferendis sapiente, eveniet facilis, id quod, doloribus aliquam laudantium sunt nisi corporis porro dolorem quos minima eos magni. Asperiores, recusandae.',
  hr: false
}

export default CalendarCard;