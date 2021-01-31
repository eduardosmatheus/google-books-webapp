import React, { useState } from 'react';
import api from '../../api';
import Styles from 'index.module.css';

export default function BookSearch() {
  const [searchHint, setSearchHint] = useState('');
  const [books, setBooks] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const { data } = await api.books.search(searchHint);
    setBooks(data);
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

    </div>
  )
}
