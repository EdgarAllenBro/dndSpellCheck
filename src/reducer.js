const initialState = {
    userName:'',
    userId:0
}

function userReducer(state = initialState, action){
    switch(action.type){
        case 'login':
            return { ...state, userName: action.payload.userName, userId:action.payload.userId};
            case 'logout':
                return {initialState};
            default: return state
    }
}

export default userReducer