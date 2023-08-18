import React from 'react'
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <Wrapper>
      <div>
        <Link to="/">
          <img src={logo} />
        </Link>
        <nav>

        </nav>

      </div>
    </Wrapper>
  )
}

export default Header;


const Wrapper = styled.header`
  width:100%;
  position: fixed;
  top:0;
  left:0;
  display: flex;
  justify-content: center;
  z-index: 1000;
  & > div{
    width: var(--main-width);
    padding: 20px 10px;
    display: flex;
    gap:20px;
    align-items: center;
    & > a{

    }
    & > nav{
      flex:1;
    }
    

  }
  

`