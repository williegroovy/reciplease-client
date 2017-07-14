import React from 'react';
import { compose, setDisplayName } from 'recompose';
import { connect } from 'react-redux';
import { reduxForm , Field } from 'redux-form';
import { Form, FormGroup, ControlLabel, Button } from 'react-bootstrap';

import FieldInput from '../Forms/FieldInput';
import { setUsername } from '../../store/User/actions';

let UsernameField = ({ handleSubmit, pristine, submitting }) => {
  return(
    <Form onSubmit={handleSubmit} inline>
      <FormGroup controlId="formUsername">
        <ControlLabel>Username</ControlLabel>{ ' ' }
        <Field name="username" placeholder="Username" component={FieldInput} type="text"/>
        { ' ' }
        <Button type="submit" disabled={pristine || submitting}>Save</Button>
      </FormGroup>
    </Form>
  );
};

function validate(formProps) {
  const errors = {};

  if(!formProps.username)
    errors.username = 'Please enter a username';

  return errors;
}

const mapStateToProps = state => {
  return {
    initialValues: {
      username: state.auth.username
    }
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: data => setUsername(data.username)(dispatch)
  }
};

UsernameField = reduxForm({
  form: 'UsernameField',
  validate
})(UsernameField);

const enhancer = compose(
  setDisplayName('UsernameField'),
  connect(mapStateToProps, mapDispatchToProps)
);

export default enhancer(UsernameField);