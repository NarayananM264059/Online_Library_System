import { createSlice } from '@reduxjs/toolkit';
import { books as initialBooks } from '../../utils/bookData'; 

const savedBooks = JSON.parse(sessionStorage.getItem('books')) || initialBooks;
const nextId = Math.max(0, ...savedBooks.map(book => book.id)) + 1;

const initialState = {
  books: savedBooks,
  nextId: nextId,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = { ...action.payload, id: state.nextId };
      state.books.push(newBook);
      state.nextId += 1;
      sessionStorage.setItem('books', JSON.stringify(state.books));
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
