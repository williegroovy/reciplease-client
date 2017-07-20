import React from 'react';
import { Route } from 'react-router-dom';

import renderMergedProps from '../../helpers/renderMergedProps';

const PropsRoute = ({ component, ...rest }) => {
  return (
    <Route {...rest} render={routeProps => {
      return renderMergedProps(component, routeProps, rest);
    }} />
  )
};

export default PropsRoute;

/*
 * <PropsRoute path='/books' component={Books} getBooks={getAllBooks} />
 */