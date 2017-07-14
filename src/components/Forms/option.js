import React from 'react';
import PropTypes from 'prop-types';

let key = 0;

const option = ({value, label}) => (<option key={key++} value={value}>{label}</option>);

option.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default option;