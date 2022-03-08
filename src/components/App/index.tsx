import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import 'scss/application.scss';
import SignUp from 'screens/SignUp';
import Login from 'screens/Login';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Route path="/" exact component={Login} />
        <Route path="/sign-up" component={SignUp} />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
