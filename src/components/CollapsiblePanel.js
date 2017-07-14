import React from 'react';
import { compose, setDisplayName, withState } from 'recompose';
import { Button, Panel, Table, Popover, OverlayTrigger } from 'react-bootstrap';

import { permission } from '../enhancers/user';
import { adminRequired } from '../constants/helpers';

const SalaryTable = () => (
  <Table striped bordered condensed hover>
    <thead>
    <tr>
      <th>#</th>
      <th>Employee</th>
      <th>Position</th>
      <th>Hire Date</th>
      <th>Salary</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>1</td>
      <td>William Richardson</td>
      <td>Software Engineer</td>
      <td>09/01/01</td>
      <td>$30,000</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Bruce Banner</td>
      <td>Scientist</td>
      <td>03/08/15</td>
      <td>$10,000</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Christina Richardson</td>
      <td>Human Resources Manager</td>
      <td>08/01/16</td>
      <td>$60,000</td>
    </tr>
    </tbody>
  </Table>
);

const tooltip = (
  <Popover id="popover" title="Insufficient permission!">
    Contact the admin... no actually save yourself.
    Use the select box to elevate your user <strong>permissions</strong> to admin.
  </Popover>
);

const buttonWithPopOver = (
  <OverlayTrigger placement="top" overlay={tooltip}>
    <Button bsStyle="info" style={{ opacity: 0.5 }}>Salaries</Button>
  </OverlayTrigger>
);

const button = (toggle) => (<Button bsStyle="info" onClick={ () => toggle(open => !open)}>Salaries</Button>);

const CollapsiblePanel = ({ toggle, open, permission }) => {
  return (
    <div>
      {adminRequired(permission) ? button(toggle) : buttonWithPopOver }
      <Panel collapsible expanded={open}>
        <SalaryTable />
      </Panel>
    </div>
  )
};

let enhance = compose(
  setDisplayName('CollapsiblePanel'),
  withState('open', 'toggle', false),
  permission()
);

export default enhance(CollapsiblePanel);