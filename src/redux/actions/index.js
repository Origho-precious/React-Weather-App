import axios from '../../api'

export const searchWeather = (term) => async (dispatch) => {
    const whereId = await axios.get(`/search/?query=${term}`)

    let response;

    if(whereId.data.length){
        response = await axios.get(`/${whereId.data[0].woeid}`);
        dispatch({
            type: 'SEARCH_WEATHER',
            payload: response.data
        })
    }else{
        dispatch({
            type: 'SEARCH_WEATHER_ERROR',
            payload: 'Not found!'
        })
    }
}