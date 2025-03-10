import React from 'react';

const Card = ({ img, title, subtitle, bcgPosition, text, price, className, reverse, hr, link, imgClass }) => {
  return (
    <div className={`card ${className} ${reverse ? 'reverse' : ''}`}>
      <div className="card-content">
        <div className="card-title">
          { title }
        </div>
        {
          subtitle && <div className="card-subtitle">
          { subtitle }
        </div>
        }
        {
          hr && <div className="card-hr"></div>
        }
        <div className="card-text">
           { text }
        </div>
        { price &&
          <div className="card-price">
          Стоимость аренды – { price } грн./час
        </div>
        }
      </div>
      <div className={`card-img ${imgClass ? imgClass : ''}`} style={{ backgroundImage: `url(${img})`, backgroundPosition: `${bcgPosition}` }}></div>
    </div>
  );
}

Card.defaultProps = {
  title: 'Title',
  subtitle: '',
  text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error recusandae perferendis sapiente, eveniet facilis, id quod, doloribus aliquam laudantium sunt nisi corporis porro dolorem quos minima eos magni. Asperiores, recusandae.',
  hr: false
}
export default Card;