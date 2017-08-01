import React from 'react';
import { TextField, FontIcon } from 'react-md';

export const rfTextField = ({
  input,
  iconType,
  error,
  errorMessage,
  meta,
  ...rest
}) =>
  <TextField
    {...input}
    {...rest}
    leftIcon={
      <FontIcon>
        {iconType}
      </FontIcon>
    }
    error={meta.touched && !!meta.error}
    errorText={meta.error}
  />;
