import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';

import 'scss/application.scss';
import SignUp from 'screens/SignUp';
import Login from 'screens/Login';
import Home from 'screens/Home';
import routes from 'constants/routes';
import PrivateRoute from 'components/Routes/PrivateRoute';
import PublicRoute from 'components/Routes/PublicRoute';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <PublicRoute path={routes.unAuth.login} exact>
          <Login />
        </PublicRoute>
        <PublicRoute path={routes.unAuth.signUp}>
          <SignUp />
        </PublicRoute>
        <PrivateRoute path={routes.auth.home}>
          <Home />
        </PrivateRoute>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
