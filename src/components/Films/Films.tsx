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
const MainEstilizada = styled.main`
  display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;

`

function Films() {
  const { films, favorites } = useContext(FilmsContext);
  return (
    <MainEstilizada>
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
    </MainEstilizada>
  );
}

export default Films;
