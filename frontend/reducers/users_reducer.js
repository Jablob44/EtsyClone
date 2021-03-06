import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    // let nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            console.log("sign up action: ", action)
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser })
        default:
            return state;
    }
}

export default usersReducer;