import { connect } from "react-redux";
import ListingForm from "./listing_form";
import { updateListing, getListing } from "../../actions/listing_actions";
import { fetchAuthListings } from "../../actions/session_actions";
import React from "react";
class ListingEditForm extends React.Component{
    componentDidMount(){
        this.props.getListing();
    }

    render(){
        const listing = this.props.listing
        const formType = this.props.formType
        const action = this.props.action
        const currentUser = this.props.currentUser
        const listingId = this.props.listingId
        if(!listing){
            return null;
        }
        console.log("the listing in edit form:", listing)
        return(
            <ListingForm listing={listing} listingId={listingId} currentUser={currentUser} formType={formType} action={action}/>
        )
    }
}

console.log("hit listing edit form container")
const mSTP = (state, ownProps) => {
    // console.log("testing:")
    // console.log(fetchAuthListings(state.session.id))
    // console.log(state)
    // console.log("listing:")
    // console.log(listing)
    return{
        currentUser: state.entities.users[state.session.id],
        listing: state.entities.listings[ownProps.match.params.listingId],
        listingId: ownProps.match.params.listingId,
        formType: "Edit listing"
    }
}

const mDTP = (dispatch, ownProps) => {
    return{
        action: (listing) => dispatch(updateListing(listing)),
        getListing: () => dispatch(getListing(ownProps.match.params.listingId)),
        fetchAuthListings: () => dispatch(fetchAuthListings(ownProps.match.params.listingId))
    }
}

export default connect(mSTP, mDTP)(ListingEditForm);