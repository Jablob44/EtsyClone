import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = (state) => {
  return {
    errors: Object.values(state.sessionErrors),
    formType: 'signup',
    navLink: <Link to="/login">login</Link>,
  };
};

const mDTP = dispatch => {
  return {
    action: (user) => dispatch(signup(user)),
  };
};

export default connect(mSTP, mDTP)(SessionForm);