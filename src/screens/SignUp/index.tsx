import React, { Component } from 'react';

import { SIGN_UP_FIELDS } from './constants';
import styles from './styles.module.scss';
import logo from './assets/wolox_logo.svg';

class SignUp extends Component {
  state = {
    fields: SIGN_UP_FIELDS,
    user: {
      locale: 'en'
    }
  };

  handleSignUp = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const { user } = this.state;
    console.log({ user });
  };

  handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [e.currentTarget.name]: e.currentTarget.value
      }
    });
  };

  render() {
    const { fields } = this.state;
    return (
      <div className={styles.authContainer}>
        <img className={styles.logo} src={logo} alt="Wolox logo" />
        <form className={styles.containerForm} onSubmit={this.handleSignUp}>
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
                onChange={this.handleChange}
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
}

export default SignUp;
