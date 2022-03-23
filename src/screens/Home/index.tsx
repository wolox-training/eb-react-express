import React from 'react';
import { Switch, useRouteMatch, Route } from 'react-router-dom';

import BookDetailWithSpinner from 'HOCs/BookDetailWithSpinner';
import BookListWithSpinner from 'HOCs/BookListWithSpinner';

import Navbar from '../../components/Navbar';

function Home() {
  const { path } = useRouteMatch();
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path={path} component={BookListWithSpinner} />
        <Route path={`${path}/:id`} component={BookDetailWithSpinner} />
      </Switch>
    </>
  );
}

export default Home;
