import { SignUpFields } from './types';

export const SIGN_UP_FIELDS: SignUpFields[] = [
  {
    id: 'first_name',
    type: 'text',
    label: 'Nombre',
    model: 'name'
  },
  {
    id: 'last_name',
    type: 'text',
    label: 'Apellido',
    model: 'lastName'
  },
  {
    id: 'email',
    type: 'text',
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
    id: 'password_confirmation',
    type: 'password',
    label: 'Confirmación de Password',
    model: 'confirmedPassword'
  }
];
