import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function NavLink({ label, linkSRC, clicked, classes, style }) {
  return(
    <Link to={linkSRC} onClick={clicked} className={classes} style={style}>{label}</Link>
  )
}

NavLink.propTypes = {
  label: PropTypes.string,
  linkSRC: PropTypes.string,
  onClick: PropTypes.func,
  classes: PropTypes.string,
};

NavLink.defaultProps = {
  label: '',
  linkSRC: '/',
  clicked: null,
  classes: '',
  style: {}
};

export default NavLink;