import { fromJS } from 'immutable';
import { constants } from './';

const defaultState = fromJS({
    menuList: [],
});

export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.SET_MENU_LIST:
            return state.set('menuList', fromJS(action.data));
        default:
            return state;
    }
};