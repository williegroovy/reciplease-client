import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router';

import { TOGGLE_MODAL, SIGN_IN, SIGN_UP } from '../constants/types';
import { setModal } from '../store/Modal/actions';

class Header extends Component {

  constructor(props) {
    super(props);
  }

  renderLinks() {

    const { toggleSignInModal, toggleSignUpModal } = this.props;

    if(this.props.authenticated) {
      return(
        <li className="nav-item">
          <Link className="nav-link" to="/signout">Sign Out</Link>
        </li>
      );
    } else {
      return [
        <li className="nav-item navbar-right" onClick={toggleSignInModal} key={1}>
          <Link className="nav-link" >Sign In</Link>
        </li>,
        <li className="nav-item navbar-right" onClick={toggleSignUpModal} key={2}>
          <Link className="nav-link">Sign Up</Link>
        </li>
      ];
    }
  }

  render() {
    return(
      <nav className="nav navbar">
        <Link to="/" className="navbar-brand">Reciplease</Link>
        <ul className="nav-auth nav navbar-nav pull-right">
          {this.renderLinks()}
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {authenticated: state.auth.authenticated}
};

const mapDispatchToProps = dispatch => {
  return {
    toggleSignInModal: () => dispatch(setModal(dispatch, TOGGLE_MODAL, SIGN_IN)),
    toggleSignUpModal: () => dispatch(setModal(dispatch, TOGGLE_MODAL, SIGN_UP))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
