import React from 'react';
import { compose, setDisplayName } from 'recompose';
import { username as usernameEnhancer, permission as permissionEnhancer}  from '../../../helpers/user';

import { capitalizeFirstChar } from '../../../constants/helpers';

import NavLink from './NavLink';

const MainNav = ({ children, username, permission }) => {
  const greeting = 'Welcome ' + username + ' - ' + capitalizeFirstChar(permission);
  return(
    <nav style={{padding: 15, marginBottom: 20}} className="nav navbar-inverse">
      <NavLink label="Richardson Demo" linkSRC="/" classes="navbar-brand" />
      <ul style={{ color: 'white', padding: 16, fontFamily: 'Calligraffitti'}} className="nav navbar-nav">
        <li>{greeting}</li>
      </ul>
      {children}
    </nav>
  )
};

const enhance = compose(
  setDisplayName('MainNav'),
  usernameEnhancer(),
  permissionEnhancer(),
);

export default enhance(MainNav);