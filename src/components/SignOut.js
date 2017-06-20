import React, { Component } from 'react';
import { connect } from 'react-redux';

import { signoutUser } from '../store/User/actions';

/**
 * TODO: Convert to functional component
 * Careful with componentWillMount(), check for the recompose implementation
 *
 */

class SignOut extends Component {

  componentWillMount() {
    this.props.signoutUser();
  }

  render() {
    return <div>Ya'll come back now!</div>
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signoutUser: () => signoutUser(dispatch)
  }
};

export default connect(null, mapDispatchToProps)(SignOut);