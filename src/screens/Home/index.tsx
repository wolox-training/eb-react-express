import React, { Fragment } from 'react';

import BookList from 'screens/BookList';

import Navbar from '../../components/Navbar';

function Home() {
  return (
    <Fragment>
      <Navbar />
      <BookList />
    </Fragment>
  );
}

export default Home;
