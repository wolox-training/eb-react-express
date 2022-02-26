import { SignUpFields } from './types';

export const SIGN_UP_FIELDS: SignUpFields[] = [
  {
    id: 'first_name',
    type: 'text',
    label: 'Nombre',
    model: 'first-name',
  },
  {
    id: 'last_name',
    type: 'text',
    label: 'Apellido',
    model: 'last-name'
  },
  {
    id: 'email',
    type: 'email',
    label: 'Email',
    model: 'email'
  },
  {
    id: 'password',
    type: 'password',
    label: 'Password',
    model: 'password'
  },
  {
    id: 'password-confirmation',
    type: 'password',
    label: 'Confirmación de Password',
    model: 'password_confirmation'
  }
];
