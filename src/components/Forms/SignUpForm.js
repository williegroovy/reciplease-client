import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm , Field} from 'redux-form'

import { signupUser } from '../../store/User/actions';

import ReactSVG from 'react-svg';

class SignUpForm extends Component {

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

  renderField = ({input, label, type, meta: { touched, error }}) => (
      <div style={{marginLeft: 20, marginRight: 20}}>
        {touched && error &&  <ReactSVG className="mw-svg-warning" path="media/exclamation_warning_32.svg" />}
        <input {...input} className="form-control" style={{marginBottom: '15px'}} type={type} placeholder={label}/>
      </div>
    );

  render() {

    const { handleSubmit, applyFormClass } = this.props;

    return (
      <div className={applyFormClass}>
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

          <Field
            name="passwordConfirm"
            type="password"
            component={this.renderField}
            label="Confirm Password"
          />

          {this.renderAlert()}
          <button type="submit" style={{marginRight: 20, float: 'right'}} className="btn btn-primary">Sign up</button>
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

  if(!formProps.passwordConfirm) {
    errors.passwordConfirm = 'Please validate password';
  }

  if(formProps.password !== formProps.passwordConfirm) {
    errors.password = 'Passwords must match';
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
    onSubmit: data => signupUser(data)(dispatch)
  }
};

const signUpForm = reduxForm({
  form: 'signup',
  validate,
}, mapStateToProps)(SignUpForm);

export default connect(mapStateToProps, mapDispatchToProps)(signUpForm);