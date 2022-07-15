import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { closeModal, openModal } from '../../actions/modal_actions';
import { clearSessionErrors } from '../../actions/session_actions';
// import { Link } from 'react-router-dom';
// import { signup } from '../../util/session_api_util';

const mSTP = (state) => {
  return {
    errors: Object.values(state.sessionErrors),
    formType: 'login',
    // navLink: <Link to="/signup">register</Link>,
  };
};

const mDTP = dispatch => {
  return {
    action: (user) => dispatch(login(user)),
    otherForm: (
      <button onClick={() => dispatch(openModal('signup'))}>
        Signup
      </button>
    ),
    closeModal: () => dispatch(closeModal()),
    clearSessionErrors: () => dispatch(clearSessionErrors())
  };
};

export default connect(mSTP, mDTP)(SessionForm);