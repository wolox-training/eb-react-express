import api from '../config/api';
import { User } from '../types/users';

export const registerUser = (user: User) => api.post('/users', user);
