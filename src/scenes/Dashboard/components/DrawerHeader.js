import React from 'react';
import { Toolbar, Button } from 'react-md';

const DrawerHeader = (props) => (
  <Toolbar
    actions={<Button icon className="md-cell--right" onClick={() => props.toggleLeftDrawer()}>close</Button>}
    className="md-divider-border md-divider-border--bottom"
  />
);

export default DrawerHeader;