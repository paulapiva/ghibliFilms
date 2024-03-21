import { useContext } from 'react';
import { styled } from 'styled-components';
import favIcon from '../../assets/icones/estrelaCheia.png';
import noFavIcon from '../../assets/icones/estrelaVazia.png';
import FilmsContext from '../../context/FilmsContext';
import { FilmType } from '../../types';

type Props = {
  film: FilmType;
  isFavorite: boolean;
};

const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  border: 1px solid black;
  border-radius: 5px;
  width: 45%;
  /* @media screen and (max-width: 1000px) {}  */

  height: (100%-50);
  margin-bottom: 20px;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
    height:100%;
    object-fit: contain;
  }
  figcaption {
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 40%;
  }
  p{
    font-family: 'Raleway';
    color: brown;
    font-size: 20px; 
    font-weight: 600;
    text-align: center;
  }
  button {
    position: absolute;
    top: 35px;
    right: 10px;
    border: none;
    background: rgba(255, 255, 255, 0.5);
    font-size: 5px;
    cursor: pointer;
    padding: 4px;
    border-radius: 10px;
  }

`;

function FilmCard({ film, isFavorite }: Props) {
  const { toggleFavorite } = useContext(FilmsContext);
  return (
    <Figure key={ film.id }>
      <img src={ film.image } alt={ film.title } />
      <figcaption>
        <h2>{film.title}</h2>
        <p>
          {film.description}
        </p>
      </figcaption>
      <button
        type="button"
        onClick={ () => toggleFavorite(film) }
      >
        <img
          src={ isFavorite ? favIcon : noFavIcon }
          alt={ isFavorite ? 'Desfavoritar' : 'Favoritar' }
          style={ { width: 24, height: 24 } }
        />
      </button>
    </Figure>

  );
}

export default FilmCard;
