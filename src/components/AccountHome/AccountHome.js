import React from 'react';
import { connect } from 'react-redux';
import { setDisplayName, compose, withState, withHandlers } from 'recompose';
import { Subheader, Divider, Button, List, ListItem, FontIcon, Toolbar, Drawer } from 'react-md';
import MenuButton from 'react-md/lib/Menus/MenuButton';
import { signoutUser } from '../../store/User/actions';

const InfoIcon = () => <FontIcon>info</FontIcon>;
const StarIcon = () => <FontIcon>star</FontIcon>;

const nav = (props) => <Button key="nav" onClick={() => props.toggleLeftDrawer()} icon>menu</Button>;
const closeDrawer = (props) => <Button icon onClick={() => props.toggleLeftDrawer()}>close</Button>;

const menuButtons = (props) => {
  console.log('menuButtons props', props);
  return [
    <Button key="search" icon>search</Button>,
    <Button key="favorite" icon>favorite</Button>,
    <MenuButton
      id="vert-menu"
      icon
      buttonChildren="more_vert"
      className="menu-example"
      tooltipLabel="Site Options"
      tooltipDelay={150}
      tooltipPosition="bottom"
    >
      <List>
        <ListItem
          primaryText="Log Out"
          onClick={() => props.signOut()}
          rightIcon={<FontIcon style={{color: 'red'}}>power_settings_new</FontIcon>}
        />
        <ListItem primaryText="Item Two" />
        <ListItem primaryText="Item Three" />
        <ListItem primaryText="Item Four" />
      </List>
    </MenuButton>
  ];
};

const header = (props) => (
  <Toolbar
    actions={closeDrawer(props)}
    className="md-divider-border md-divider-border--bottom"
  />
);

const drawerNavItems = [
  {
    key: 'inbox',
    primaryText: 'Inbox',
    leftIcon: <FontIcon>inbox</FontIcon>,
    active: true,
  },
  {
    key: 'starred',
    primaryText: 'Starred',
    leftIcon: <FontIcon>star</FontIcon>,
  },
  {
    key: 'send-mail',
    primaryText: 'Send mail',
    leftIcon: <FontIcon>send</FontIcon>,
  },
  {
    key: 'drafts',
    primaryText: 'Drafts',
    leftIcon: <FontIcon>drafts</FontIcon>,
  },

  { key: 'divider', divider: true },

  {
    key: 'all-mail',
    primaryText: 'All mail',
    leftIcon: <FontIcon>mail</FontIcon>,
  },
  {
    key: 'trash',
    primaryText: 'Trash',
    leftIcon: <FontIcon>delete</FontIcon>,
  },
  {
    key: 'spam',
    primaryText: 'Spam',
    leftIcon: <FontIcon>info</FontIcon>,
  }
];

const AccountHome = (props) => {
  return(
    <div>
      <Toolbar colored title="Richardson Demo" nav={nav(props)} actions={menuButtons(props)} prominentTitle />
      <Drawer
        header={header(props)}
        navItems={drawerNavItems}
        visible={props.showLeftDrawer}
        position="left"
        onVisibilityToggle={() => props.toggleLeftDrawer()}
        style={{zIndex: 100}}
        type={Drawer.DrawerTypes.TEMPORARY}
      />
      </div>
  );
};

const mapStateToProps = state => {
  return {
    username: state.user.username,
    permission: state.user.permission
  }
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => signoutUser(dispatch)
  }
};

const enhancer = compose(
  setDisplayName('Account Home'),
  connect(mapStateToProps, mapDispatchToProps),
  withState('showLeftDrawer', 'toggleLeftDrawer', false),
  withHandlers({
    toggleLeftDrawer: ({toggleLeftDrawer}) => () => {
      console.log('togg');
      toggleLeftDrawer(showLeftDrawer => !showLeftDrawer)
    }
  })
);

export default enhancer(AccountHome);

/*
import PermissionCombo from './PermissionCombo';
import CollapsiblePanel from '../CollapsiblePanel';
import UsernameField from './UsernameField';
import ArticleWell from './ArticleWell';

const inlineTitle = title => (<div><hr/><h4>{title}</h4><hr/></div>);

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