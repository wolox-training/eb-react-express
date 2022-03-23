import React from 'react';
import i18next from 'i18next';

import { Book } from 'types/book';

import styles from './styles.module.scss';

type BookDetailProp = {
  data: Book | undefined;
};

function BookDetail({ data }: BookDetailProp) {
  return (
    <div className={styles.detailContainer}>
      <div className={styles.bookContainer}>
        {data && (
          <>
            <img className={styles.bookLogo} src={data?.image_url} alt={data?.title} />
            <div className={styles.bookInfo}>
              <h1 className={styles.bookTitle}>
                {data?.title} <span className={styles.bookSubtitle}>{data?.genre}</span>
              </h1>
              <h3 className={styles.bookDetail}>
                {i18next.t('BookDetail:author')}
                <span className={styles.bookSubDetail}>{data?.author}</span>
              </h3>
              <h3 className={styles.bookDetail}>
                {i18next.t('BookDetail:editor')}
                <span className={styles.bookSubDetail}>{data?.editor} </span>
              </h3>
              <h3 className={styles.bookDetail}>
                {i18next.t('BookDetail:publicationYear')}
                <span className={styles.bookSubDetail}>{data?.year}</span>
              </h3>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default BookDetail;
