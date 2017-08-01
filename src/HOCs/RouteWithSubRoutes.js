import React from 'react';
import { Route } from 'react-router-dom';

const RouteWithSubRoutes = route =>
  <Route
    exact={route.exact}
    path={route.path}
    render={props => <route.component {...props} route={route.routes} />}
  />;

export default RouteWithSubRoutes;
