/* eslint-disable @typescript-eslint/naming-convention */
export type Book = {
  id: number;
  author: string;
  title: string;
  image_url: string;
  editor: string;
  year: string;
  genre: string;
  created_at: string;
  updated_at: string;
};

export interface BookListResponse {
  page: Book[];
  count: number;
  totalPages: number;
  totalCount: number;
  currentPage: number;
  nextPage?: number;
}
