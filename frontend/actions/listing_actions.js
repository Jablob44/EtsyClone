import * as Util from "../util/listing_api_util";

// export const CREATE_LISTING = "CREATE_LISTING";
export const GET_LISTING = "GET_LISTING";
export const GET_LISTINGS = "GET_LISTINGS";
export const REMOVE_LISTING = "REMOVE_LISTING";
// export const RECEIVE_LISTING_CATEGORIES = "RECEIVE_LISTING_CATEGORIES";

export const receiveListing = (listing) => {
    return{
        type: GET_LISTING,
        listing
    }
}

// export const receiveListingCategories = (listings) => {
//     return{
//         type: RECEIVE_LISTING_CATEGORIES,
//         listings: 
//     }
// }

export const receiveListings = (listings) => {
    return{
        type: GET_LISTINGS,
        listings
    }
}

export const removeListing = (listingId) => {
    return{
        type: REMOVE_LISTING,
        listingId
    }
}

export const getListing = (listingId) => (dispatch) => {
    return Util.getListing(listingId)
        .then(listing => dispatch(receiveListing(listing)))
}

export const getListings = () => (dispatch) => {
    return Util.getAllListings()
        .then(listings => dispatch(receiveListings(listings)))
}

export const createListing = (listing) => (dispatch) => {
    return Util.createListing(listing)
        .then(listing => dispatch(receiveListing(listing)))
}

export const updateListing = (listing) => (dispatch) => {
    return Util.updateListing(listing)
        .then(listing => dispatch(receiveListing(listing)))
}

export const deleteListing = (listingId) => (dispatch) => {
    return Util.deleteListing(listingId)
        .then(() => dispatch(removeListing(listingId)))
}