import api from '../config/api';
import { BookListResponse, Book } from '../types/book';

export const getBooks = () => api.get<BookListResponse>('/books');

export const getBookDetail = (id: string) => api.get<Book>(`/books/${id}`);
