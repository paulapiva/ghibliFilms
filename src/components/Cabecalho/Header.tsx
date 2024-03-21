import { styled } from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import Logo from './logo.png';

const HeaderEstilizado = styled.header`
  background-color: #007DF9;
  color: #000000;
  /* position: fixed; */
  width: 100%;
  height: 150px;
  opacity: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* flex-wrap: wrap; */
  img{
    width: 320px;
    height: 150px;
    top: 17px;
    left: 121px;
    gap: 0px;
    opacity: 0px;
  }
  nav{
    display: flex;
    gap: 20px;
    margin-right: 20px;
    a{
      color: #000000;
      text-decoration: none;
      font-size: 25px;
      font-weight: 400;  
      
    }
  }
`;
function Header() {
  const { pathname } = useLocation();
  return (
    <HeaderEstilizado>
      <img src={ Logo } alt="logo" />
      <nav>
        {pathname === '/favorites' ? (
          <Link to="/">Films</Link>
        ) : (
          <Link to="/favorites">Favorites</Link>
        )}
      </nav>
    </HeaderEstilizado>
  );
}

export default Header;
