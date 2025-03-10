import {
  TOGGLE_POPUP
} from '../actions';

const initialState = {
  showPopup: false,
  target: '',
  data: null
};

function popup(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_POPUP:
      return {
        ...state,
        showPopup: !state.showPopup,
        target: action.target,
        data: action.data
      }
    default:
      return state;
  }
}

export default popup;