
export const weatherReducer = (state = {}, action) => {
    switch(action.type){
        case 'SEARCH_WEATHER':
            return action.payload
        default:
            return state
    }
}

export const errorReducer = (state = null, action) => {
    switch(action.type){
        case 'SEARCH_WEATHER_ERROR':
            return action.payload
        default:
            return state
    }
}