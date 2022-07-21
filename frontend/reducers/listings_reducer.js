import { GET_LISTING, GET_LISTINGS, REMOVE_LISTING } from "../actions/listing_actions";
import { RECEIVE_AUTH_LISTINGS } from "../actions/session_actions";
const listingsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case GET_LISTING:
            console.log("reducer action listing", action.listing);
            nextState[action.listing.id] = action.listing
            return nextState;
        case GET_LISTINGS:    
            return action.listings;
        case RECEIVE_AUTH_LISTINGS:
            return action.listings || {};
        case REMOVE_LISTING:
            delete nextState[action.listingId];
            return nextState;
        default:
            return state;
    }
}

export default listingsReducer;