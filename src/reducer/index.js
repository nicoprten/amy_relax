const initialState = {
    user: JSON.parse(localStorage.getItem('user')),
    reservation: {
        massage: "default",
        duration: "default",
        price: "default",
        day: "default",
        hour: "default",
        client: "default"
    }
}

export default function rootReducer(state = initialState, action){
    switch(action.type){
        case 'LOG_IN':
            return{
                ...state,
                user: action.payload
            };
        case 'LOG_OUT':
            return{
                ...state,
                user: null
            };
        case 'CHANGE_RESERVATION':
            console.log(action.payload)
            return{
                ...state,
                reservation: action.payload
            };
        default:
            return state;
    }
}