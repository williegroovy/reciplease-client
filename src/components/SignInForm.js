import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm , Field} from 'redux-form'

import { signinUser } from '../actions/index';

class SignInForm extends Component {

  constructor(props) {
    super(props);
  }

  renderAlert = () => {
    if(this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  };

  renderField = ({input, label, type, meta: { touched, error}}) => (
      <div style={{display: 'table-row'}}>
          <input {...input} className="form-control" style={{marginBottom: '10px'}} type={type} placeholder={label}/>
          {touched && error && <span className="error">{error}</span>}
      </div>
    );

  render() {

    const { handleSubmit } = this.props;

    return (
      <div style={this.props.style}>
        <form onSubmit={handleSubmit}>
          <Field
            name="email"
            type="text"
            component={this.renderField}
            label="Email"
          />

          <Field
            name="password"
            type="password"
            component={this.renderField}
            label="Password"
          />

          {this.renderAlert()}
          <button type="submit" className="btn btn-primary">Sign in</button>
        </form>
      </div>
    );
  }
}

function validate(formProps) {
  const errors = {};

  if(!formProps.email) {
    errors.email = 'Please enter an email';
  }

  if(!formProps.password) {
    errors.password = 'Please enter an password';
  }

  return errors;
}

const mapStateToProps = state => {
  return {
    errorMessage: state.auth.error
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