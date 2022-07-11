import { combineReducers } from "redux";

import entities from "./entities_reducer";
import errors from "./errors_reducer";
import session from "./session_reducer";
import sessionErrors from "./session_errors_reducer";
// import users from "./users_reducer";
const rootReducer = combineReducers({
    entities: entities,
    errors: errors, 
    session: session,
    sessionErrors: sessionErrors
})

export default rootReducer