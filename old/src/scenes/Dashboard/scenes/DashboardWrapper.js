import React from 'react';
import { connect } from 'react-redux';
import { setDisplayName, compose, withState, withHandlers } from 'recompose';
import { NavigationDrawer } from 'react-md';

import RouteWithSubRoutes from '../../../HOCs/RouteWithSubRoutes';

import NavLink from '../components/NavLink';
import DrawerHeader from '../components/DrawerHeader';
import { leftToolbarAction, rightToolbarActions } from "../components/ToolbarActions"
import drawerNavLinks from '../components/drawerNavLinks';

import { signoutUser } from '../../../store/User/actions';


const DashboardWrapper = (props) => (
    <NavigationDrawer
      nav={leftToolbarAction(props)}
      toolbarActions={rightToolbarActions(props)}
      toolbarProminentTitle
      colored
      toolbarTitle="Richardson Demo"
      drawerHeader={<DrawerHeader {...props} />}
      navItems={drawerNavLinks.map(item => (<NavLink {...item} open={props.showLeftDrawer} location={props.location} key={item.to} />))}
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
);

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
  setDisplayName('DashboardWrapper'),
  connect(mapStateToProps, mapDispatchToProps),
  withState('showLeftDrawer', 'toggleLeftDrawer', false),
  withHandlers({
    toggleLeftDrawer: ({toggleLeftDrawer}) => () => {
      toggleLeftDrawer(showLeftDrawer => !showLeftDrawer)
    }
  })
);
export default enhancer(DashboardWrapper);