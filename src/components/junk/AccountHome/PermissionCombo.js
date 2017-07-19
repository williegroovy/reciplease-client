import React from 'react';
import { compose, setDisplayName, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import { FormGroup } from 'react-bootstrap';

import FieldCombo from '../Forms/FieldCombo';
import { setUserPermission } from '../../../store/User/actions';

let permissionList = [
  {value: 'user', label: 'User'},
  {value: 'manager', label: 'Manager'},
  {value: 'admin', label: 'Admin'}
];

let PermissionCombo = () => (
  <FormGroup>
    <Field
      name="permission"
      placeholder="Permission"
      selectionList={permissionList}
      component={FieldCombo} />
  </FormGroup>
);

const selector = formValueSelector('PermissionCombo');

const mapStateToProps = state => {
  const permissionSelection = selector(state, 'permission');
  return {
    permissionSelection,
    initialValues: {
      permission: state.auth.permission
    }
  }
};

const mapDispatchToProps = dispatch => {
  return {
    setPermission: (data) => {
      setUserPermission(data.permission)(dispatch)
    }
  }
};

PermissionCombo = reduxForm({
  form: 'PermissionCombo'
})(PermissionCombo);

const enhancer = compose(
  setDisplayName('PermissionCombo'),
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentWillReceiveProps(nextProps) {
      if (this.props.permissionSelection !== nextProps.permissionSelection) {
        this.props.setPermission({permission: nextProps.permissionSelection});
      }
    }
  })
);

export default enhancer(PermissionCombo);