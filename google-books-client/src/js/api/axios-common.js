import axios from 'axios';

const apiInstance = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1',
  params: {
    key: process.env.REACT_APP_GOOGLE_BOOKS_API_KEY
  } 
});

export default apiInstance;