import React from 'react';
import { Link } from 'react-router-dom';
import { Button, List, ListItem, FontIcon } from 'react-md';
import MenuButton from 'react-md/lib/Menus/MenuButton';

export const leftToolbarAction = ({ toggleLeftDrawer }) => <Button key="menu" onClick={() => toggleLeftDrawer()} icon>menu</Button>;

export const rightToolbarActions = ({ signOut }) => {
  return [
    <Button key="search" icon>search</Button>,
    <Button
      key="favorite"
      icon
      tooltipLabel="Account Settings"
      tooltipDelay={150}
      tooltipPosition="bottom"
    >
      settings
    </Button>,
    <MenuButton
      id="vert-menu"
      key="vert-menu"
      icon
      buttonChildren="more_vert"
      className="menu-example"
      tooltipLabel="Site Options"
      tooltipDelay={150}
      tooltipPosition="bottom"
    >
      <List key="vertList">
        <ListItem
          component={Link}
          primaryText="Log Out"
          to="/"
          onClick={() => signOut()}
          rightIcon={<FontIcon style={{color: 'red'}}>power_settings_new</FontIcon>}
        />
      </List>
    </MenuButton>
  ];
};