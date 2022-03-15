import React from 'react';

import { Book } from 'types/book';

import styles from './styles.module.scss';

type BookCardProp = {
  book: Book;
};

function BookCard({ book }: BookCardProp) {
  return (
    <div className={styles.book}>
      <img className={styles.bookLogo} src={book.image_url} alt={`${book.title} logo`} />
      <h3 className={styles.bookTitle}>{book.title}</h3>
      <h4 className={styles.bookAuthor}>{book.author}</h4>
    </div>
  );
}

export default BookCard;
