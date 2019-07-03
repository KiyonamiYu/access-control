import { combineReducers } from 'redux-immutable';
import { leftNavReducer } from '../components/LeftNav/store';
import { headerReducer } from '../components/Header/store';

export default combineReducers({
    leftNav: leftNavReducer,
    header: headerReducer
});