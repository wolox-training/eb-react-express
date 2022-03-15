import api from '../config/api';
import { BookListResponse } from '../types/book';

export const getBooks = () => api.get<BookListResponse>('/books');
