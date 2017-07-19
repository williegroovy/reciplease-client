import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm , Field} from 'redux-form'

import { signupUser } from '../../store/User/actions';

import ReactSVG from 'react-svg';

import { TextField, Button, FontIcon } from 'react-md';

const renderTextField = ({ input, iconType, error, errorMessage, meta, ...others }) => (
  <TextField
    {...input} {...others} leftIcon={<FontIcon>{iconType}</FontIcon>} error={meta.touched && !!meta.error} errorText={meta.error}
  />
);

const SignUpForm = ({ handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit} className="sm-grid">
      <Field
        id="username"
        name="username"
        label="Username"
        type="text"
        iconType="person_outline"
        component={renderTextField}
      />

      <Field
        id="password"
        name="password"
        label="Password"
        type="password"
        iconType="lock_outline"
        component={renderTextField}
      />

      <Field
        id="passwordConfirm"
        name="passwordConfirm"
        label="Password"
        type="password"
        iconType="lock_outline"
        autoComplete="passwordConfirm"
        component={renderTextField}
      />
      <Button type="submit" primary raised className="form-submit-btn md-grid" label="Register" />
    </form>
  );
};

function validate(formProps) {
  const errors = {};

  if(!formProps.username) {
    errors.username = 'Please enter an email';
  }

  if(!formProps.password) {
    errors.password = 'Please enter an password';
  }

  if(!formProps.passwordConfirm) {
    errors.passwordConfirm = 'Please confirm password';
  }

  if(formProps.password !== formProps.passwordConfirm) {
    errors.password = 'Passwords must match';
    errors.passwordConfirm = 'Passwords must match';
  }
  return errors;
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: data => signupUser(data)(dispatch)
  }
};

const signUpForm = reduxForm({
  form: 'signup',
  validate,
})(SignUpForm);

export default connect(null, mapDispatchToProps)(signUpForm);