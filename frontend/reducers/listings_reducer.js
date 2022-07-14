import { GET_LISTING, GET_LISTINGS } from "../actions/listing_actions";

const listingsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case GET_LISTING:
            nextState[action.listing.id] = action.listing
            return nextState;
        case GET_LISTINGS:    
            return action.listings;
        default:
            return state;
    }
}

export default listingsReducer;