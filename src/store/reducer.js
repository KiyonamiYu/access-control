import { combineReducers } from 'redux-immutable';
import { reducer as leftNavReducer } from '../components/LeftNav/store';

export default combineReducers({
    leftNav: leftNavReducer,
});