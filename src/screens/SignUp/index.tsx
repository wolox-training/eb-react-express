import React, { useState } from 'react';

import { SIGN_UP_FIELDS } from './constants';
import styles from './styles.module.scss';
import logo from './assets/wolox_logo.svg';

function SignUp() {
  const [user, updateUser] = useState({ locale: 'en' });

  const fields = SIGN_UP_FIELDS;

  const handleSignUp = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log({ user });
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    updateUser({
      ...user,
      [e.currentTarget.name]: e.currentTarget.value
    });
  };

  return (
    <div className={styles.authContainer}>
      <img className={styles.logo} src={logo} alt="Wolox logo" />
      <form className={styles.containerForm} onSubmit={handleSignUp}>
        {fields.map(field => (
          <React.Fragment key={`fragment-${field.id}`}>
            <label key={`label-${field.id}`} className={styles.labelInput}>
              {field.label}
            </label>
            <input
              key={`input-${field.id}`}
              className={styles.inputPrimary}
              name={field.id}
              type={field.type}
              onChange={handleChange}
            />
          </React.Fragment>
        ))}
        <button className={styles.buttonPrimary} type="submit">
          Sign up
        </button>
      </form>
      <button className={styles.buttonSecondary} type="submit">
        Login
      </button>
    </div>
  );
}

export default SignUp;
