import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form';

import { SIGN_UP_FIELDS } from './constants';
import styles from './styles.module.scss';
import logo from './assets/wolox_logo.svg';

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const fields = SIGN_UP_FIELDS;

  const onSubmit = (data: any): void => {
    const user = { ...data, locale: 'en' };
    console.log({ user });
  };

  return (
    <div className={styles.authContainer}>
      <img className={styles.logo} src={logo} alt="Wolox logo" />
      <form className={styles.containerForm} onSubmit={handleSubmit(onSubmit)}>
        {fields.map(field => (
          <Fragment key={`fragment-${field.id}`}>
            <label key={`label-${field.id}`} className={styles.labelInput}>
              {field.label}
            </label>
            <input
              key={`input-${field.id}`}
              className={styles.inputPrimary}
              type={field.type}
              {...register(`${field.model}` as const, { required: true })}
            />
            {errors[field.model] && <span className={styles.alert}>Este campo es requerido</span>}
          </Fragment>
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
