// components/AddBook.js
import React, { useState } from 'react';
import './styles/AddBook.css'; // Import custom styles
import axios from 'axios';


function AddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    const postData = {
        "title": title,
        "author": author,
        "genre": genre,
        "price": price
    }
    try{
        await axios.post('http://localhost:3000/api/book',postData)
        .then((data)=>{console.log(" data after post method ---->",data)})
    
    }
    catch(err){
        console.log("error while uploading data");
    }
    
  };

  return (
    <div className="add-book-form">
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Author:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Genre:</label>
          <input
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Price:</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
