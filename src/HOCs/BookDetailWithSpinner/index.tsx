import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import { withSpinner } from 'components/Spinner';
import BookDetail from 'screens/BookDetail';
import { getBookDetail } from 'services/books';

import styles from '../BookListWithSpinner/styles.module.scss';

function BookListWithSpinner() {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useQuery(['bookDetail', id], () => getBookDetail(id));

  return withSpinner({ classNameContainer: styles.spinnerContainer })(BookDetail)({
    loading: isLoading,
    data: data?.data
  });
}

export default BookListWithSpinner;
