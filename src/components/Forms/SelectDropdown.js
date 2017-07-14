import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

import option from './option';

const SelectDropdown = props => {
  let { label, placeholder, selections } = props;
  return (
    <FormGroup>
      <ControlLabel>{label}</ControlLabel>
      <FormControl componentClass="select" placeholder={placeholder}>
        {
          selections.map(item => option(item))
        }
      </FormControl>
    </FormGroup>
  );
};

SelectDropdown.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  selections: PropTypes.array.isRequired
};

export default SelectDropdown;