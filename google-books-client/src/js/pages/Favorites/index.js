import React, { useEffect, useState } from 'react'
import api from '../../api';
import BookList from '../../components/BookList';
import Styles from './index.module.css';

export default function Favorites() {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const data = api.bookmarks.list();
    setBookmarks(data);
  }, []);

  return (
    <div className={Styles.Favorites}>
      <BookList books={bookmarks} />
    </div>
  )
}
