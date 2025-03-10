export const TOGGLE_POPUP = 'TOGGLE_POPUP'

export const togglePopup = ( params ) => (dispatch, getState) => {
  if( params === undefined ){
    dispatch({
      type: TOGGLE_POPUP,
      data: null,
      target: ''
    })
  } else {
    const {data, target} = params;
    dispatch({
      type: TOGGLE_POPUP,
      data,
      target
    });
  }
};