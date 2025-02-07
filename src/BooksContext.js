import { createContext } from "react";

const BooksContext = createContext({
  books: [],
  setBooks: () => {} // Função vazia para evitar erros
});

export default BooksContext;