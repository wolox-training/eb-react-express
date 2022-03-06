import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import 'scss/application.scss';
import SignUp from 'screens/SignUp';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <SignUp />
    </QueryClientProvider>
  );
}

export default App;
