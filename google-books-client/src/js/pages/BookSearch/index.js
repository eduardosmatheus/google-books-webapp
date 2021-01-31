import React, { useState } from 'react';
import api from '../../api';
import Styles from './index.module.css';

function Book({
  volumeInfo,
}) {
  return (
    <div className={Styles.Book}>
      Um livro
    </div>
  )
}

function BookList({ books }) {
  if (!books) return null;
  return (
    <div className={Styles.BookList}>
      {books.map(Book)}
    </div>
  )
}

export default function BookSearch() {
  const [searchHint, setSearchHint] = useState('');
  const [books, setBooks] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const { data } = await api.books.search(searchHint);
    setBooks(data.items);
  };

  return (
    <div className={Styles.BookSearch}>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          name="hint"
          value={searchHint}
          onChange={e => setSearchHint(e.target.value)}
        />
        <input type="submit" name="Pesquisar" />
      </form>
      <BookList books={books} />
    </div>
  )
}
