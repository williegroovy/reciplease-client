import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Button } from 'react-md';

import { actions as authActions } from '../../reducers/auth';

import { rfTextField } from '../../components/reduxFormTextField';

const LoginForm = props => {
  console.log('LoginForm', props);
  return (
    <form onSubmit={props.handleSubmit} className="md-grid">
      <Field
        id="username"
        name="username"
        label="Username"
        type="text"
        iconType="person_outline"
        component={rfTextField}
      />

      <Field
        id="password"
        name="password"
        label="Password"
        type="password"
        iconType="lock_outline"
        component={rfTextField}
      />
      <Button
        className="form-submit-btn md-cell--right"
        type="submit"
        primary
        raised
        label="Login"
      />
    </form>
  );
};

const validate = formProps => {
  const errors = {};
  console.log('validate', formProps);
  if (!formProps.username) errors.username = 'Please enter a username';
  if (!formProps.password) errors.password = 'Please enter an password';
  return errors;
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: data => authActions.login(data, dispatch)
  };
};

const loginForm = reduxForm({
  form: 'login',
  validate
})(LoginForm);

export default connect(null, mapDispatchToProps)(loginForm);
