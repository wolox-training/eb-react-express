import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import i18next from 'i18next';

import { getBookDetail } from 'services/books';

import styles from './styles.module.scss';

function BookDetail() {
  const { id } = useParams<{ id: string }>();
  const { data } = useQuery(['bookDetail', id], () => getBookDetail(id));

  return (
    <div className={styles.detailContainer}>
      <div className={styles.bookContainer}>
        {data?.data && (
          <>
            <img className={styles.bookLogo} src={data?.data?.image_url} alt={data?.data?.title} />
            <div className={styles.bookInfo}>
              <h1 className={styles.bookTitle}>
                {data?.data?.title} <span className={styles.bookSubtitle}>{data?.data?.genre}</span>
              </h1>
              <h3 className={styles.bookDetail}>
                {i18next.t('BookDetail:author')}
                <span className={styles.bookSubDetail}>{data?.data?.author}</span>
              </h3>
              <h3 className={styles.bookDetail}>
                {i18next.t('BookDetail:editor')}
                <span className={styles.bookSubDetail}>{data?.data?.editor} </span>
              </h3>
              <h3 className={styles.bookDetail}>
                {i18next.t('BookDetail:publicationYear')}
                <span className={styles.bookSubDetail}>{data?.data?.year}</span>
              </h3>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default BookDetail;
