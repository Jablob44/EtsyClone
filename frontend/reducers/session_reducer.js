import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";

const loggedOut = {
    id: null
}

const sessionReducer = (state = loggedOut, action) => {
    Object.freeze(state);
    // let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            console.log("action: ", action)
            return {id: action.currentUser.id};
        case LOGOUT_CURRENT_USER:
            return loggedOut;


        default:
            return state;
    }
}

export default sessionReducer