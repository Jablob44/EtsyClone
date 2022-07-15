import { connect } from "react-redux";
import { getListing } from "../../util/listing_api_util";
import ListingShow from "./listing_show";
const mSTP = (state, ownProps) => {
    // console.log(state.entities.listings)
    return{
        listing: state.entities.listings[ownProps.match.params.listingId]
    }
}

const mDTP = (dispatch) => {
    return{
        getListing: (listingId) => dispatch(getListing(listingId))
    }
}

export default connect(mSTP, mDTP)(ListingShow)