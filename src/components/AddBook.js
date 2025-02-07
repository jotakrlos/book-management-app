import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import BookForm from "./BookForm";
import BooksContext from "../context/BooksContext"; // Importando contexto

const AddBook = () => {
  const { books, setBooks } = useContext(BooksContext); // Obtendo contexto
  const navigate = useNavigate();

  const handleOnSubmit = (book) => {
    setBooks((prevBooks) => [...prevBooks, book]); // Adiciona o livro ao array
    navigate("/"); // Redireciona para a página inicial
  };

  return <BookForm handleOnSubmit={handleOnSubmit} />;
};

export default AddBook;
