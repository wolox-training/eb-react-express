import React from 'react';
import { Redirect, RouteProps, Route } from 'react-router-dom';

import SessionService from 'services/SessionService';
import routes from 'constants/routes';

function PublicRoute({ children, ...rest }: RouteProps) {
  return (
    <Route
      {...rest}
      render={() => (SessionService.hasSession() ? <Redirect to={routes.auth.home} /> : children)}
    />
  );
}

export default PublicRoute;
