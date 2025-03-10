import React from 'react'
import { connect } from 'react-redux';

const SliderPopup = (props) => {
    return(
        <div className="slider-popup">
            <h1>{props.popup.data.title}</h1>
            <img src={props.popup.data.img} alt="img" />
        </div>
    )
}

const mapStateToProps = ( state ) => ({
    popup: state.popup
})


export default connect(mapStateToProps, null)(SliderPopup);