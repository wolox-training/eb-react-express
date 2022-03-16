import React from 'react';
import { useQuery } from 'react-query';

import BookCard from 'components/BookCard';
import { Book } from 'types/book';

import { getBooks } from '../../services/books';

import styles from './styles.module.scss';

function BookList() {
  const { data } = useQuery('books', getBooks);

  return (
    <div className={styles.booksContainer}>
      {data?.data?.page?.map((book: Book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}

export default BookList;
