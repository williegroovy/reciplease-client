import React from 'react';
import { connect } from 'react-redux';
import { setDisplayName, compose, withState, withHandlers } from 'recompose';
import { NavigationDrawer } from 'react-md';
import { signoutUser } from '../../store/User/actions';

import NavLink from './NavLink';
import DrawerHeader from './DashboardHeader/DrawerHeader';
import RouteWithSubRoutes from '../common/RouteWithSubRoutes';
import { leftToolbarAction, rightToolbarActions } from "./DashboardHeader/ToolbarActions"
import drawerNavItems from './DashboardHeader/drawerNavItems';

const Dashboard = (props) => {
  return(
    <div>
      <NavigationDrawer
        nav={leftToolbarAction(props)}
        toolbarActions={rightToolbarActions(props)}
        toolbarProminentTitle
        colored
        toolbarTitle="Richardson Demo"
        drawerHeader={<DrawerHeader {...props} />}
        navItems={drawerNavItems.map(item => (<NavLink {...item} open={props.showLeftDrawer} location={props.location} key={item.to} />))}
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
    permission: state.user.permission,
    authenticated: state.user.authenticated
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

export default enhancer(Dashboard);

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