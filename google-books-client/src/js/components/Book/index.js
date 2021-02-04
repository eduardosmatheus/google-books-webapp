import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Styles from './index.module.css';

export default function Book({
  bookmarked,
  volumeInfo,
  onAddBookmark,
  onRemoveBookmark,
  ...rest
}) {
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
      {onAddBookmark && (
        <button
          onClick={() =>
            bookmarked ?
            onRemoveBookmark(rest.id)
            : onAddBookmark({ volumeInfo, ...rest })
          }
        >
          <FontAwesomeIcon
            icon={faStar}
            color={bookmarked ? 'yellow' : 'black'}
            border
          />
        </button>
      )}
    </div>
  )
}