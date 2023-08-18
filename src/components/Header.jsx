import React,{useEffect, useRef, useState} from 'react'
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import {ButtonLink} from '.';
import {SlMenu as OpenIcon} from 'react-icons/sl';
import {FaTimes as CloseIcon} from 'react-icons/fa';

const list = [
  "Individual",
  "Business",
  "Pricing",
  "Set your payroll"
]

const Header = () => {
  const headerRef = useRef();
  const [open,set_open] = useState(false);
  const handleScroll = ()=>{
    let h = window.scrollY;
    if(h > 50){
      if(headerRef && headerRef.current){
         headerRef.current.classList.add('scroll');
      }

    }else{
      if(headerRef && headerRef.current){
        headerRef.current.classList.remove('scroll');
     }
    }
  }

  useEffect(()=>{
    handleScroll();
    window.addEventListener('scroll',handleScroll);

    return ()=> window.removeEventListener('scroll',handleScroll);
  },[])
  return (
    <Wrapper ref={headerRef}>
      <div>
        <Link to="/">
          <img src={logo} />
        </Link>
        <nav className={open?'open':""}>
          <span>
            {open?<CloseIcon onClick={()=>set_open(!open)} />:<OpenIcon onClick={()=>set_open(!open)} />}
          </span>
          <div>
            {list.map((eLink) =>
              <Link key={eLink}>
                {eLink}
              </Link>
            )}
            
          </div>
          <div>
            <ButtonLink label="Login" to="#" bg="transparent"/>
            <ButtonLink label="Sign up" to="#"/>
          </div>

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
  transition: all 0.3s;
  &.scroll{
    box-shadow:var(--shadow-2);
    background-color: var(--white-color);
  }
  & > div{
    width: var(--main-width);
    padding: 20px 10px;
    display: flex;
    gap:70px;
    align-items: center;
    & > a{

    }
    & > nav{
      flex:1;
      display:flex;
      justify-content: space-between;
      font-family: var(--font-1);
      align-items: center;
      & > div:first-of-type{
        display:flex;
        gap:40px;
        & > a{
          color:var(--text-color);
        }
      }
      & > span{
        display: none;
      }
      & > div:nth-of-type(2){
        display:flex;
        gap:30px;
        & > a{
          padding: 10px 45px;
          box-shadow: var(--shadow);
          &:first-of-type{
            border:1px solid var(--dark-green);
            color:var(--dark-green);
          }
        }

      }
      @media screen and (width<=890px){
        position: fixed;
        right:0;
        top:0;
        display: grid;
        grid-template-columns: 1fr;
        align-content: start;
        height:10vh;
        width:calc(100% - 180px);
        & > span{
          display: flex;
          justify-content: flex-end;
          margin:20px 30px 0 0;
          width:fit-content;
          margin-left:auto;
          cursor: pointer;

        }
        & > div{
            display: none !important;
        }
        &.open{
          
          background-color: var(--white-color);
          padding:20px;
          height:100vh;
          box-shadow: -2px 0 3px 1px rgba(0,0,0,0.08);
          gap:30px;
          & > div{
            
            display: grid !important;
            grid-template-columns: 1fr;
            gap:30px;

          }
        }
       
      }
      @media screen and (width<=600px) {
        &.open{
          width:calc(100% - 100px);
        }
      }

    }
    

  }
  

`