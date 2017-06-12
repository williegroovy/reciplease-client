import React from 'react';
import { connect } from 'react-redux';

import { toggleModal } from '../actions';

const Landing = ({ dispatch }) => {
  return <h4>Welcome sign in to get started</h4>
};


export default connect()(Landing);