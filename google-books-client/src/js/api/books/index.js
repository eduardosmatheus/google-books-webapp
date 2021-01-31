import server from '../axios-common';

function search(searchHint) {
  return server.get('/volumes', { params: { q: searchHint } });
}

const booksAPI = { search };

export default booksAPI;