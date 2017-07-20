import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import renderMergedProps from '../../helpers/renderMergedProps';

const ProtectedRoute = ({ component, auth, redirectTo, ...rest}) => {

  return (
    <Route {...rest} render={routeProps => {
      console.log('routeProps.location', routeProps.location);
      return (auth ? renderMergedProps(component, routeProps, rest)
        :
          <Redirect to={{
            pathname: redirectTo,
            state: { from: routeProps.location }
          }} />)
      }
    } />
  )
};

export default ProtectedRoute;

/*
 * <ProtectedRoute path='/protected' component={Protected} redirectTo="/" auth={authenticated} />
 */