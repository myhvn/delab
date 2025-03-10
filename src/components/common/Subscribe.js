import React from 'react';

const Subscribe = (title, placeholder, btn, className) => {
  return (
    <form className={`subscribe ${className ? className : ''}`}>
      <div className="subscribe-title">{title}</div>
      <input type="text" placeholder={placeholder}/>
      <button type="submit">{btn}</button>
    </form>
  )
}

Subscribe.defaultProps = {
  title: 'Подпишитесь на рассылку',
  placeholder: 'Укажите электронную почту',
  btn: 'Подписаться'
}

export default Subscribe;