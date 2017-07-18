import React from 'react';
import { connect } from 'react-redux';
import { reduxForm , Field} from 'redux-form';
import { signinUser } from '../../store/User/actions';

import { TextField, Button, FontIcon } from 'react-md';

const renderTextField = ({ input, iconType, error, errorMessage, meta, ...others }) => (
  <TextField
    {...input} {...others} leftIcon={<FontIcon>{iconType}</FontIcon>} error={meta.touched && !!meta.error} errorText={meta.error}
  />
  );

const SignInForm = ({ handleSubmit}) => {
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
      <Button type="submit" primary className="sign-in-btn md-grid" flat label="Log In" />
    </form>
  );
};


function validate(formProps) {
  const errors = {};
  console.log('validate');
  if(!formProps.username) {
    errors.username = 'Please enter an username';
  }

  if(!formProps.password) {
    errors.password = 'Please enter an password';
  }

  return errors;
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: data => signinUser(data)(dispatch)
  }
};

const signInForm = reduxForm({
  form: 'signin',
  validate,
})(SignInForm);

export default connect(null, mapDispatchToProps)(signInForm);