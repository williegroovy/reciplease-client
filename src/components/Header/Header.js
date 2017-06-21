import React from 'react';
import { connect } from 'react-redux';
import { compose, branch, renderComponent } from 'recompose';

import { toggle } from '../../enhancers/modal';
import { authenticated } from '../../enhancers/user';

import MainNav from './MainNav';
import NavLinkAuth from './NavLinkAuth';
import NavLinkUnAuth from './NavLinkUnAuth';

let enhance = compose(
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