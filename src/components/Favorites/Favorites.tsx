import { useContext } from 'react';
import { styled } from 'styled-components';
import FilmCard from '../FilmCard/FilmCard';
import FilmsContext from '../../context/FilmsContext';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center; 
  gap: 20px;
`;

export default function Favorites() {
  const { favorites } = useContext(FilmsContext);

  return (
    <main>
      <h1>Favorites</h1>
      <Container>
        {favorites.map((film) => (
          <FilmCard
            key={ film.id }
            film={ film }
            isFavorite={ favorites.some((favorite) => favorite.id === film.id) }
          />
        ))}
      </Container>
    </main>
  );
}
