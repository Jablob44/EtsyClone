import { connect } from "react-redux";
import UserDropdown from "./userDropdown";
const mSTP = ({session, entities:{users}}) => {
    return{
        currentUser: users[session.id]
    }
}

export default connect(mSTP)(UserDropdown)