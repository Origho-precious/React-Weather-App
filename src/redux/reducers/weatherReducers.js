
export const weatherReducer = (state = {}, action) => {
    switch(action.type){
        case 'SEARCH_WEATHER':
            return action.payload
        default:
            return state
    }
}