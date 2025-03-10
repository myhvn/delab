import React from 'react';

const NotFound = () => {
  let costumArr = []
  for (let i = 0; i < 40; i++) {
    costumArr.push('')
  }
  return (
    <>
      <div className="not-found">
        <ul id="ui">
          {
            costumArr.map((e, index) => <div className="text" key={index}>PAGE NOT FOUND 404 :)</div>)
          }
        </ul>
      </div>
    </>
  )
};

export default NotFound;