import React from 'react';
import PropTypes from 'prop-types';
import { FormControl } from 'react-bootstrap';

const FieldInput = ({ input, name, type, placeholder, min, max }) => {
  return (
    <FormControl
      type={type}
      name={name}
      placeholder={placeholder}
      min={min}
      max={max}
      value={input.value}
      onChange={input.onChange}/>
  );
};

FieldInput.propTypes = {
  input: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
};

export default FieldInput;