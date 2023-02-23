const initialState = {
    schedules: []
}

export default function rootReducer(state = initialState, action){
    switch(action.type){
        case 'SCHEDULES':
            return{
                ...state,
                schedules: action.payload
            };
        default:
            return state;
    }
}