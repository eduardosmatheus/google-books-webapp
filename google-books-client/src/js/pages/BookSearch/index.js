import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import api from '../../api';
import Styles from './index.module.css';

function Book({ volumeInfo, onAddBookmark, onRemoveBookmark }) {
  const { title, authors, description, imageLinks } = volumeInfo
  return (
    <div className={Styles.Book}>
      <div className={Styles.BookDetails}>
        <p><b>Título:</b></p>
        {title}
        <p><b>Autores:</b></p>
        {authors && authors.map((author, idx) => <p key={idx}>{author}</p>)}
      </div>
      <section className={Styles.BookDescription}>
        {description || ' - '}
      </section>
      <img src={imageLinks.smallThumbnail} alt={title} />
      <button onClick={() => onAddBookmark(volumeInfo)}>
        <FontAwesomeIcon
          icon={faStar}
          color="yellow"
          border
        />
      </button>
    </div>
  )
}

function BookList({ books, onAddBookmark, onRemoveBookmark }) {
  if (!books) return null;
  return (
    <div className={Styles.BookList}>
      {books.map((book, idx) => (
        <Book
          key={idx}
          {...{
            ...book,
            onAddBookmark,
            onRemoveBookmark
          }}
        />
      ))}
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

  const handleAddBookmark = (book) => {
    api.bookmarks.add(book);
  };

  const handleRemoveBookmark = (book) => {
    api.bookmarks.remove(book);
  }

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
      <BookList
        books={books}
        onAddBookmark={handleAddBookmark}
        onRemoveBookmark={handleRemoveBookmark}
      />
    </div>
  )
}
