import api from '../config/api';
import { User } from '../types/users';

export const registerUser = (user: User) => api.post('/users', user);

export const loginUser = (user: User) => api.post('/users/sign_in', user);
