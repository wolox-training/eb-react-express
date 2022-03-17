import api from '../config/api';
import { BookListResponse, Book } from '../types/book';

export const getBooks = () => api.get<BookListResponse>('/books');

export const getBookDetail = async (id: string): Promise<Book> => {
  const response = await api.get<Book>(`/books/${id}`);
  if (response.ok && response.data) {
    return response.data;
  }
  throw new Error('Problem with data');
};
