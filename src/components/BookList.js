// components/BookList.js
import React, { useState, useEffect } from 'react';
import './styles/BookList.css'; // Import custom styles
import axios from 'axios';

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/books');
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };
    fetchBooks();
  }, []);

  return (
    <div>
      <h2>Book List</h2>
      <div className="book-list">
        {books.map((book) => (
          <div className="book-card" key={book._id}>
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Genre: {book.genre}</p>
            <p>Genre: {book.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookList;
