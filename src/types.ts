export type FilmType = {
  id: number;
  title: string;
  description: string;
  image: string;
};

export type ContextType = {
  films: FilmType[];
  favorites: FilmType[];
  toggleFavorite: (item: FilmType) => void;
};
