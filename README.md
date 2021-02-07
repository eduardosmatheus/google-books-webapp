# Google Books Web App

## How to use this project

## 1. Front-end (`google-books-client` folder)

### Environment Variables configuration

First of all, we need to prepare the application to use a generated access token from [Google Developers](https://developers.google.com/books/). You'll need to create a OAuth token on your Google Developer Console, selecting the Books API as its purpose.

After that, you'll have to create the variable `BOOKS_CLIENT_API_KEY` on your local environment/production environment. With that said, the `.env` file will read it like so, and have our Google Books API communication functioning as expected:

```
REACT_APP_GOOGLE_BOOKS_API_KEY=$BOOKS_CLIENT_API_KEY
```

### Install project's dependencies

```bash
yarn install
```

### Run in development mode

```bash
yarn start
```

### Generate production build

```
yarn build
```
