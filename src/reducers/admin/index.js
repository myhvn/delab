import { combineReducers } from 'redux';

import calendar from './calendar';
import feedback from './feedback';
import galeries from './galeries';

const adminReducer = combineReducers({
    calendar,
    feedback,
    galeries,
})

export default adminReducer;