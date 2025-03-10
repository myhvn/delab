import React from 'react';

const MiniCard = ({ img, title, subtitle, text, hr, width }) => {
  return (
    <div className="mini_card" width={width}>
      <div className="mini_card-content">
        <div className="mini_card-title">
          {
            title
          }
        </div>
        <div className="mini_card-subtitle">
          {subtitle}
        </div>
        {
          hr && <hr className="mini_card-hr" />
        }
        <div className="mini_card-text">
          {text}
        </div>
        {/* <div className="mini_card-link">{this.props.link}</div> */}
      </div>
      <div className="mini_card-img" style={{ backgroundImage: `url(${img})` }}></div>
    </div>
  );
}

MiniCard.defaultProps = {
  width: '100%',
  title: 'Title',
  subutitle: '',
  text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error recusandae perferendis sapiente, eveniet facilis, id quod, doloribus aliquam laudantium sunt nisi corporis porro dolorem quos minima eos magni. Asperiores, recusandae.',
  hr: false,
  link: 'ghg'
}
export default MiniCard;