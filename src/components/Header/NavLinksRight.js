import React from 'react';
import { compose } from 'recompose';

import { toggle } from '../../enhancers/modal';
import { authenticated } from '../../enhancers/user';

import Nav from './MainNav';

const NavLinksRight = (props) => {
  return(
    <Nav>
      <ul className="nav-auth nav navbar-nav pull-right">
        {props.children}
      </ul>
    </Nav>
  );
};

let enhance = compose(
  toggle(),
  authenticated(),
);

export default enhance(NavLinksRight);