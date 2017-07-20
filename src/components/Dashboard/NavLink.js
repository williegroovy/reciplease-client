import React from 'react';
import { Link } from 'react-router-dom';
import { FontIcon, ListItem } from 'react-md';

import TooltipFontIcon from '../common/TooltipFontIcon';

const NavLink = ({ icon, to, label, open}) => {

  let leftIcon;
  if (icon) {
    leftIcon =
      open ?
        <FontIcon>{icon}</FontIcon>
      :
        <TooltipFontIcon tooltipLabel={label} tooltipPosition="right">{icon}</TooltipFontIcon>;
  }

  const renderListItem = (
      <ListItem
        component={Link}
        to={to}
        active={location.pathname === to}
        primaryText={label}
        leftIcon={leftIcon}
      />
  );

  return (
    renderListItem
  )
};

export default NavLink;