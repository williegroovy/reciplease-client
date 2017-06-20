import React from 'react';
import { Link } from 'react-router';

const renderLinks = (props) => {

  const { authenticated, toggleSignInModal, toggleSignUpModal } = props;


  if (authenticated) return <li className="nav-item"><Link className="nav-link" to="/signout">Sign Out</Link></li>;
  else {
    return [
      <li className="nav-item navbar-right" onClick={toggleSignInModal} key={1}>
        <Link className="nav-link">Sign In</Link>
      </li>,
      <li className="nav-item navbar-right" onClick={toggleSignUpModal} key={2}>
        <Link className="nav-link">Sign Up</Link>
      </li>
    ];
  }
};

export default (props) => {
  return (
    <nav className="nav navbar">
      <Link to="/" className="navbar-brand">Reciplease</Link>
      <ul className="nav-auth nav navbar-nav pull-right">
        {renderLinks(props)}
      </ul>
    </nav>
  );
};
