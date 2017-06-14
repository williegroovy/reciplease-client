import React, { Component } from 'react';
import { connect } from 'react-redux';

import { signoutUser } from '../actions/index';

class SignOut extends Component {

  componentWillMount() {
    console.log('comp will mount');
    console.log(this.props.signoutUser);
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