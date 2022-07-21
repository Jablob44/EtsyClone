import { connect } from "react-redux";
import ListingForm from "./listing_form";
import { createListing } from "../../actions/listing_actions";
console.log("hit listing form container")
const mSTP = ({ session, entities: { users } }) => {
    return{
        currentUser: users[session.id],
        listing: {title: "", body: "", price: ""},
        formType: "Make listing"
    }
}

const mDTP = (dispatch) => {
    return{
        action: (listing) => dispatch(createListing(listing))
    }
}

export default connect(mSTP, mDTP)(ListingForm);