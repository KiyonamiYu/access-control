import { fromJS } from 'immutable';
import { constants } from './';

const defaultState = fromJS({
    username: "your father",
    nowTime: new Date().toLocaleString(),
    weather: '',
})

export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.UPDATE_TIME:
            return state.set('nowTime', new Date().toLocaleString());
        case constants.SET_WEATHER:
            return state.set('weather', action.weather);
        default:
            return state;
    }
}