import * as Util from "../util/listing_api_util";

// export const CREATE_LISTING = "CREATE_LISTING";
export const GET_LISTING = "GET_LISTING";
export const GET_LISTINGS = "GET_LISTINGS";

export const receiveListing = (listing) => {
    return{
        type: GET_LISTING,
        listing
    }
}

export const receiveListings = (listings) => {
    return{
        type: GET_LISTINGS,
        listings
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