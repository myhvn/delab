import React from 'react'
import { connect } from 'react-redux'

import { togglePopup } from '../../actions';
import sliderPopup from './SliderPopup';

const Popups = [
  {
    name: 'slider',
    component: sliderPopup
  }
]

const PopupController = ({ showPopup, target, togglePopup }) => {

  let InnerData = null;

  Popups.forEach( item => {
    if( item.name === target){
      InnerData = item.component;
    }
  })

  return(
      <>
        {
          showPopup && (
            <div className="popup">
              <div className="popup__wrapper" onClick={togglePopup}></div>
              <div className="popup__window">
                {
                  <InnerData />
                }
              </div>
            </div>
          )
        }
      </>
  );
}

/*
  Redux
*/
const mapStateToProps = (state) => ({
  showPopup: state.popup.showPopup,
  target: state.popup.target
})

const mapDispatchToProps =  (dispatch, ownProps) => ({
  togglePopup: (e) => {
    dispatch( togglePopup() );
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(PopupController)




