import React from 'react';
import PropTypes from 'prop-types';
import { FormControl } from 'react-bootstrap';

import option from './option';

const FieldInput = ({ input, name, placeholder, selectionList }) => {
  return (
    <FormControl
      onChange={input.onChange}
      value={input.value}
      name={name}
      placeholder={placeholder}
      componentClass="select">
      {selectionList.map(item => option(item))}
    </FormControl>
  );
};

FieldInput.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  selectionList: PropTypes.array.isRequired
};

export default FieldInput;