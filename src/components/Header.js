import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router';

import { SIGN_IN, TOGGLE_MODAL } from '../actions/types';
import { setModal } from '../actions/index';

class Header extends Component {

  constructor(props) {
    super(props);
  }

  renderLinks() {

    const { toggleSignInModal } = this.props;

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
        <li className="nav-item navbar-right" key={2}>
          <Link className="nav-link" to="/signup">Sign Up</Link>
        </li>
      ];
    }
  }

  render() {
    return(
      <nav className="nav navbar-inverse">
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
    toggleSignInModal: () => dispatch(setModal(dispatch, TOGGLE_MODAL, SIGN_IN))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
