import { combineReducers } from 'redux';
import { weatherReducer, errorReducer } from './weatherReducers';

export default combineReducers({
    weather: weatherReducer,
    error: errorReducer
})