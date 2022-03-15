import React, { Fragment } from 'react';
import { Redirect, RouteProps, Route } from 'react-router-dom';

import SessionService from 'services/SessionService';
import routes from 'constants/routes';

type RoutesProps = {
  children: JSX.Element | JSX.Element[];
}& RouteProps;

function PrivateRoute({ children, ...rest }: RoutesProps) {
  return (
    <Route {...rest} render={props => (
      SessionService.hasSession() ?
          <Component {...props} />
      : <Redirect to="/signin" />
  )} />

  );
}

export default PrivateRoute;
