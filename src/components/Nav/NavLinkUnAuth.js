import React from 'react';
import { withProps } from 'recompose';

import NavLink from './NavLink';
import NavLinksRight from './NavLinksRight';

const ListItemWrapper = withProps(({ style, onClick }) => {className: style, onClick })('li');

function NavLinkUnAuth() {
  return(
    <NavLinksRight>
      <ListItemWrapper className="nav-item">
        <NavLink label="Edit" linkSRC="/edit" classes="nav-link" />
      </ListItemWrapper>
      <ListItemWrapper className="nav-item">
        <NavLink label="Account" linkSRC="/account" classes="nav-link" />
      </ListItemWrapper>
      <ListItemWrapper className="nav-item">
        <NavLink label="Sign Out" linkSRC="/signout" classes="nav-link" />
      </ListItemWrapper>
    </NavLinksRight>
  )
}

export default NavLinkUnAuth;