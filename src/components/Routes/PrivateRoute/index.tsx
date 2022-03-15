import React from 'react';
import { Redirect, RouteProps, Route } from 'react-router-dom';

import SessionService from 'services/SessionService';
import routes from 'constants/routes';

function PrivateRoute({ children, ...rest }: RouteProps) {
  return (
    <Route
      {...rest}
      render={() => (SessionService.hasSession() ? children : <Redirect to={routes.unAuth.login} />)}
    />
  );
}

export default PrivateRoute;
