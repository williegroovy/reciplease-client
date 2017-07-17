import React from 'react';
import { connect } from 'react-redux';
import { Button, List, ListItem, FontIcon, Toolbar } from 'react-md';
import MenuButton from 'react-md/lib/Menus/MenuButton';
import { signoutUser } from '../../store/User/actions';


import PermissionCombo from './PermissionCombo';
import CollapsiblePanel from '../CollapsiblePanel';
import UsernameField from './UsernameField';
import ArticleWell from './ArticleWell';

const inlineTitle = title => (<div><hr/><h4>{title}</h4><hr/></div>);

const nav = () => <Button key="nav" icon>menu</Button>;

const menuButtons = ({ onSubmit }) => {
  return [
    <Button key="search" icon>search</Button>,
    <Button key="favorite" icon>favorite</Button>,
    <MenuButton
      id="vert-menu"
      icon
      buttonChildren="more_vert"
      className="menu-example"
      tooltipLabel="Open some menu"
    >
      <List>
        <ListItem
          primaryText="Sign Out"
          onClick={() => onSubmit()}
          leftIcon={<FontIcon style={{marginRight: '-25px'}}>exit_to_app</FontIcon>}
        />
        <ListItem primaryText="Item Two" />
        <ListItem primaryText="Item Three" />
        <ListItem primaryText="Item Four" />
      </List>
    </MenuButton>
  ];
};

const AccountHome = (props) => {
  return(
    <Toolbar colored title="Prominent" nav={nav} actions={menuButtons(props)} prominentTitle />
  )
};

const mapStateToProps = state => {
  return {
    username: state.user.username,
    permission: state.user.permission
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: () => signoutUser(dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountHome);

/*
export default () => (
  <div className="container">
    <PermissionCombo />

    {inlineTitle('User Permissions Required')}

    <UsernameField />

    {inlineTitle('Manager Permissions Required')}

    <ArticleWell />

    {inlineTitle('Admin Permissions Required')}

    <CollapsiblePanel/>
  </div>
);
*/