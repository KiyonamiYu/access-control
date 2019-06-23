import { constants } from './';
import axios from 'axios';


const setMenuListAction = (data) => ({
    type: constants.SET_MENU_LIST,
    data
})

export const getMenuListAction = () => (dispatch) => {
    axios.get('/api/get/menuList.json').then((res) => {
        dispatch(setMenuListAction(res.data));
    }).catch(() => {
        console.log("error getMenuListData");
    });
};
