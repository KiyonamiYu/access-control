import { constants } from './';
import netRequest from '../../../utils/netRequest';

const setWeatherAction = (weather) => ({
    type: constants.SET_WEATHER,
    weather
})

export const updateTimeAction = () => ({
    type: constants.UPDATE_TIME
});

export const getWeatherDataAction = () => (dispatch) => {
    let key = '03970906697c67b03b1592fbfe397847';
    let city = 330000;
    netRequest.jsonp({
        url: 'https://restapi.amap.com/v3/weather/weatherInfo?city=' + city + '&key=' + key,
    }).then((res) => {
        dispatch(setWeatherAction(res.lives[0].weather));
    })
}