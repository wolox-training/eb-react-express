import React from 'react';
import { useForm } from 'react-hook-form';
import i18next from 'i18next';
import { useMutation } from 'react-query';
import { Link, useHistory } from 'react-router-dom';

import { User } from '../../types/users';
import { registerUser } from '../../services/users';
import routes from '../../constants/routes';
import UnAuthWrapper from '../../components/UnAuthWrapper';
import styles from '../../components/UnAuthWrapper/styles.module.scss';

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<User>();

  const { push } = useHistory();

  const { mutate, error, isError } = useMutation(registerUser, {
    onSuccess: res => {
      if (res.ok) {
        push(routes.unAuth.login);
      }
    }
  });

  const onSubmit = (data: User): void => {
    const user = { ...data, locale: 'en' };
    mutate(user);
  };

  return (
    <UnAuthWrapper error={error as string} isError={isError}>
      <form className={styles.containerForm} onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.labelInput}>{i18next.t('SignUp:firstName')}</label>
        <input className={styles.inputPrimary} type="text" {...register('first_name', { required: true })} />
        {errors.first_name && <span className={styles.alert}>{i18next.t('SignUp:requiredField')}</span>}

        <label className={styles.labelInput}>{i18next.t('SignUp:lastName')}</label>
        <input className={styles.inputPrimary} type="text" {...register('last_name', { required: true })} />
        {errors.last_name && <span className={styles.alert}>{i18next.t('SignUp:requiredField')}</span>}

        <label className={styles.labelInput}>{i18next.t('SignUp:email')}</label>
        <input className={styles.inputPrimary} type="email" {...register('email', { required: true })} />
        {errors.email && <span className={styles.alert}>{i18next.t('SignUp:requiredField')}</span>}

        <label className={styles.labelInput}>{i18next.t('SignUp:password')}</label>
        <input
          className={styles.inputPrimary}
          type="password"
          {...register('password', { required: true })}
        />
        {errors.password && <span className={styles.alert}>{i18next.t('SignUp:requiredField')}</span>}

        <label className={styles.labelInput}>{i18next.t('SignUp:confirmPassword')}</label>
        <input
          className={styles.inputPrimary}
          type="password"
          {...register('password_confirmation', { required: true })}
        />
        {errors.password_confirmation && (
          <span className={styles.alert}>{i18next.t('SignUp:requiredField')}</span>
        )}

        <button className={styles.buttonPrimary} type="submit">
          {i18next.t('SignUp:signUp')}
        </button>
      </form>
      <Link className={styles.buttonSecondary} to={routes.unAuth.login}>
        {i18next.t('SignUp:login')}
      </Link>
    </UnAuthWrapper>
  );
}

export default SignUp;
