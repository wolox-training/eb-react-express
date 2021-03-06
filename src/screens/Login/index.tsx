import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { Link, useHistory } from 'react-router-dom';
import i18next from 'i18next';

import { User } from '../../types/users';
import { Credentials } from '../../types/credentials';
import { loginUser } from '../../services/users';
import sessionService from '../../services/SessionService';
import UnAuthWrapper from '../../components/UnAuthWrapper';
import styles from '../../components/UnAuthWrapper/styles.module.scss';
import routes from '../../constants/routes';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<User>({ mode: 'all' });

  const { push } = useHistory();

  const { mutate, error, isError } = useMutation(loginUser, {
    onSuccess: ({ headers }) => {
      if (headers && headers['access-token'] && headers.client && headers.uid) {
        const credentials: Credentials = {
          'access-token': headers['access-token'],
          client: headers.client,
          uid: headers.uid
        };
        sessionService.saveSession(credentials);
        push(routes.auth.home);
      }
    }
  });

  const onSubmit = (user: User): void => {
    mutate(user);
  };

  return (
    <UnAuthWrapper error={error as string} isError={isError}>
      <form className={styles.containerForm} onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.labelInput} htmlFor="email">
          {i18next.t('SignUp:email')}
        </label>
        <input
          className={styles.inputPrimary}
          id="email"
          type="email"
          {...register('email', { required: true })}
        />
        {errors.email && <span className={styles.alert}>{i18next.t('SignUp:requiredField')}</span>}

        <label className={styles.labelInput} htmlFor="password">
          {i18next.t('SignUp:password')}
        </label>
        <input
          className={styles.inputPrimary}
          id="password"
          type="password"
          {...register('password', { required: true })}
        />
        {errors.password && <span className={styles.alert}>{i18next.t('SignUp:requiredField')}</span>}

        <button className={styles.buttonPrimary} data-testid="submit" type="submit" disabled={!isValid}>
          {i18next.t('SignUp:login')}
        </button>
      </form>
      <Link className={styles.buttonSecondary} to={routes.unAuth.signUp}>
        {i18next.t('SignUp:signUp')}
      </Link>
    </UnAuthWrapper>
  );
}

export default Login;
