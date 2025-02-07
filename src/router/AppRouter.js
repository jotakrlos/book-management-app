import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from '../components/Header';
import AddBook from '../components/AddBook';
import EditBook from '../components/EditBook';
import BooksList from '../components/BooksList';
import BooksContext from '../context/BooksContext';

const AppRouter = () => {
  const [books, setBooks] = useState([]); // Estado correto

  return (
    <BrowserRouter>
      <Header />
      <div className="main-content">
        <BooksContext.Provider value={{ books, setBooks }}>
          <Routes>
            <Route path="/" element={<BooksList />} />
            <Route path="/add" element={<AddBook />} />
            <Route path="/edit/:id" element={<EditBook />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BooksContext.Provider>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;