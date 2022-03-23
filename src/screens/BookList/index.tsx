import React from 'react';

import BookCard from 'components/BookCard';
import { Book, BookListResponse } from 'types/book';

import styles from './styles.module.scss';

type BookListProp = {
  data: BookListResponse | undefined;
};

function BookList({ data }: BookListProp) {
  return (
    <div className={styles.booksContainer}>
      {data?.page?.map((book: Book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}

export default BookList;
