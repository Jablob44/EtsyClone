import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = (state) => {
  return {
    errors: Object.values(state.sessionErrors),
    formType: 'login',
    navLink: <Link to="/signup">register</Link>,
  };
};

const mDTP = dispatch => {
  return {
    action: (user) => dispatch(login(user)),
  };
};

export default connect(mSTP, mDTP)(SessionForm);