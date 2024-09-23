import { createSlice } from "@reduxjs/toolkit";
import { books as initialBooks } from "../../utils/bookData";

const storedBooks = JSON.parse(sessionStorage.getItem("books")) || initialBooks;

const booksSlice = createSlice({
  name: "books",
  initialState: {
    books: storedBooks,
    nextId: Math.max(...storedBooks.map((book) => book.id), 0) + 1, // Ensure max ID logic works
  },
  reducers: {
    addBook: (state, action) => {
      const newBook = { ...action.payload, id: state.nextId };
      state.books.push(newBook);
      state.nextId += 1;
      sessionStorage.setItem("books", JSON.stringify(state.books));
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;