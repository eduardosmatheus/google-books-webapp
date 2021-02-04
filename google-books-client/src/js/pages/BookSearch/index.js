import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faSearch } from '@fortawesome/free-solid-svg-icons';
import api from '../../api';
import Styles from './index.module.css';
import BookList from '../../components/BookList';

export default function BookSearch() {
  const [searchHint, setSearchHint] = useState('');
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const data = api.bookmarks.list();
    setBookmarks(data);
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const { data } = await api.books.search(searchHint);
    setBooks(data.items);
    setIsLoading(false);
  };

  const handleAddBookmark = (book) => {
    api.bookmarks.add(book);
    setBookmarks(api.bookmarks.list());
  };

  const handleRemoveBookmark = (book) => {
    api.bookmarks.remove(book);
    setBookmarks(api.bookmarks.list());
  };

  const checkBookmark = (book) => {
    return bookmarks.find(b => b.id === book.id);
  };

  return (
    <div className={Styles.BookSearch}>
      <form className={Styles.SearchForm} onSubmit={handleSearch}>
        <input
          type="text"
          name="hint"
          value={searchHint}
          required
          onChange={e => setSearchHint(e.target.value)}
        />
        <button type="submit">
          <FontAwesomeIcon
            icon={isLoading ? faSpinner : faSearch}
            spin={isLoading}
          />
          {' '}
          Pesquisar
        </button>
      </form>
      <BookList
        books={books}
        onAddBookmark={handleAddBookmark}
        onRemoveBookmark={handleRemoveBookmark}
        checkBookmark={checkBookmark}
      />
    </div>
  )
}
