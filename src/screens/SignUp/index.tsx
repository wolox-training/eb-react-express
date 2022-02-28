import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import i18next from 'i18next';

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
      <img className={styles.logo} src={logo} alt={i18next.t('SignUp:woloxLogoAlt') as string} />
      <form className={styles.containerForm} onSubmit={handleSubmit(onSubmit)}>
        {fields.map(field => (
          <Fragment key={`fragment-${field.id}`}>
            <label key={`label-${field.id}`} className={styles.labelInput}>
              {i18next.t(`SignUp:${field.label}`)}
            </label>
            <input
              key={`input-${field.id}`}
              className={styles.inputPrimary}
              type={field.type}
              {...register(`${field.model}` as const, { required: true })}
            />
            {errors[field.model] && <span className={styles.alert}>{i18next.t('SignUp:requiredField')}</span>}
          </Fragment>
        ))}
        <button className={styles.buttonPrimary} type="submit">
          {i18next.t('SignUp:signUp')}
        </button>
      </form>
      <button className={styles.buttonSecondary} type="submit">
        {i18next.t('SignUp:login')}
      </button>
    </div>
  );
}

export default SignUp;
