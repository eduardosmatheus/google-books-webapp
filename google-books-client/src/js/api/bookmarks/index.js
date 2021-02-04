
const FAVORITES_KEY = 'booksClient.favorites';

function bookmarksDB() {
  return JSON.parse(localStorage.getItem(FAVORITES_KEY)) || {
    bookmarks: []
  };
}

function list() {
  return bookmarksDB().bookmarks;
}

function add(book) {
  const data = bookmarksDB();
  localStorage.setItem(FAVORITES_KEY, JSON.stringify({
    bookmarks: [...data.bookmarks, book]
  }));
}

function remove(id) {
  const { bookmarks } = bookmarksDB();
  const updatedBookmarks = bookmarks.filter(book => book.id !== id);
  localStorage.setItem(FAVORITES_KEY, JSON.stringify({ bookmarks: updatedBookmarks }));
}

const bookmarksAPI = { list, add, remove };

export default bookmarksAPI;