import React from 'react';
import { useQuery } from 'react-query';

import { withSpinner } from 'components/Spinner';
import BookList from 'screens/BookList';

import { getBooks } from '../../services/books';

import styles from './styles.module.scss';

function BookListWithSpinner() {
  const { data, isLoading } = useQuery('books', getBooks);

  return withSpinner({ classNameContainer: styles.spinnerContainer })(BookList)({
    loading: isLoading,
    data: data?.data
  });
}

export default BookListWithSpinner;
