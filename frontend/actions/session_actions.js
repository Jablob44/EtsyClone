import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";
export const RECEIVE_AUTH_LISTINGS = "RECEIVE_AUTH_LISTINGS";

export const receiveCurrentUser = payload => ({
  type: RECEIVE_CURRENT_USER,
  currentUser: payload.currentUser,
});

export const receiveAuthListings = (payload) => ({
  type: RECEIVE_AUTH_LISTINGS,
  listings: payload.listings
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = errors => {
    // debugger
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors
    }
};

export const clearSessionErrors = () => {
  return{
    type: CLEAR_SESSION_ERRORS
  }
}

export const fetchAuthListings = (userId) => (dispatch) => {
  return APIUtil.receiveUser(userId).then(user => dispatch(receiveAuthListings(user)))
}

export const signup = user => dispatch => {
    // debugger
  return APIUtil.signup(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
  }

export const login = user => dispatch => {
    // debugger
    console.log("user: ", user)
  return APIUtil.login(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))

  }

export const logout = () => dispatch => (
  APIUtil.logout().then( () => (
    dispatch(logoutCurrentUser())
  ))
);
