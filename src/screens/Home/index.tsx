import React from 'react';

import BookList from 'screens/BookList';

import Navbar from '../../components/Navbar';

function Home() {
  return (
    <>
      <Navbar />
      <BookList />
    </>
  );
}

export default Home;
