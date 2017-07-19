import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { setDisplayName, compose, withState, withHandlers } from 'recompose';
import { Button, FontIcon, Toolbar, NavigationDrawer } from 'react-md';
import { signoutUser } from '../../store/User/actions';

import { leftToolbarAction, rightToolbarActions } from "./DashboardHeader/ToolbarActions"

const RouteWithSubRoutes = route => (
  <Route path={route.path} exact={route.exact} render={props => (
    <route.component {...props} routes={route.routes} />
  )} />
);

const drawerHeader = (props) => (
  <Toolbar
    actions={<Button icon className="md-cell--right" onClick={() => props.toggleLeftDrawer()}>close</Button>}
    className="md-divider-border md-divider-border--bottom"
  />
);

const drawerNavItems = [
  {
    key: 'home',
    primaryText: 'Home',
    leftIcon: <FontIcon>home</FontIcon>,
    active: true,
    onClick: () => <Redirect push to="/dashboard" />
  },
  {
    key: 'tables',
    primaryText: 'Tables',
    leftIcon: <FontIcon>line_style</FontIcon>,
    onClick: () => <Redirect push to="/dashboard" />
  },
  {
    key: 'media',
    primaryText: 'Media',
    leftIcon: <FontIcon>theaters</FontIcon>,
  },
  {
    key: 'charts',
    primaryText: 'Charts',
    leftIcon: <FontIcon>show_chart</FontIcon>,
  },

  { key: 'divider', divider: true },

  {
    key: 'drawing-canvas',
    primaryText: 'Drawing Canvas',
    leftIcon: <FontIcon>palette</FontIcon>,
  },
  {
    key: 'maps',
    primaryText: 'Map Me',
    leftIcon: <FontIcon>person_pin_circle</FontIcon>,
  },
  {
    key: 'order-out',
    primaryText: 'Order Out',
    leftIcon: <FontIcon>restaurant</FontIcon>,
  },
  {
    key: 'card-grid',
    primaryText: 'Card Grid',
    leftIcon: <FontIcon>view_comfy</FontIcon>,
  }
];

const DashboardNav = (props) => {
  console.log('dashNavProps', props);
  return(
    <div>
      <NavigationDrawer
        nav={leftToolbarAction(props)}
        toolbarActions={rightToolbarActions(props)}
        toolbarProminentTitle
        colored
        toolbarTitle="Richardson Demo"
        drawerHeader={drawerHeader(props)}
        navItems={drawerNavItems}
        visible={props.showLeftDrawer}
        position="left"
        onVisibilityToggle={() => props.toggleLeftDrawer()}
        style={{zIndex: 100}}
        mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY_MINI}
        tabletDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY_MINI}
        desktopDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY_MINI}
        contentId="dashboard-main-content"
      >
        {props.routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </NavigationDrawer>
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
  setDisplayName('DashboardNav'),
  connect(mapStateToProps, mapDispatchToProps),
  withState('showLeftDrawer', 'toggleLeftDrawer', false),
  withHandlers({
    toggleLeftDrawer: ({toggleLeftDrawer}) => () => {
      toggleLeftDrawer(showLeftDrawer => !showLeftDrawer)
    }
  })
);

export default withRouter(enhancer(DashboardNav));

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