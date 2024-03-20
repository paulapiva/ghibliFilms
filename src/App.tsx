import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import FilmsContext from './context/FilmsContext';
import Header from './components/Cabecalho/Header';

// import Home from './pages/Home';
import Films from './components/Films/Films';
import Favorites from './components/Favorites/Favorites';
import { FilmType } from './types';
import EstilosGlobais from './components/EstilosGlobais/estilosGlobais';

function App() {
  const [films, setFilms] = useState<FilmType[]>([]);
  const [favorites, setFavorites] = useState<FilmType[]>([]);

  useEffect(() => {
    fetch('https://api-trybe-frontend.vercel.app/api/ghibli-animations')
      .then((result) => result.json())
      .then((data) => setFilms(data))
      .catch((error) => console.error(error));
  }, []);

  function toggleFavorite(item: FilmType) {
    const isAlreadyFavorite = favorites.find((favorite) => favorite.id === item.id);
    if (isAlreadyFavorite) {
      const newFavorites = favorites.filter((favorite) => favorite.id !== item.id);
      setFavorites(newFavorites);
    } else {
      setFavorites([...favorites, item]);
    }
  }

  const context = {
    films,
    favorites,
    toggleFavorite,
  };

  return (
    <FilmsContext.Provider value={ context }>
      <EstilosGlobais />
      <Header />
      <Routes>
        <Route path="/favorites" Component={ Favorites } />
        <Route path="/" Component={ Films } />
      </Routes>
    </FilmsContext.Provider>
  );
}

export default App;
