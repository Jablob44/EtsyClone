// import { connect } from "react-redux";
// // import { receiveListings } from "../../actions/listing_actions";
// // import { connect } from "react-redux";
// // import { getListings } from "../../actions/listing_actions";
// import { getListings } from "../../actions/listing_actions";
// import ListingIndex from "./listing_index";
// // import currentSearchValue from
// const mSTP = (state) => {
//     // console.log("inside container", state.entities.listings)
//     // console.log("inside container", Object.values(state.entities.listings))
//     let allListings = Object.values(state.entities.listings)
//     let listings = allListings.filter((listing) => listing.category === category)
//     return{
//         listings: listings,
//         currentUser: state.entities.users[state.session.id]
//         // creators: Object.values(state.entities.users)
//     }
// }

// const mDTP = (dispatch) => {
//     return {
//         getListings: () => dispatch(getListings())
//     }
// }

// export default connect(mSTP, mDTP)(ListingIndex)