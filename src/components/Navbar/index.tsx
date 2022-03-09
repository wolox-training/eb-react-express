import React from 'react';
import { useHistory } from 'react-router-dom';
import i18next from 'i18next';

import logo from '../../assets/wolox_logo.svg';
import sessionService from '../../services/SessionService';
import routes from '../../constants/routes';

import styles from './styles.module.scss';

function Navbar() {
  const { push } = useHistory();

  const signOut = () => {
    sessionService.clearSession();
    push(routes.unAuth.login);
  };

  return (
    <nav className={styles.nav}>
      <img src={logo} alt={i18next.t('SignUp:woloxLogoAlt') as string} className={styles.logo} />
      <button className={styles['navbar-button']} type="button" onClick={signOut}>
        {i18next.t('Home:logout')}
      </button>
    </nav>
  );
}

export default Navbar;
