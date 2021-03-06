import React from 'react';
import { connect } from 'react-redux';
import { compose, branch, renderComponent, setDisplayName} from 'recompose';

import { toggle } from '../../../helpers/focusCard';
import { authenticated } from '../../../helpers/user';

import MainNav from './MainNav';
import NavLinkAuth from './NavLinkAuth';
import NavLinkUnAuth from './NavLinkUnAuth';

let enhance = compose(
  setDisplayName('Header'),
  connect(),
  toggle(),
  authenticated(),
  branch(
    ({ authenticated }) => authenticated,
    renderComponent(NavLinkUnAuth),
    renderComponent(NavLinkAuth)
  )
);

export default enhance(MainNav);