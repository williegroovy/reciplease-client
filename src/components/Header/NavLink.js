import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

function NavLink({ label, linkSRC, clicked, style }) {
  return(
    <Link to={linkSRC} onClick={clicked} className={style}>{label}</Link>
  )
}

NavLink.propTypes = {
  label: PropTypes.string,
  linkSRC: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.string,
};

NavLink.defaultProps = {
  label: '',
  linkSRC: '/',
  clicked: null,
  style: ''

};

export default NavLink;