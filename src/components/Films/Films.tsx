import { useContext } from 'react';
import { styled } from 'styled-components';
import FilmsContext from '../../context/FilmsContext';
import FilmCard from '../FilmCard/FilmCard';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center; 
  gap: 20px;
`;

function Films() {
  const { films, favorites } = useContext(FilmsContext);
  return (
    <main>
      <h1>Films</h1>
      <Container>
        {films.map((film) => (
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

export default Films;
