import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { renderMergedProps } from '../services/helpers';

const ProtectedRoute = ({ component, auth, redirectTo, ...rest }) =>
  <Route
    {...rest}
    render={routeProps => {
      console.log('routeProps.location', routeProps.location);
      return auth
        ? renderMergedProps(component, routeProps, rest)
        : <Redirect
            to={{
              pathname: redirectTo,
              state: { from: routeProps.location }
            }}
          />;
    }}
  />;

export default ProtectedRoute;
