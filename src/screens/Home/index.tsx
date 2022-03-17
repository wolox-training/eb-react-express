import React from 'react';
import { Switch, useRouteMatch, Route } from 'react-router-dom';

import BookList from 'screens/BookList';
import BookDetail from 'screens/BookDetail';

import Navbar from '../../components/Navbar';

function Home() {
  const { path } = useRouteMatch();
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path={path} component={BookList} />
        <Route path={`${path}/:id`} component={BookDetail} />
      </Switch>
    </>
  );
}

export default Home;
