import { getListings } from "./listing_actions";

export const UPDATE_SEARCH = "UPDATE_SEARCH";

export const changeSearch = (search, value) => {
    return{
        type: UPDATE_SEARCH,
        search,
        value,
    }
}

export const updateSearch = (search, value) => (dispatch) => {
    dispatch(updateSearch(search, value));
    return getListings(getState.search)(dispatch)
}