import React from 'react';
import { connect } from 'react-redux';
import { reduxForm , Field} from 'redux-form';
import { signinUser } from '../../store/User/actions';

import { TextField, Button, FontIcon } from 'react-md';

const renderTextField = ({ input, iconType, meta: { touched, error }, ...others }) => (
  <TextField
    {...input} {...others} leftIcon={<FontIcon>{iconType}</FontIcon>} error={touched && !!error} errorText={error}
  />
);

const SignInForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit} className="sm-grid">
    <Field
      id="username"
      name="username"
      label="Username"
      type="text"
      iconType="person_outline"
      component={renderTextField}
      errorText="Log In error, check your username and try again."
    />

    <Field
      id="password"
      name="password"
      label="Password"
      type="password"
      iconType="lock_outline"
      component={renderTextField}
      errorText="Log In error, check your password and try again."

    />
    <Button type="submit" className="sign-in-btn md-grid" flat label="Sign In" />
  </form>
);


function validate(formProps) {
  const errors = {};
  console.log('validate');
  if(!formProps.username) {
    errors.username = 'Please enter an email';
  }

  if(!formProps.password) {
    errors.password = 'Please enter an password';
  }

  return errors;
}

const mapStateToProps = state => {
  return {
    error: state.user.error
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: data => signinUser(data)(dispatch)
  }
};

const signInForm = reduxForm({
  form: 'signin',
  validate,
}, mapStateToProps)(SignInForm);

export default connect(mapStateToProps, mapDispatchToProps)(signInForm);