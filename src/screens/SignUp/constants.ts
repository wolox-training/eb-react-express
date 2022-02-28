import { SignUpFields } from './types';

export const SIGN_UP_FIELDS: SignUpFields[] = [
  {
    id: 'first_name',
    type: 'text',
    label: 'firstName',
    model: 'first-name'
  },
  {
    id: 'last_name',
    type: 'text',
    label: 'lastName',
    model: 'last-name'
  },
  {
    id: 'email',
    type: 'email',
    label: 'email',
    model: 'email'
  },
  {
    id: 'password',
    type: 'password',
    label: 'password',
    model: 'password'
  },
  {
    id: 'password-confirmation',
    type: 'password',
    label: 'confirmPassword',
    model: 'password_confirmation'
  }
];
