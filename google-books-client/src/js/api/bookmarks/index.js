
const FAVORITES_KEY = 'booksClient.favorites';

function list() {
  return localStorage.getItem(FAVORITES_KEY);
}

function add(book) {
  const myFavorites = localStorage.getItem(FAVORITES_KEY);
  localStorage.setItem(FAVORITES_KEY, [...myFavorites, book]);
}

function remove(book) {
  const myFavorites = localStorage.getItem(FAVORITES_KEY);
  // const updatedFavorites = myFavorites.filter(favorite => favorite.)
  localStorage.setItem(FAVORITES_KEY, myFavorites.filter());
}

const bookmarksAPI = {
  list,
  add,
  remove,
};

export default bookmarksAPI;