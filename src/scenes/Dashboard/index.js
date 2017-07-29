import React from 'react';
import { setDisplayName, compose } from 'recompose';

import ProtectedRouteWithSubRoutes from '../../HOCs/ProtectedRouteWithSubRoutes';
import dashboardRoutes from './dashboardRoutes';

const Dashboard = (props) => (
  dashboardRoutes.map((route, i) => <ProtectedRouteWithSubRoutes key={i} redirectTo={'/react'} auth={props.authenticated} {...route} />)
);

const enhancer = compose(
  setDisplayName('Dashboard'),
);

export default enhancer(Dashboard);

