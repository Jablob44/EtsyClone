import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
// import rootReducer from "../../reducers/root_reducer";
import Greeting from "./greeting";
console.log("hit container greeting")
const mSTP = ({ session, entities: { users } }) => {
    return{
        currentUser: users[session.id]
    }
}

const mDTP = (dispatch) => {
    return{
        logout: () => dispatch(logout())
    }
}

export default connect(mSTP, mDTP)(Greeting);