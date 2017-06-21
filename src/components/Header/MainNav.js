import React from 'react';
import NavLink from './NavLink';

const MainNav = ({ children }) => {
  return(
    <nav className="nav navbar">
      <NavLink label="Reciplease" linkSRC="/" style="navbar-brand"/>
      {children}
    </nav>
  )
};

export default MainNav;