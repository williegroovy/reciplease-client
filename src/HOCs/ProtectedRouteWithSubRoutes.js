import React from 'react';
import ProtectedRoute from './ProtectedRoute';

const ProtectedRouteWithSubRoutes = (route) => {
  return (
    <ProtectedRoute path={route.path} auth={route.auth} redirectTo={'/'} routes={route.routes} component={route.component} />
  )
};

export default ProtectedRouteWithSubRoutes;