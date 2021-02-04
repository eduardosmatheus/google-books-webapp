import React from 'react';
import Book from '../Book';
import Styles from './index.module.css';

export default function BookList({
  books,
  onAddBookmark,
  onRemoveBookmark,
  checkBookmark,
}) {
  if (!books) return null;
  return (
    <div className={Styles.BookList}>
      {books.map((book, idx) => (
        <Book
          key={idx}
          bookmarked={checkBookmark && checkBookmark(book)}
          {...{
            ...book,
            onAddBookmark,
            onRemoveBookmark,
          }}
        />
      ))}
    </div>
  )
}