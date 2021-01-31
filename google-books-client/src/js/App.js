import { Link, Route, Switch } from 'react-router-dom';
import '../css/App.css';
import BookSearch from './pages/BookSearch';
import Favorites from './pages/Favorites';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/books">
          Buscar Livros
        </Link>
        <Link to="/favorites">
          Meus Favoritos
        </Link>
      </header>
      <main>
        <Switch>
          <Route path="/books" exact component={BookSearch} />
          <Route path="/favorites" exact component={Favorites} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
