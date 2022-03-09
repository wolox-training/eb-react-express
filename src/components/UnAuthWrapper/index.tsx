import React from 'react';
import i18next from 'i18next';

import logo from '../../assets/wolox_logo.svg';

import styles from './styles.module.scss';

type UnAuthWrapperProps = {
  error: string;
  isError: boolean;
  children: JSX.Element | JSX.Element[];
};

function UnAuthWrapper({ error, isError, children }: UnAuthWrapperProps) {
  return (
    <div className={styles.authContainer}>
      {isError && <span className={styles.alert}>{error}</span>}
      <img className={styles.logo} src={logo} alt={i18next.t('SignUp:woloxLogoAlt') as string} />
      {children}
    </div>
  );
}

export default UnAuthWrapper;
