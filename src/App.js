// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import BookList from './components/BookList';
import AddBook from './components/AddBook';

function App() {
  return (
    <><Router>
      <div className="App">
        <header className="App-header">
          <h1>Book Directory UI</h1>
        </header>
      </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/AddBook">Add Book</Link>
            </li>
            <li>
              <Link to="/">Delete the book</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
        <Routes>
          <Route exact path="/" element={<BookList />}></Route>
          <Route exact path="/AddBook" element={<AddBook />}></Route>
          <Route exact path="/AddBook" element={<AddBook />}></Route>
        </Routes>
    
    </Router>
    </>
  );
}

export default App;
