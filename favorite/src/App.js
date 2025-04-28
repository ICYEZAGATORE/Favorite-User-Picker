import logo from './logo.svg';
import './App.css';
import { useFavoriteUser } from './components/FavoriteUserContext';

function App() {
  return (
    <div className="App">
      <useFavoriteUser/>
    </div>
  );
}

export default App;
