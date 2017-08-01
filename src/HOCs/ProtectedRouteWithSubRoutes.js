import React from 'react';

import ProtectedRoute from './ProtectedRoute';

const ProtectedRouteWithSubRoutes = route =>
  <ProtectedRoute
    path={route.path}
    auth={route.auth}
    redirectTo="/"
    route={route.routes}
    component={route.component}
  />;

export default ProtectedRouteWithSubRoutes;
