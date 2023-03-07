const initialState = {
    schedules: [],
    user: {}
}

export default function rootReducer(state = initialState, action){
    switch(action.type){
        case 'SCHEDULES':
            return{
                ...state,
                schedules: action.payload
            };
        case 'LOG_IN':
            return{
                ...state,
                user: action.payload
            };
        default:
            return state;
    }
}