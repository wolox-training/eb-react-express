import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import 'scss/application.scss';
import SignUp from 'screens/SignUp';
import Login from 'screens/Login';
import Home from 'screens/Home';
import routes from 'constants/routes';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Route path={routes.unAuth.login} exact component={Login} />
        <Route path={routes.unAuth.signUp} component={SignUp} />
        <Route path={routes.auth.home} component={Home} />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
