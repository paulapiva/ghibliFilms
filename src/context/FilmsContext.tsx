import { createContext } from 'react';
import { ContextType, FilmType } from '../types';

const FilmsContext = createContext<ContextType>({
  films: [],
  favorites: [],
  toggleFavorite: () => {},
});

export default FilmsContext;
