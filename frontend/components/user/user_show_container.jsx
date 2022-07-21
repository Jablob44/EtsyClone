import { connect } from "react-redux";
import { fetchAuthListings } from "../../actions/session_actions";
import { deleteListing } from "../../actions/listing_actions";
import UserShow from "./user_show";

const mSTP = (state) => {
    return{
        currentUser: state.entities.users[state.session.id],
        authListings: Object.values(state.entities.listings)
    }
}

const mDTP = (dispatch, ownProps) => {
    return{
        fetchAuthListings: () => dispatch(fetchAuthListings(ownProps.match.params.userId)),
        deleteListing: (listingId) => dispatch(deleteListing(listingId))
    }
}

export default connect(mSTP, mDTP)(UserShow)