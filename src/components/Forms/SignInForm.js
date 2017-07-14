import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm , Field} from 'redux-form';

import { signinUser } from '../../store/User/actions';

import ReactSVG from 'react-svg';

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
      <div style={{marginLeft: 20, marginRight: 20}}>
        {touched && error &&  <ReactSVG className="mw-svg-warning" path="media/exclamation_warning_32.svg" />}
        <input {...input} className="form-control" style={{ marginBottom: '15px'}} type={type} placeholder={label}/>
      </div>
    );

  render() {

    const { handleSubmit, applyFromClass} = this.props;

    return (
      <div className={applyFromClass}>
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
          <button type="submit" style={{marginRight: 20, float: 'right'}} className="btn btn-primary">Sign in</button>
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