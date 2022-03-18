import React from 'react';
import { Link } from 'react-router-dom';

import { Book } from 'types/book';

import routes from '../../constants/routes';

import styles from './styles.module.scss';

type BookCardProp = {
  book: Book;
};

function BookCard({ book }: BookCardProp) {
  return (
    <Link to={`${routes.auth.home}/${book.id}`} className={styles.book}>
      <img className={styles.bookLogo} src={book.image_url} alt={`${book.title} logo`} />
      <h3 className={styles.bookTitle}>{book.title}</h3>
      <h4 className={styles.bookAuthor}>{book.author}</h4>
    </Link>
  );
}

export default BookCard;
